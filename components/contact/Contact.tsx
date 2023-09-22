'use client'
import React from "react";
import styles from "./Contact.module.scss"
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';

const Contact: React.FC = () => {

    return (
        <>
            <Grid xs={12}>
                <center>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormContent}>
                            <div className={styles.title}>
                                Envíanos un mensaje
                            </div>
                            <div className={styles.lineEdit}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Nombre"
                                    sx={{
                                        width: "100%",
                                        borderColor: "white", // Change the width as needed
                                        "& .MuiOutlinedInput-root": {
                                             borderColor: "white", // Change the border color
                                             borderRadius: "20px", // Change the border radius
                                        "&:hover fieldset": {
                                            borderColor: "white", // Change the hover border color
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "white", // Change the focused border color
                                        },
                                        "& fieldset": {
                                            borderColor: "white", // Change the default border color here
                                          },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        "&.Mui-focused .MuiInputLabel-root": {
                                            color: "white", // Change the focused label color
                                            borderWidth: "2px",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputBase-input': {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className={styles.lineEdit}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Email"
                                    sx={{
                                        width: "100%",
                                        borderColor: "white", // Change the width as needed
                                        "& .MuiOutlinedInput-root": {
                                             borderColor: "white", // Change the border color
                                             borderRadius: "20px", // Change the border radius
                                        "&:hover fieldset": {
                                            borderColor: "white", // Change the hover border color
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "white", // Change the focused border color
                                        },
                                        "& fieldset": {
                                            borderColor: "white", // Change the default border color here
                                          },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        "&.Mui-focused .MuiInputLabel-root": {
                                            color: "white", // Change the focused label color
                                            borderWidth: "2px",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputBase-input': {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className={styles.lineEdit}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Mensaje"
                                    multiline
                                    rows={3}
                                    sx={{
                                        width: "100%",
                                        borderColor: "white", // Change the width as needed
                                        "& .MuiOutlinedInput-root": {
                                             borderColor: "white", // Change the border color
                                             borderRadius: "35px", // Change the border radius
                                        "&:hover fieldset": {
                                            borderColor: "white", // Change the hover border color
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "white", // Change the focused border color
                                        },
                                        "& fieldset": {
                                            borderColor: "white", // Change the default border color here
                                          },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        "&.Mui-focused .MuiInputLabel-root": {
                                            color: "white", // Change the focused label color
                                            borderWidth: "2px",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        '& .MuiInputBase-input': {
                                            color: "white", // Change the label color
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", /* 131.034% */
                                        },
                                        
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            
                            <div>
                                <button className={styles.customBtn}>Enviar</button>
                            </div>
                            <div className={styles.footer}>
                                Contacta con nosotros
                            </div>
                        </div>
                    </div>
                </center>
            </Grid>
           
        </>
    )
}

export default Contact;