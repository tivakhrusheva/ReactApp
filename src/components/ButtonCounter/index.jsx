import { useState } from 'react';
import { Button } from '/src/components/Button/index';
import styles from './index.module.css';

export const ButtonCounter = () =>  {
    const [counter, setCounter] = useState(0);
  
    const incrementCounter = () => {
      setCounter(counter + 1);
    };
  
    const decrementCounter = () => {
      if (counter !== 0) {
        setCounter(counter - 1);
      }
    };
    return (
    <div className={styles.frame_div}>
                <img className={styles.frame_minus} alt="" src="./src/assets/product_page/frame-906.svg" id={styles.add_less} onClick={decrementCounter}/>

                <div className={styles.counter_wrapper}>
                  <div className={styles.div1} id={styles.product_counter}>{counter}</div>
                </div>
                <Button />
                <img className={styles.frame_plus} alt="" src="./src/assets/product_page/frame-907.svg" id={styles.add_more} onClick={incrementCounter}/>
            </div>

    )
}

export default ButtonCounter;
