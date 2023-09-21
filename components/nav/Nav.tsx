import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Nav.module.scss"
import Link from "next/link";

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
                            <Link href='/Home'> <li> MANIFIESTO </li></Link>
                            <Link href='/Todo'><li> ¿QUÉ HACEMOS? </li></Link>
                            <Link href='/Events'><li> EQUIPO </li></Link>
                            <Link href='/Events2'><li> EVENTOS </li></Link>
                            <Link href='/Contact'><li> CONTACTO </li></Link>
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