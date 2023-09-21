import React from "react";
import styles from "./Events2.module.scss"
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';

const Events2: React.FC = () => {

    return (
        <>
            <Grid xs={12}>

                    <center>
                        <div className={styles.signupForm}>
                            <div className={styles.title}>
                                Bienvenida
                            </div>
                            <div className={styles.description}>
                                Accede a tu experiencia personalizada para inscribirte en el evento
                            </div>
                            <div className={styles.textInput}>
                                <TextField
                                    sx={{
                                        width: "100%",
                                        '& .MuiInputBase-root': {
                                            height: '50px', // Adjust this value to your desired height
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderColor: "#AD00FF",
                                            borderWidth: '2px'
                                            
                                        },
                                        '& .MuiInput-underline.Mui-focused:after': {
                                            borderColor: 'red', 
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "#AD00FF",
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputLabel-root': {
                                            paddingLeft: "10px",
                                            color: "#AD00FF",
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'purple', // Change this to your desired font color
                                            fontSize: '30px', // Change this to your desired font size
                                        },
                                    }}
                                    label="Nombre"
                                    type="text"
                                    variant="standard"
                                />
                            </div>
                            <div className={styles.textInput}>
                                <TextField
                                    sx={{
                                        width: "100%",
                                        '& .MuiInputBase-root': {
                                            height: '50px', // Adjust this value to your desired height
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderColor: "#AD00FF",
                                            borderWidth: '2px'
                                            
                                        },
                                        '& .MuiInput-underline.Mui-focused:after': {
                                            borderColor: 'red', 
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "#AD00FF",
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputLabel-root': {
                                            paddingLeft: "10px",
                                            color: "#AD00FF",
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'purple', // Change this to your desired font color
                                            fontSize: '30px', // Change this to your desired font size
                                        },
                                    }}
                                    label="Correo electrónico"
                                    type="text"
                                    variant="standard"
                                />
                            </div>
                            <div className={styles.textInput}>
                                <TextField
                                    sx={{
                                        width: "100%",
                                        '& .MuiInputBase-root': {
                                            height: '50px', // Adjust this value to your desired height
                                        },
                                        '& .MuiInput-underline:before': {
                                            borderColor: "#AD00FF",
                                            borderWidth: '2px'
                                            
                                        },
                                        '& .MuiInput-underline.Mui-focused:after': {
                                            borderColor: 'red', 
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "#AD00FF",
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputLabel-root': {
                                            paddingLeft: "10px",
                                            color: "#AD00FF",
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'purple', // Change this to your desired font color
                                            fontSize: '30px', // Change this to your desired font size
                                        },
                                    }}
                                    label="Contraseña"
                                    type="text"
                                    variant="standard"
                                />
                            </div>
                            <div className={styles.button}>
                                <span>
                                    INSCRIBIRSE
                                </span>
                            </div>
                            
                        </div>
                        

                    </center>
            </Grid>
           
        </>
    )
}

export default Events2;