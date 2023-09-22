"use client"
import React , {useState} from "react";
import { useRouter } from "next/navigation";
import styles from "./navComponent.module.scss"

export interface IProps{
    backColor: string
}

const NavComponent: React.FC<IProps> = ({backColor}) =>{

    const router = useRouter();
    const [show , setShow] = useState<boolean>(false);
    const [showTodo, setShowTodo] = useState<boolean>(false);
    const [showEvent, setShowEvent] = useState<boolean>(false);

    const showMenubar = () => {
        setShow(!show);
    }

    const showTodoList = () => {
        setShowTodo(!showTodo);
    }

    const showEventList = () => {
        setShowEvent(!showEvent);
    }
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


    return(
        <>
            <div className={styles.navCmp}>
                <div className={styles.top}>
                    <div className={styles.topMenu} onClick={showMenubar}>
                        <center>
                            <div className={styles.line1} style={{backgroundColor:backColor}}>
                            </div>
                            <div className={styles.line2} style={{backgroundColor:backColor}}>
                            </div>
                            <div className={styles.line3} style={{backgroundColor:backColor}}>
                            </div>
                        </center>
                    </div>
                    <div className={styles.topLogo}>
                        <center>
                            LOGO IMAGE HERE
                        </center>
                    </div>
                    <div className={styles.topCart}>
                        <center>
                            <img src="./cart.png"></img>
                        </center>
                    </div>
                </div>
                {show && 
                <div className={styles.menubar}>
                    <div className={styles.menu1} onClick={gotoHome} >
                        MANIFIESTO
                    </div>
                    <div className={styles.menu2} >
                        <span onClick={showTodoList}>¿QUÉ HACEMOS?</span>
                        {
                        showTodo &&     
                        <div className={styles.items} onClick={gotoTodo}>
                            <div className={styles.item1}>
                            PERCEPCIÓN ENERGÉTICA
                            </div>
                            <div className={styles.item2}>
                            DISEÑO HUMANO
                            </div>
                            <div className={styles.item3}>
                            CONSTELACIONES
                            </div>
                            <div className={styles.item4}>
                            NEUROCIENCIA
                            </div>
                            <div className={styles.item5}>
                            ANEXO
                            </div>
                        </div>
                        }
                    </div>
                    <div className={styles.menu3} onClick={gotoEvents}>
                    EQUIPO
                    </div>
                    <div className={styles.menu4} >
                    <span onClick={showEventList}>EVENTOS</span>
                    {
                        showEvent &&
                        <div className={styles.items} onClick={gotoEvents2}>
                            <div className={styles.item1}>
                            TALLERES
                            </div> 
                            <div className={styles.item2}>
                            RETIROS
                            </div>
                            <div className={styles.item2}>
                            WEBINARS
                            </div>
                        </div>
                    }
                    </div>
                    <div className={styles.menu5} onClick={gotoContact}>
                    CONTACTO
                    </div>
                    <div className={styles.menu6}>
                    ES/EN
                    </div>
                </div>}
            </div>
        </>
    )
}

export default NavComponent;