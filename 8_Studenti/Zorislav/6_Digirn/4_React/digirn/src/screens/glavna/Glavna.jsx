import { useEffect, use } from "react";
import { HeaderContext } from "../../context/HeaderProvider";
import styles from "./Glavna.module.css";

export default function Glavna() {
  const headerCtx = use(HeaderContext);

  const menuLista = [{ label: "Nalozi", path: "/nalozi" }];

  useEffect(() => {
    headerCtx.createMenu(menuLista);
  }, []);

  return (
    <section className={styles["section"]}>
      <h1>Dobrodošli u DIGIRN</h1>
      <p>
        DIGIRN je aplikacija za praćenje radnih naloga - DigitalniRadniNalozi
      </p>
      <p>Verzija 4 - React - Firebase SDK</p>
    </section>
  );
}
