import styles from './index.module.css';

export const Header = () => {
    return (
        <header className={styles.title}>
            <div className={styles.product_details_page__wrapper}>
                <div className={styles.top_header}>
                    <div className={styles.headerContent}></div>
                        <div className={styles.frame_parent}>
                        <div className={styles.summer_sale_for_all_swim_suits_parent}>
                            <div className={styles.summer_sale_for}>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF
                            50%!
                            </div>
                                <div className={styles.shopnow}>ShopNow</div>
                        </div>
                        <div className={styles.english_parent}>
                            <div className={styles.english}>English</div>
                            <img className={styles.dropdown_icon} alt="" src="./src/assets/product_page/dropdown.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
