import { use, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { HeaderContext } from "../../context/HeaderProvider";
import database from "../../data/firebase";
import { useNavigate } from "react-router";

import styles from "./Lista.module.css";

export default function Lista() {
  const headerCtx = use(HeaderContext);
  const [fireNalozi, setFireNalozi] = useState({});
  const [nemaNaloga, setNemaNaloga] = useState(true);
  const navigate = useNavigate();

  const menuLista = [
    { label: "Glavna", path: "/ " },
    { label: "Novi nalog", path: "/" },
  ];

  const odabraniNalog = (id) => {
    navigate(`/nalog/${id}`);
  };

  useEffect(() => {
    headerCtx.createMenu(menuLista);
  }, []);

  useEffect(() => {
    const dbRef = ref(database, "digirn2/");
    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setNemaNaloga(false);
        setFireNalozi(snapshot.val());
      } else {
        setNemaNaloga(true);
        setFireNalozi({});
      }
    });
  }, []);

  return (
    <section className={styles["section"]}>
      <h1>Lista Radnih Naloga</h1>
      <table>
        <thead>
          <tr>
            <th>R.br.</th>
            <th>Broj naloga</th>
            <th>Datum naloga</th>
            <th>Datum početka</th>
            <th>Datum završetka</th>
            <th>Naručitelj</th>
            <th>Izvršitelj</th>
            <th>Naslov</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(fireNalozi).map((nalog, index) => {
            return (
              <tr key={index} onClick={() => odabraniNalog(nalog)}>
                <td>{index + 1}</td>
                <td>{fireNalozi[nalog].brojNaloga}</td>
                <td>{fireNalozi[nalog].datumNaloga}</td>
                <td>{fireNalozi[nalog].datumPocetka}</td>
                <td>{fireNalozi[nalog].datumZavrsetka}</td>
                <td>{fireNalozi[nalog].narucitelj}</td>
                <td>{fireNalozi[nalog].izvrsitelj}</td>
                <td>{fireNalozi[nalog].naslov}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {nemaNaloga && <p>Nema naloga</p>}
    </section>
  );
}
