'use client'
import React from "react";
import styles from './eventCompoent.module.scss';

const EventCompoent: React.FC = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    16/07
                </div>
                <div className={styles.cardFooter}>
                    <div className={styles.left}>Título</div>
                    <div className={styles.right}>ítuloOfficius nonecturiam resequi imodipis re si optae sima vero omnim
                     experitis eoste rehende nectibus volorias adis</div>
                </div>
            </div> 
        </>
    )
}

export default EventCompoent;