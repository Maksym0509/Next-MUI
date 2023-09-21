import React from "react";
import styles from "./ImageComponent.module.scss";
import Image from "next/image"
import { IconArrowBottom, IconArrowUp } from "../../assets/icons"

export interface IProps{
    imageURL: string;
    title1: string;
    title2: string;
    description: string;
    btnState: number;
}

const ImageComponent: React.FC<IProps> = ({imageURL, title1, title2, description, btnState}) =>{
    return(
        <>
            <div className={styles.imageCmp} style={{backgroundImage: imageURL}}>
                <div className={styles.imgtitle1}>{title1}</div>
                <div className={styles.imgtitle2}>{title2}</div>
                <div className={styles.imgDescription}>{description}</div>
                <div className={styles.imgSVG}>
                {
                    btnState == 1 ?  <Image src={IconArrowBottom} alt="" />
                    :    <Image src={IconArrowUp} alt="" />
                }
                </div>
            </div>
        </>
    )
}

export default ImageComponent;