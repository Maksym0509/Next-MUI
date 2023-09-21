'use client'
import React from "react"
import styles from "./Todo1.module.scss"
import ImageComponent from "../utils/imageComponent/ImageComponent"

const todo1: React.FC = () => {
    return(
        <>
            <div>
                <div>
                    <span className={styles.todolist_title}>
                        ¿Qué hacemos?
                    </span>
                </div>
                <ImageComponent imageURL="url('pexels-michael-block-3225529\ 1.png')" 
                    title1="Percepción energética"
                    title2="Subtítulo"
                    description="dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
                    btnState={2}
                />
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
                </div>
                <ImageComponent imageURL="url('pexels-cottonbro-studio-4325476.png')" 
                    title1="Diseño Humano"
                    title2="Subtítulo"
                    description="dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
                    btnState={1}
                />
                
                <ImageComponent imageURL="url('Tezza-9397 1.png')" 
                    title1="Constelaciones"
                    title2="Subtítulo"
                    description="dirección y horaRatem eatuscium quae. To corior ant quas dolupta solorecea con nat uta ped que suntium aspellam illa natem am, enducia quo beria volorro il earum quae pos a"
                    btnState={1}
                />
            </div>
        </>
    )
}

export default todo1;