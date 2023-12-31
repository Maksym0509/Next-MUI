'use client'
import React from "react";
import { useRouter } from "next/navigation";
import styles from './Events.module.scss';
import Grid from '@mui/material/Unstable_Grid2';
import EventCompoent from "../utils/eventComponent/eventComponent";
import ContactComponent from "../utils/contactUs/contactComponent";

const Events: React.FC = () => {
    
    const router = useRouter();
    const moveDetail = () => {
        router.push("/Events1");
    }

    return (
        <>
            <Grid xs={12}>
                <div className={styles.eventList1}>
                    <div className={styles.leftPart}>
                        <div className={styles.eventLogo1}>
                            Eventos
                        </div>
                        <div className={styles.eventLogo2}>
                            Calendar
                        </div>
                    </div>
                    <div className={styles.rightPart}>
                        <div className={styles.date}> 08/09</div>
                        <div className={styles.title1}>próximo</div>
                        <div className={styles.title2}>título</div>
                        <div className={styles.title3}>dirección y hora</div>
                        <div className={styles.title4}>INSCRIBIRSE</div>
                    </div>
                </div>
            </Grid>
            <Grid xs={12}>
                <div className={styles.eventList2}>
                    <div className={styles.title}>Pasados</div>
                    <div className={styles.list}>ALL (18)  |  TALLERES (8) |  RETIROS (11) |  WEBINARS (12)</div>
                </div>
                
            </Grid>
            <Grid xs={12}>
                <div className={styles.eventList3}>
                    <div className={styles.left} onClick={moveDetail} ><EventCompoent /></div>
                    <div className={styles.middle} onClick={moveDetail}><EventCompoent /></div>
                    <div className={styles.right} onClick={moveDetail}><EventCompoent /></div>
                </div>
            </Grid>
            <Grid xs={12}>
                <div className={styles.eventList4}>
                    <div className={styles.left} onClick={moveDetail}><EventCompoent /></div>
                    <div className={styles.middle} onClick={moveDetail}><EventCompoent /></div>
                    <div className={styles.right} onClick={moveDetail}><EventCompoent /></div>
                </div>
            </Grid>
            <div className={styles.contact}>
                <ContactComponent backColor="#AD00FF" />
            </div>
           
        </>
    )
}

export default Events;