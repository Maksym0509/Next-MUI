'use client'
import React from "react"
import styles from "./Todo.module.scss"
import Grid from '@mui/material/Unstable_Grid2'
import { IconArrowBottom } from "../assets/icons"
import Image from "next/image"

const todo: React.FC = () => {
    return(
        <>
            <div className={styles.todoList}>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <span className={styles.todolist_title}>
                            ¿Qué hacemos?
                        </span>
                    </Grid>
                    <Grid xs={12} sx={{padding:"0px"}}>
                        <div className={styles.todo_image1}>
                            <div className={styles.image_title1}>  
                                Percepción energética
                            </div>
                            <div className={styles.image_title2}>  
                                Subtítulo
                            </div>
                            <div className={styles.image_description}>  
                                dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea 
                                con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il 
                                earum quae pos a
                            </div>
                            <div className={styles.image_arrowBtn}>
                                <Image src={IconArrowBottom} alt="" />
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} sx={{padding:"0px"}}>
                        <div className={styles.todo_image2}>
                            <div className={styles.image_title1}>  
                                Diseño Humano
                            </div>
                            <div className={styles.image_title2}>  
                                Subtítulo
                            </div>
                            <div className={styles.image_description}>  
                                dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat 
                                uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a
                            </div>
                            <div className={styles.image_arrowBtn}>
                                <Image src={IconArrowBottom} alt="" />
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} 
                        sx={{padding:"0px"}}
                    >
                        <div className={styles.todo_image3}>
                            <div className={styles.image_title1}>  
                                Constelaciones
                            </div>
                            <div className={styles.image_title2}>  
                                Subtítulo
                            </div>
                            <div className={styles.image_description}>  
                                dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que 
                                suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a
                            </div>
                            <div className={styles.image_arrowBtn}>
                                <Image src={IconArrowBottom} alt="" />
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} 
                        sx={{padding:"0px"}}
                    >  
                        <div className={styles.banner}>
                            <span className={styles.contactUs}>VER MÁS</span>
                        </div>
                    </Grid>
                    <Grid xs={12} 
                        sx={{padding:"0px"}}
                    >  
                        <div className={styles.contactEmail}>
                            <div className={styles.containEmail}>
                                <div className={styles.contactLogo}>
                                    Suscríbete a nuestras publicaciones
                                </div>
                                <div className={styles.contactInput}>
                                    <div className={styles.customInput} >
                                        <input type="text" placeholder="Escribe tu email" />
                                        <button>Enviar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footerBar}>
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
                </Grid>
            </div>
        </>
    )
}

export default todo;