'use client'
import React from "react";
import styles from "./ImageComponent.module.scss";
import Image from "next/image"
import { IconArrowBottom, IconArrowUp } from "../../assets/icons"

export interface IProps{
    imageCollapse: (index: number) => void;
    index: number;
    imageURL: string;
    title1: string;
    title2: string;
    description: string;
    btnState: boolean[];
}

const ImageComponent: React.FC<IProps> = ({imageCollapse ,index, imageURL, title1, title2, description, btnState}) =>{
    return(
        <>
            <div className={styles.imageCmp} style={{backgroundImage: imageURL}}>
                <div className={styles.imgtitle1}>{title1}</div>
                <div className={styles.imgtitle2}>{title2}</div>
                <div className={styles.imgDescription}>{description}</div>
                <div className={styles.imgSVG}>
                {
                    btnState[index] === true ?  <Image src={IconArrowBottom} className={styles.SVG} alt="" onClick={() =>imageCollapse(index)} />
                    :    <Image src={IconArrowUp} alt="" onClick={() =>imageCollapse(index)} />
                }
                </div>
            </div>
        </>
    )
}

export default ImageComponent;