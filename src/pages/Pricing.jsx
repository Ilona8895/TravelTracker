/* Zdjęcie dodane przez gya den: https://www.pexels.com/pl-pl/zdjecie/samochod-dostawczy-zaparkowany-przy-drodze-w-poblizu-poreczy-i-oceanu-2303781/ */

import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img className={styles.image} src="img-2.jpg" alt="car" />
      </section>
    </main>
  );
}
