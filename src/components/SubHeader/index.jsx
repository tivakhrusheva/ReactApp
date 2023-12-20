
import styles from './index.module.css';

export const SubHeader = () => {
    return (     
    <div className={styles.product_body}>
        <div className={styles.menu}>
            <div className={styles.logo_parent}>
              <div className={styles.logo}>
                <b className={styles.exclusive}>Exclusive</b>
              </div>
              <div className={styles.header_parent}>
                <div className={styles.header1} id={styles.headerContainer}>
                  <div className={styles.home}>Home</div>
                </div>
                <div className={styles.header2}>
                  <div className={styles.home}>Contact</div>
                </div>
                <div className={styles.header3}>
                  <div className={styles.home}>About</div>
                </div>
                <div className={styles.header4}>
                  <div className={styles.home}>Sign Up</div>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
}