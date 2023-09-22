'use client'
import React from 'react'
import styles from './contactComponent.module.scss'
import Grid from '@mui/material/Unstable_Grid2'

export interface IProps {
    backColor: string;
}

const ContactComponent: React.FC<IProps> = ({backColor}) => {
    return (
        <>
            <Grid xs={12} 
                    sx={{padding:"0px"}}
                >  
                <div className={styles.contactEmail} style={{backgroundColor:backColor}}>
                    <div className={styles.containEmail}>
                        <div className={styles.contactLogo}>
                            Suscríbete a nuestras publicaciones
                        </div>
                        <div className={styles.contactInput}>
                            <div className={styles.customInput} >
                                <input type="text" placeholder="Escribe tu email" style={{backgroundColor:backColor}} />
                                <button style={{backgroundColor:backColor}}>Enviar</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBar} style={{backgroundColor:backColor}}>
                        <div className={styles.footerBar1}>
                            teléfono
                        </div >
                        <div className={styles.footerBar2}>
                            instagram
                        </div>
                        <div className={styles.footerBar3}>
                            dirección
                        </div>
                    </div>
                </div>
            </Grid>

        </>
    )
}

export default ContactComponent;