import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.header}>
        <img src="/logo.png" alt="TravelTracker logo" className={styles.logo} />
        <h1 className={styles.title}>TravelTracker</h1>
      </div>
    </Link>
  );
}

export default Logo;
