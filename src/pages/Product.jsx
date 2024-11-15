/* Zdjęcie dodane przez Vincent Rivaud: https://www.pexels.com/pl-pl/zdjecie/biale-lodzie-na-zbiorniku-wodnym-2265876/ */

import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img className={styles.image} src="img-1.jpg" alt="white boats" />
        <div>
          <h2>About TravelTracker.</h2>
          <p>
            Do you love traveling and are constantly looking for opportunities
            to visit new places in the world? Thanks to the application
            TravelTracker you can plan your trip or save your travel memories.
          </p>
          <p>
            Plan your trip by checking hotels and flights and next then add your
            destination to your list places to visit.
          </p>
        </div>
      </section>
    </main>
  );
}
