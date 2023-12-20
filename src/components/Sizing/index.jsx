import styles from './index.module.css';

export const Sizing = () => {
    return (     
    <div className={styles.size_parent}>
    <div className={styles.colours}>Size:</div>
    <div className={styles.frame_container}>
    <div className={styles.xs_wrapper} id={styles.xs}>
        <div className={styles.xs}>XS</div>
    </div>
    <div className={styles.xs_wrapper} id={styles.s}>
        <div className={styles.s}>S</div>
    </div>
    <div className={styles.m_wrapper} id={styles.m}>
        <div className={styles.m}>M</div>
    </div>
    <div className={styles.xs_wrapper} id={styles.l}>
        <div className={styles.l}>L</div>
    </div>
    <div className={styles.xs_wrapper} id={styles.xl}>
        <div className={styles.xl}>XL</div>
    </div>
    </div>
</div>
)
}