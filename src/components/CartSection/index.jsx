
import styles from './index.module.css';

export const CartSection = () => {
    return (
        <div>
        <div className={styles.cart_section}>
            <div className={styles.div2}> $960</div>
            <div className={styles.div3}>6720</div>
            <div className={styles.quantity1}>
                <div className={styles.parent}>
                    <div className={styles.product}>7</div>
                    <div className={styles.drop_up_small_parent}>
                        <img className={styles.drop_up_small_icon} alt="" src="https://raw.githubusercontent.com/tivakhrusheva/js-api-homework/main/assets/cart-page/dropupsmall.svg?sanitize=true"/>

                        <img className={styles.drop_up_small_icon} alt="" src="https://raw.githubusercontent.com/tivakhrusheva/js-api-homework/main/assets/cart-page/dropdownsmall.svg?sanitize=true"/>
                    </div>
                </div>
            </div>
            <div className={styles.monitor_cart_small}>
                <img className={styles.g27cq4_500x500_1_icon} alt="" src="https://storage.yandexcloud.net/test-bucket-for-uxers/laptop-pic.jpg"/>
            </div>
        <div className={styles.lcd_monitor}>ASUS FHD Gaming Laptop</div>
        <img className={styles.icon_cancel} alt="" src="https://raw.githubusercontent.com/tivakhrusheva/js-api-homework/main/assets/cart-page/iconcancel.svg?sanitize=true"/>
        
        </div>
        <div className={styles.update_button}>
        <div className={styles.view_all_products}>Update Cart</div>
    </div>
 </div>
    )
}