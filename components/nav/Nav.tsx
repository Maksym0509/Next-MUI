"use client"
import React, {useState, useEffect} from "react";
import { useRouter,usePathname  } from "next/navigation";
import styles from "./Nav.module.scss"
import Link from "next/link";
import NavComponent from "../utils/navComponent/NavComponent";

const Nav: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [defaultColor, setDefaultColor] = useState<string>("#490266");
    const [isHome, setIsHome] = useState<boolean>(false);
    const [isTodo, setIsTodo] = useState<boolean>(false);
    const [isEvents, setIsEvents] = useState<boolean>(false);
    const [isEvents1, setIsEvents1] = useState<boolean>(false);
    const [isContact, setIsContact] = useState<boolean>(false);
    const gotoHome = () => {
        router.push("/Home")
    }
    const gotoTodo = () => {
        router.push("/Todo");
    }

    const gotoEvents = () => {
        router.push('/Events');
    }

    const gotoEvents2 = () => {
        router.push('/Events2');
    }

    const gotoContact = () => {
        router.push('/Contact');
    }
    useEffect(() => {
        if(pathname === '/' || pathname === '/Home') setIsHome(true) 
        else setIsHome(false);
        if(pathname === '/Todo') {
            setIsTodo(true);
            setDefaultColor("#F3A242")
        }else{
            setIsTodo(false);
            setDefaultColor("#490266")
        }
        pathname === '/Events' ? setIsEvents(true) : setIsEvents(false) ;
        pathname === '/Events1'? setIsEvents1(true) : setIsEvents1(false);
        pathname === '/Contact'? setIsContact(true) : setIsContact(false);
    },[pathname]);

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
                            <li onClick={gotoHome} style={isHome ? {color:"#490266"} : {color:"black"}}> MANIFIESTO </li>
                            <li onClick={gotoTodo} style={isTodo ? {color:"#F3A242"} : {color:"black"}}> ¿QUÉ HACEMOS? </li>
                            <li onClick={gotoEvents} style={isEvents ? {color:"#490266"} : {color:"black"}}> EQUIPO </li>
                            <li onClick={gotoEvents2} style={isEvents1 ? {color:"#490266"} : {color:"black"}}> EVENTOS </li>
                            <li onClick={gotoContact} style={isContact ? {color:"#490266"} : {color:"black"}}> CONTACTO </li>
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
            <div className={styles.responNav}>
                <NavComponent backColor={defaultColor} />
            </div>
        </>
    )
}

export default Nav;