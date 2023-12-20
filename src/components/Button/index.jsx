import styles from './index.module.css';
import { useNavigate } from "react-router-dom";

export const Button = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Cart");
  }


// export const Button = () => {
return (
  <button className={styles.button} id={styles.buy_now} type="button" onClick={handleClick}>
    {/* <div className={styles.button} id={styles.buy_now}> */}
        <div className={styles.add_to_cart}>Buy Now</div>
        {/* <script src="../scripts/addItems.js" type="text/javascript"></script> */}
        </button>
    // </div>
)
};