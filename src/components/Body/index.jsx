import styles from './index.module.css';
// import { Button } from '/src/components/Button/index';
import { Delivery } from '/src/components/Delivery/index';
import { Sizing } from '/src/components/Sizing/index';
import { Related } from '/src/components/Related/index';
import { ButtonCounter } from '/src/components/ButtonCounter';

export const Body = () => {
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
            <div className={styles.search_component_set_parent}>
              <div className={styles.search_component_set}>
                <div className={styles.what_are_you_looking_for_parent}>
                  <div className={styles.what_are_you}>What are you looking for?</div>
                  <img
                    className={styles.dropdown_icon}
                    alt=""
                    src="./src/assets/product_page/component-2.svg"
                  />
                </div>
              </div>
              <div className={styles.wishlist_parent}>
                <img className={styles.wishlist_icon} alt="" src="./src/assets/product_page/wishlist.svg" />
    
                <img
                  className={styles.cart1_with_buy}
                  alt=""
                  src="./src/assets/product_page/cart1-with-buy.svg"
                />
                <img className={styles.wishlist_icon} alt="" src="./src/assets/product_page/user.svg" />
              </div>
            </div>
          </div>
          <img
            className={styles.product_details_page_child}
            alt=""
            src="./src/assets/product_page/line-3.svg"/>   
        <div className={styles.item_price}>$1960</div>
        <div className={styles.frame_group}>
                <div className={styles.four_star_parent}>
                    <div className={styles.four_star}>
                        <img className={styles.vector_icon} alt="" src="https://raw.githubusercontent.com/tivakhrusheva/js-api-homework/main/assets/product_page/vector.svg?sanitize=true"/>

                        <img className={styles.vector_icon} alt="" src="https://raw.githubusercontent.com/tivakhrusheva/js-api-homework/main/assets/product_page/vector.svg?sanitize=true"/>

                        <img className={styles.vector_icon} alt="" src="https://raw.githubusercontent.com/tivakhrusheva/js-api-homework/main/assets/product_page/vector.svg?sanitize=true"/>

                        <img className={styles.vector_icon} alt="" src="https://raw.githubusercontent.com/tivakhrusheva/js-api-homework/main/assets/product_page/vector.svg?sanitize=true"/>

                        <img className={styles.vector_icon4} alt="" src="https://raw.githubusercontent.com/tivakhrusheva/js-api-homework/main/assets/product_page/vector1.svg?sanitize=true"/>
                    </div>
                <div className={styles.account}>(150 Reviews)</div>
            </div>
            <div className={styles.line_parent}>
                <div className={styles.frame_child}></div>
                <div className={styles.in_stock}>In Stock</div>
            </div>
            <div className={styles.playstation_5_controller}>
                some smart and pretty description of this item will someday be here
            </div>
            <div className={styles.quantity1}>
              <div className={styles.parent}>

                <div className={styles.drop_up_small_parent}>
                 
                </div>
              </div>
            </div>
            
        <div className={styles.product_description}>
            <div className={styles.roadmap}>
                <div className={styles.account}>Account</div>
                <img className={styles.roadmap_child} alt="" src="./src/assets/product_page/line-13.svg" />

                <div className={styles.account}>Gaming</div>
                <img className={styles.roadmap_item} alt="" src="./src/assets/product_page/line-14.svg" />

                <div className={styles.nothing1}>Product</div>
                <img className={styles.roadmap_item} alt="" src="./src/assets/product_page/line-14.svg" />

                <div className={styles.nothing1}>View Cart</div>
                <img className={styles.roadmap_child} alt="" src="./src/assets/product_page/line-13.svg" />

                <div className={styles.english}>Havic HV G-92 Gamepad</div>
        </div>
    <div className={styles.image_63_wrapper} >
        <ul>
            <li>
              <img className={styles.image_63_icon} id="main_icon" alt="" src="https://storage.yandexcloud.net/test-bucket-for-uxers/image-63%402x.png"/>
            </li>
          </ul>
    </div>
        
    <div className={styles.havic_hv_g_92}>Havic HV G-92 Gamepad
        <div className={styles.products_info}>
            <div className={styles.main_product}>
                <div className={styles.table_div}></div>
            </div>
            <div className={styles.product_parameters}>
            <div className={styles.colours_parent}>
                <div className={styles.colours}>Colours:</div>
                <div className={styles.four_star_parent}>
                    <img
                        className={styles.colour_chnage_child}
                        alt=""
                        src="./src/assets/product_page/group-1000005935.svg"
                    />

                    <div className={styles.colour_chnage_item}></div>
                </div>
            </div>
            <Sizing />
            </div>
            <img className={styles.underline_icon} alt="" src="./src/assets/product_page/underline.svg" />
            <div className={styles.ButtonCounters}>
                <ButtonCounter />
            </div>
            {/* <div className={styles.frame_div}>
                <img className={styles.frame_item} alt="" src="./src/assets/product_page/frame-906.svg" id={styles.add_less}/>

                <div className={styles.wrapper}>
                <div className={styles.div1} id={styles.product_counter}>1</div>
                <Button />
                </div>
                <img className={styles.frame_inner} alt="" src="./src/assets/product_page/frame-907.svg" id={styles.add_more}/>
            </div> */}
            <Delivery />
        </div>
        <div className={styles.category_rectangle_parent}>
            <div className={styles.category_rectangle}>
              <div className={styles.category_rectangle_child}></div>
            </div>
              <div className={styles.related_item}>Related Items</div>
            </div>
            <div className={styles.related1}>
                <Related image={"./src/assets/product_page/g922500x500-1@2x.png"} productTitle={"HAVIT HV-G92 Gamepad"} discount={40} oldPrice={160} nReviews={88}/>
            </div>
            <div className={styles.related2}>
                <Related image={"./src/assets/product_page/ak90001500x500-1@2x.png"} productTitle={"AK-900 Wired Keyboard"} discount={35} oldPrice={1160} nReviews={75}/>
            </div>
            <div className={styles.related3}>
                <Related image={"./src/assets/product_page/g27cq4500x500-1@2x.png"} productTitle={"IPS LCD Gaming Monitor"} discount={30} oldPrice={400} nReviews={99}/>
            </div>
            <div className={styles.related4}>
                <Related image={"./src/assets/product_page/gammaxxl240argb1500x500-1@2x.png"} productTitle={"RGB liquid CPU Cooler"} discount={5} oldPrice={170} nReviews={65}/>
            </div>
        </div>
    </div>
    </div>
    </div>
    );
};
    