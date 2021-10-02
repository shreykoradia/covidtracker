import React from 'react'
import { Paper } from '@mui/material';
import styles from './preventions.module.css'

function Preventions() {
    return (
        <div className ={styles.container}>
            <Paper elevation={1} variant = "outlined" square/>

        </div>
    )
}

export default Preventions