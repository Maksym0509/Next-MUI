'use client'
import React from "react";
import styles from "./Manifest.module.scss"
import Grid from '@mui/material/Unstable_Grid2';
import ContactComponent from "../utils/contactUs/contactComponent";

const Manifest: React.FC = () => {
    return(
        <>
            <div className={styles.landingPage}>
                <div className={styles.mainContent}>
                    <div className={styles.letter}>
                        Manifiesto
                    </div>
                    <div className={styles.description} >
                            Me venistotatur aditasi tibus.Empos denderem estio dolutem quata cullorum quo molorerio. 
                            Poreped erferis maximaio ersped eatque nis volorum sa volenditae. Nequam con consedi tasperum cum di nia 
                            ium con remporr oraepedit pro quiae pa dicium quate nossit, con nestrupta sum re moluptatus.Labor reiur?
                            Harumquia eossi volorro omniam eatenda corersp erfero et is repreptas voluptam, 
                            assimin non repelliquo eos volore pore, temolent quae volorrum essi ditatquiatia que nam nus. 
                            Pa dolo toratasit libusa iuntiatia none velendit, qui tem. Molla paribus se comnis debit eturerrorem 
                            comnime nim quatemolo cone volendant. Litatiis alisimi, ullatur itatem ent laceaqu isquaes at peligenimi, ipsae del modit ute autatem exercam aut doluptat ut autatur aut latur sequunt, consed ma doloria sit quist aboruptatem idunt modiost endunt as de es vit eum quo tem corem esto dolese nos modi int alic tet aut liatus, sum culpa perumqu ibuscim es exerum et ut 
                    </div>                    
                </div>
            </div>
            <div className={styles.equipment}>
                <div className={styles.equipment_part1}>
                    <span>
                        Equipo
                    </span>
                </div>
                <div className={styles.equipment_part2}>
                    <div className={styles.equipment_image}>
                        <div className={styles.equipment_image_part1}>
                        </div>
                        <div className={styles.equipment_image_part2}>
                            <span className={styles.letterleft}>Nombre</span>
                            <span className={styles.letterright}>Rol</span>
                        </div>
                    </div>
                    <div className={styles.equipment_image}>
                        <div className={styles.equipment_image_part1}>
                        </div>
                        <div className={styles.equipment_image_part2}>
                            <span className={styles.letterleft}>Nombre</span>
                            <span className={styles.letterright}>Rol</span>
                        </div>
                    </div>
                    <div className={styles.equipment_description}>
                            <span>
                                Me venistotatur aditasi tibus.Empos denderem estio dolutem quata cullorum quo molorerio. 
                                Poreped erferis maximaio ersped eatque nis volorum sa volenditae. 
                                Nequam con consedi tasperum cum di nia ium con remporr oraepedit pro quiae pa dicium quate nossit, con nestrupta sum re moluptatus.
                                Labor reiur?
                                Harumquia eossi volorro omniam eatenda corersp erfero et is repreptas voluptam, assimin non repelliquo eos volore pore,
                                temolent quae volorrum essi ditatquiatia que nam nus. Pa dolo toratasit libusa iuntiatia none velendit,
                            </span>
                    </div>
                </div>
            </div>
            <div className={styles.Collaborators}>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <span className={styles.Collaborators_title}>
                            Colaboradores
                        </span>
                    </Grid>
                    <Grid xs={12}>
                        <div className={styles.Collaborators_image}>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <div className={styles.Collaborators_letter}>
                            <span>
                                Me venistotatur aditasi tibus.Empos denderem estio dolutem quata cullorum quo molorerio.
                                Poreped erferis maximaio ersped eatque nis volorum sa volenditae. Nequam con consedi tasperum cum di 
                                nia ium con remporr oraepedit pro quiae pa dicium quate nossit, con nestrupta sum re moluptatus.Labor reiur?
                                Harumquia eossi volorro omniam eatenda corersp erfero et is repreptas voluptam, assimin non repelliquo eos volore pore, 
                                temolent quae volorrum essi ditatquiatia que nam nus. Pa dolo toratasit libusa iuntiatia none velendit,
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={styles.contact}>
                <ContactComponent backColor="#490266" />
            </div>
        </>
    )
}

export default Manifest;