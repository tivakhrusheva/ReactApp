import styles from './index.module.css';


export const CartButton = () => {
    return (
    <div className={styles.button}>
        <div className={styles.view_all_products} id={styles.shop_returner}>Return To Shop</div>
    </div>
    )
}