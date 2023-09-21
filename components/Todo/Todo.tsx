'use client'
import React from "react"
import styles from "./Todo.module.scss"
import ImageComponent from "../utils/imageComponent/ImageComponent"
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
                        <ImageComponent imageURL="url('pexels-michael-block-3225529\ 1.png')" 
                            title1="Percepción energética"
                            title2="Subtítulo"
                            description="dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
                            btnState={1}
                        />
                    </Grid>
                    <Grid xs={12} sx={{padding:"0px"}}>
                        <ImageComponent imageURL="url('pexels-cottonbro-studio-4325476.png')" 
                            title1="Diseño Humano"
                            title2="Subtítulo"
                            description="dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
                            btnState={1}
                        />
                    </Grid>
                    <Grid xs={12} 
                        sx={{padding:"0px"}}
                    >
                       <ImageComponent imageURL="url('Tezza-9397 1.png')" 
                            title1="Constelaciones"
                            title2="Subtítulo"
                            description="dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
                            btnState={1}
                        />
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