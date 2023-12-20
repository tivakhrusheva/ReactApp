
import styles from './index.module.css';


export const CardTotal = () => {
    return (
    <div className={styles.cart_total_parent}>
            <div className={styles.cart_total}>Cart Total</div>
            <div className={styles.subtotal_parent}>
              <div className={styles.product}>Subtotal:</div>
              <div className={styles.product}>$1750</div>
            </div>
            <div className={styles.shipping_parent}>
              <div className={styles.product}>Shipping:</div>
              <div className={styles.product}>Free</div>
            </div>
            <div className={styles.total_parent}>
              <div className={styles.product}>Total:</div>
              <div className={styles.product}>$1750</div>
            </div>
            <div className={styles.button3}>
              <div className={styles.view_all_products}>Procees to checkout</div>
            </div>
            <img className={styles.underline_icon} alt="" src="../assets/cart-page/underline.svg"/>
            <img className={styles.underline_icon1} alt="" src="../assets/cart-page/underline.svg"/>
          </div>
          )
        }