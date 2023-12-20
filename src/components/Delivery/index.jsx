
import styles from './index.module.css';

export const Delivery = () => {
    return (
         <div className={styles.underline_parent}>
                <img className={styles.underline_icon} alt="" src="./src/assets/underline1.svg"/>

                <div className={styles.icon_delivery_parent}>
                <img className={styles.icon_delivery} alt="" src="./src/assets/product_page/icondelivery.svg"/>

                <div className={styles.free_delivery_parent}>
                    <div className={styles.add_to_cart1}>Free Delivery</div>
                    <div className={styles.enter_your_postal}>Enter your postal code for Delivery Availability</div>
                </div>
            </div>
        <div className={styles.icon_return_parent}>
          <img className={styles.icon_return} alt="" src="./src/assets/product_page/iconreturn.svg"/>

          <div className={styles.free_delivery_parent}>
            <div className={styles.add_to_cart}>Return Delivery</div>
            <div className={styles.free_30_days_container}>
              Free 30 Days Delivery Returns.
              <span className={styles.details}>Details</span>
            </div>
          </div>
        </div>
      </div>
    )
}