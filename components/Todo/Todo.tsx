'use client'
import React, { useRef, useState } from "react"
import styles from "./Todo.module.scss"
import ImageComponent from "../utils/imageComponent/ImageComponent"
import Grid from '@mui/material/Unstable_Grid2'
import ContactComponent from "../utils/contactUs/contactComponent"

const todo: React.FC = () => {
    
    const [state, setState] = useState<number>(1);
    const extendedRef = useRef(null);

    const extanded = () => {
        state === 1 ? setState(2) : setState(1)
    }

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
                        <ImageComponent extended = {extanded}
                            imageURL="url('pexels-michael-block-3225529\ 1.png')" 
                            title1="Percepción energética"
                            title2="Subtítulo"
                            description="dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
                            btnState={state}
                        />
                    </Grid>
                    { state === 2 &&
                        <div className={styles.todolist2} ref={extendedRef}>
                            <div className={styles.left}>
                                <div className={styles.top1}>
                                    <div className={styles.title}>
                                        Iniciación
                                    </div>
                                    <div className={styles.title}>
                                        Avanzado
                                    </div>
                                    <div className={styles.title}>
                                        Familias / Educación
                                    </div>
                                    <div className={styles.title}>
                                        Regulación energética
                                        de espacios habitables
                                    </div>
                                </div>
                                <div className={styles.top2}>
                                    Inscribirse
                                </div>
                            </div>
                            <div className={styles.right}>
                            </div>
                        </div>
                    }
                    <Grid xs={12} sx={{padding:"0px"}}>
                        <ImageComponent extended = {extanded}
                            imageURL="url('pexels-cottonbro-studio-4325476.png')" 
                            title1="Diseño Humano"
                            title2="Subtítulo"
                            description="dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
                            btnState={1}
                        />
                    </Grid>
                    <Grid xs={12} 
                        sx={{padding:"0px"}}
                    >
                       <ImageComponent extended = {extanded}
                            imageURL="url('Tezza-9397 1.png')" 
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
                    <ContactComponent backColor="#F3A242" />
                </Grid>
            </div>
        </>
    )
}

export default todo;