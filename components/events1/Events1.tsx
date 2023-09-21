'use client'
import React from "react";
import styles from "./Events1.module.scss"
import Grid from '@mui/material/Unstable_Grid2';

const Events1: React.FC = () => {
    return (
        <>
            <Grid xs={12}>
                <div className={styles.event1List1}>
                    <div className={styles.title}>Pasados</div>
                    <div className={styles.list}>ALL (18)  |  TALLERES (8) |  RETIROS (11) |  WEBINARS (12)</div>
                </div>
            </Grid>
            <Grid xs={12}>
                <div className={styles.event1List2}>
                    <div className={styles.left}>
                        <div className={styles.title1}>
                            Diseño Humano 
                        </div>
                        <div className={styles.title2}>
                        16/07
                        </div>
                        <div className={styles.title3}>
                        TítuloOfficius nonecturiam resequi imodipis re si optae sima vero omnim experitis eoste rehende nectibus volorias adis
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.blank}>
                        </div>
                        <div className={styles.description}>
                             nonecturiam resequi imodipis re si optae sima vero omnim experitis eoste rehende nectibus volorias adisTem descide ssimpor emporem volorro deri doluptur? Min exerferrum que quibusciis earum ut earupit rerionsequi que porions eceptatiat.Perorro vitemporecab idendisinis doloreprepel inciis ariasi id quibus idita de conestio mo moditinctem late occulpa sent renecus idestectiur reiundel mo impelen daepelicia porem velic tem qui corro core porrorum dit ex elecaboratur moloriberum con et fugiasi taspis renitat atibus, il in nime pelliquatus digendi psaerovid ulluptas eum faceptat quaepuda asint lab ide nis volum et andae net volupta quis cum excerum dolorent ut ut ma doluptur sim debit odion non con excessi tiosapiet velias magnit, omnient harunt fuga. Aribus.
                            Asseque plaboremque voluptatem aut as aut fugit lat exped quibusa pissundi sunt omnimusamus auditis simaioriorem fuga. Faceatectate odi occum qui qui sumquatur moloritae sectianditat lam consecu saperes moluptatus.Imporeris et lacestem. Ilibus ut fuga. Nam, quas velenim porerum ium dolupti uribus, ipsande mperita tquosti cone voluptas im dolupite volore veriti audae id et ipictem fugias mos aut venient laborunt dollabor ra corem quatur maxim qui antecturiate dolentorem at.
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid xs={12}>
                <div className={styles.event1List3}>
                    
                </div>
            </Grid>
            
           
        </>
    )
}

export default Events1;