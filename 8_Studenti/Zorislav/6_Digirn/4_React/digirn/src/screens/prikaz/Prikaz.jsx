import { useState, useEffect } from "react";
import { useParams } from "react-router";
import styles from "./Prikaz.module.css";
import { firebaseGetOne } from "../../shared/functions";

export default function Prikaz() {
  const { id } = useParams();
  const [nalog, setNalog] = useState({
    brojNaloga: "",
    brojNarudzbe: "",
    datumNaloga: "",
  });

  useEffect(() => {
    const getNalog = async (id) => {
      const nalog = await firebaseGetOne(id);
      setNalog({
        brojNaloga: nalog.brojNaloga,
        brojNarudzbe: nalog.brojNarudzbe,
        datumNaloga: nalog.datumNaloga,
      });
    };
    getNalog(id);
  });

  return (
    <section className={styles["section"]}>
      <h1>Prikaz Naloga</h1>
      <hr />
      <div>
        <p>Broj naloga:</p>
        <p>{nalog.brojNaloga}</p>
        <p>Narudžbenica:</p>
        <p>{nalog.brojNarudzbe}</p>
        <p>Datum otvaranja:</p>
        <p>{nalog.datumNaloga}</p>
      </div>
    </section>
  );
}
