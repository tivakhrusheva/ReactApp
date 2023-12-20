
import styles from './index.module.css';


export const CartMainSection = () => {
    return (
            <div className={styles.cart_main_section}>
                        <div className={styles.product_parent}>
                        <div className={styles.product}>Product</div>
                        <div className={styles.product}>Price</div>
                        <div className={styles.product}>Quantity</div>
                        <div className={styles.product}>Subtotal</div>
                </div>
            </div>
    )
}
