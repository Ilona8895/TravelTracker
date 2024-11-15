import DatePicker from "react-datepicker";
import BackButton from "./BackButton";
import styles from "./PlanTravel.module.css";
import { useState } from "react";
import { flagEmojiToPNG } from "../functions/flagEmojiToPNG";
import { useSearchParams } from "react-router-dom";

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function PlanTravel() {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [numberAdults, setNumberAdults] = useState(1);
  const [numberChildren, setNumberChildren] = useState(0);
  const [numberRooms, setNumberRooms] = useState(1);

  const [searchParams] = useSearchParams();

  const cityName = searchParams.get("city");
  const country = searchParams.get("country");
  const emoji = searchParams.get("countryCode");

  const convertedDateFrom = formatDate(dateFrom);
  const convertedDateTo = formatDate(dateTo);

  return (
    <div className={styles.planTravel}>
      <div className={styles.column}>
        <h6>City name</h6>
        <h3>
          <span>{flagEmojiToPNG(emoji)}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <div>
          <h6>Date of arrival</h6>
          <DatePicker
            id="date"
            showIcon
            selected={dateFrom}
            onChange={(dateFrom) => setDateFrom(dateFrom)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <h6>Date of departure</h6>
          <DatePicker
            id="date"
            showIcon
            selected={dateTo}
            onChange={(dateTo) => setDateTo(dateTo)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <h6>Number of adults</h6>
          <select
            value={numberAdults}
            onChange={(e) => setNumberAdults(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div>
          <h6>Number of children</h6>
          <select
            value={numberChildren}
            onChange={(e) => setNumberChildren(e.target.value)}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <div className={styles.column}>
        <h6>Number of rooms</h6>
        <select
          value={numberRooms}
          onChange={(e) => setNumberRooms(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className={styles.column}>
        <h6>Check accomodation</h6>
        <a
          className={styles.link}
          href={`https://www.booking.com/searchresults.pl.html?ss=${cityName}%2C+${country}&checkin=${convertedDateFrom}&checkout=${convertedDateTo}&group_adults=${numberAdults}&no_rooms=${numberRooms}&group_children=${numberChildren}`}
          target="_blank"
          rel="noreferrer"
        >
          Check accommodation on Booking &rarr;
        </a>
      </div>
      <div className={styles.column}>
        <h6>Check flights</h6>
        <a
          className={styles.link}
          href={`https://www.kayak.pl/`}
          target="_blank"
          rel="noreferrer"
        >
          Check out flights on Kayak &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default PlanTravel;
