import React from "react";
import styles from "./Nav.module.scss"

const Nav: React.FC = () => {
    return(
        <>
            <div className={styles.nav_list}>
                <div className={styles.logo_layout}>
                    <p className={styles.logo_p}>
                        LOGO IMAGE HERE
                    </p>
                </div>
                <div className={styles.ul_list}>
                    <center>
                        <ul>
                            <li> MANIFIESTO </li>
                            <li> ¿QUÉ HACEMOS? </li>
                            <li> EVENTOS </li>
                            <li> EVENTOS </li>
                            <li> CONTACTO </li>
                        </ul>
                    </center>
                </div>
                <div className={styles.cart_list}>
                    <center>
                        <ul>
                            <li> ES/EN </li>
                            <li> <img src="./cart.png"></img> </li>
                        </ul>
                    </center>
                </div>

            </div>
        </>
    )
}

export default Nav;