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
                                        borderColor: "white", 
                                        "& .MuiOutlinedInput-root": {
                                             borderColor: "white", 
                                             borderRadius: "25px",
                                        "&:hover fieldset": {
                                            borderColor: "white", 
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "white", 
                                        },
                                        "& fieldset": {
                                            borderColor: "white", 
                                          },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", 
                                        },
                                        "&.Mui-focused .MuiInputLabel-root": {
                                            color: "white", 
                                            borderWidth: "2px",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "white", 
                                            fontFamily: "Abel",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", 
                                        },
                                        '& .MuiInputBase-input': {
                                            color: "white", 
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", 
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
                                        borderColor: "white", 
                                        "& .MuiOutlinedInput-root": {
                                             borderColor: "white", 
                                             borderRadius: "25px", 
                                        "&:hover fieldset": {
                                            borderColor: "white", 
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "white",
                                        },
                                        "& fieldset": {
                                            borderColor: "white", 
                                          },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", 
                                        },
                                        "&.Mui-focused .MuiInputLabel-root": {
                                            color: "white", 
                                            borderWidth: "2px",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "white", 
                                            fontFamily: "Abel",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px",
                                        },
                                        '& .MuiInputBase-input': {
                                            color: "white", 
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", 
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
                                        borderColor: "white",
                                        "& .MuiOutlinedInput-root": {
                                             borderColor: "white",
                                             borderRadius: "40px",
                                        "&:hover fieldset": {
                                            borderColor: "white", 
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "white", 
                                        },
                                        "& fieldset": {
                                            borderColor: "white", 
                                          },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "white", 
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", 
                                        },
                                        "&.Mui-focused .MuiInputLabel-root": {
                                            color: "white", 
                                            borderWidth: "2px",
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: "white",
                                            fontFamily: "Abel",
                                            fontSize: "20px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", 
                                        },
                                        '& .MuiInputBase-input': {
                                            color: "white", 
                                            fontFamily: "Abel",
                                            fontSize: "29px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "38px", 
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