import styles from './index.module.css';

export const Footer= () => {
    return (
        <div className={styles.footer}>
        <div className={styles.underline_group}>
          <img className="underline-icon2" alt="" src="./src/assets/product_page/underline2.svg" />
    
          <div className={styles.frame_wrapper}>
            <div className={styles.icon_copyright_parent}>
              <img
                className="star-half-filled-icon"
                alt=""
                src="./src/assets/product_page/iconcopyright.svg"
              />
    
              <div className={styles.exclusivegmailcom}>
                Copyright Rimel 2022. All right reserved
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame_parent2}>
          <div className={styles.frame_parent3}>
            <div className={styles.logo_group}>
              <div className={styles.logo_group}>
                <div className={styles.logo}>
                  <b className={styles.exclusive}>Exclusive</b>
  
                </div>
                <div className={styles.subscribe}>Subscribe</div>
              </div>
              <div className={styles.get_10_off}>Get 10% off your first order</div>
            </div>
            <div className={styles.send_mail}>
              <div className={styles.enter_your_email}>Enter your email</div>
              <img className={styles.dropdown_icon} alt="" src="./src/assets/product_page/iconsend.svg" />
            </div>
          </div>
          <div className={styles.logo_group}>
            <div className={styles.support}>Support</div>
            <div className={styles.bijoy_sarani_dhaka_dh_1515_parent}>
              <div className={styles.bijoy_sarani_dhaka}>
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </div>
              <div className={styles.exclusivegmailcom}>exclusive@gmail.com</div>
              <div className={styles.exclusivegmailcom}>+88015-88888-9999</div>
            </div>
          </div>
          <div className={styles.logo_group}>
            <div className={styles.support}>Account</div>
            <div className={styles.bijoy_sarani_dhaka_dh_1515_parent}>
              <div className={styles.exclusivegmailcom}>My Account</div>
              <div className={styles.exclusivegmailcom}>Login / Register</div>
              <div className={styles.exclusivegmailcom}>Cart</div>
              <div className={styles.exclusivegmailcom}>Wishlist</div>
              <div className={styles.exclusivegmailcom}>Shop</div>
            </div>
          </div>
          <div className={styles.logo_group}>
            <div className={styles.support}>Quick Link</div>
            <div className={styles.bijoy_sarani_dhaka_dh_1515_parent}>
              <div className={styles.exclusivegmailcom}>Privacy Policy</div>
              <div className={styles.exclusivegmailcom}>Terms Of Use</div>
              <div className={styles.exclusivegmailcom}>FAQ</div>
              <div className={styles.exclusivegmailcom}>Contact</div>
            </div>
          </div>
          <div className={styles.logo_group}>
            <div className={styles.logo_group}>
              <div className={styles.support}>Download App</div>
              <div className={styles.save_3_with_app_new_user_only_parent}>
                <div className={styles.save_3_with}>Save $3 with App New User Only</div>
                <div className={styles.summer_sale_for_all_swim_suits_parent}>
                  <div className={styles.qr_code}>
                    <img
                      className={styles.qrcode_1_icon}
                      alt=""
                      src="./src/assets/qrcode-1@2x.png"
                    />
                  </div>
                  <div className={styles.googleplay_parent}>
                    <img
                      className={styles.googleplay_icon}
                      alt=""
                      src="./src/assets/product_page/googleplay.svg"
                    />
    
                    <div className={styles.appstore}>
                      <img
                        className={styles.download_appstore_icon}
                        alt=""
                        src="./src/assets/product_page/downloadappstore@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.icon_facebook_parent}>
              <img
                className={styles.dropdown_icon}
                alt=""
                src="./src/assets/product_page/iconfacebook.svg"
              />
    
              <img
                className={styles.dropdown_icon}
                alt=""
                src="./src/assets/product_page/icontwitter.svg"
              />
    
              <img
                className={styles.dropdown_icon}
                alt=""
                src="./src/assets/product_page/iconinstagram.svg"
              />
    
              <img
                className={styles.dropdown_icon}
                alt=""
                src="./src/assets/product_page/iconlinkedin.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
};
