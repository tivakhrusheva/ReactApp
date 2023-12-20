import styles from './index.module.css';
import { Discount } from '/src/components/Discount/index';



export const Related = ({image, productTitle, discount, oldPrice, nReviews}) => {
  console.log("props " + discount.discountSize)
    return (     
    <div className="frameparent">
        <div className={styles.category_rectangle_parent}>
           <div className={styles.category_rectangle}>
            <div className={styles.category_rectangle_child}></div>
          </div>
       </div>
        <div className={styles.cart_with_flat_discount_parent}>
           <div className={styles.cart_with_flat_discount}>
           <div className={styles.discount_percent_parent}>
              <div className={styles.discount_percent}>
                {/* <div className={styles.div2}>{discount}</div> */}
                <Discount/>
              </div>
              <div className={styles.fill_heart_parent}>
                <img className={styles.fill_heart_icon} alt="" src="./src/assets/product_page/fill-heart.svg"/>

                <img className={styles.fill_heart_icon} alt="" src="./src/assets/product_page/fill-eye.svg"/>
              </div>
              <div className={styles.g92_2_500x500_1_wrapper}>
                <img className={styles.g92_2_500x500_1_icon} alt="" src={image}/>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.itemTitle}>{productTitle}</div>
              <div className={styles.parent}>
                <div className={styles.cart}>${oldPrice*(100-discount)*0.01}</div>
                <div className={styles.div4}>${oldPrice}</div>
              </div>
              <div className={styles.five_star_parent}>
                <div className={styles.four_star}>
                  <img className={styles.vector_icon} alt="" src="./src/assets/vector.svg"/>
                  <img className={styles.vector_icon} alt="" src="./src/assets/vector.svg"/>
                  <img className={styles.vector_icon} alt="" src="./src/assets/vector.svg"/>
                  <img className={styles.vector_icon} alt="" src="./src/assets/vector.svg"/>
                  <img className={styles.vector_icon} alt="" src="./src/assets/vector.svg"/>
                <div className={styles.div5}>({nReviews})</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      }