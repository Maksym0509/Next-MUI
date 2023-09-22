'use client'
import React, { useRef, useState } from "react"
import styles from "./Todo.module.scss"
import ImageComponent from "../utils/imageComponent/ImageComponent"
import Grid from '@mui/material/Unstable_Grid2'
import ContactComponent from "../utils/contactUs/contactComponent"

const displayData = [
    {
        imageURL: "url('pexels-michael-block-3225529\ 1.png')",
        title1:"Percepción energética",
        title2:"Subtítulo",
        description:"dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
    },
    {
        imageURL:"url('pexels-cottonbro-studio-4325476.png')",
        title1:"Diseño Humano",
        title2:"Subtítulo",
        description:"dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
    },
    {
        imageURL:"url('Tezza-9397 1.png')" ,
        title1:"Constelaciones",
        title2:"Subtítulo",
        description:"dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
    }
]

const Todo: React.FC = () => {
    
    const [btnStates, setBtnstates] = useState<boolean[]>([false, false, false]);

    const imageCollapse = (index: number) => {

        setBtnstates(prevArray => {
            const updatedArray = [...prevArray];
            updatedArray[index] = !updatedArray[index]; 
            return updatedArray; 
        });
    }
    return(
        <>
            <div className={styles.todoList}>
                <Grid container spacing={0}>
                    <Grid xs={12}>
                        <span className={styles.todolist_title}>
                            ¿Qué hacemos?
                        </span>
                    </Grid>
                    {
                        displayData.map((imageData, index) => {
                            return (
                                <>
                                <ImageComponent imageCollapse={imageCollapse}
                                    imageURL={imageData.imageURL}
                                    title1={imageData.title1}
                                    title2={imageData.title2}
                                    description={imageData.description}
                                    btnState={btnStates}
                                    index={index}
                                    />
                                    { btnStates[index] &&
                                    <div className={styles.todolist2}>
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
                                </div>}
                                </>
                            )
                            
                        })
                    }
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

export default Todo;