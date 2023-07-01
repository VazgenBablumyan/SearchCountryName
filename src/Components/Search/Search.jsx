import React, { useState } from 'react'
import SelectCountry from '../Select/SelectCountry';
import { TextField } from '@mui/material';
import styles from "./Search.module.css"

export default function Search() {
    const [name,setName] = useState("")



  return (
    <div className={styles.container}>
        <TextField
        className={styles.inputText}
        id="filled-basic" 
        label="Filled" 
        variant="filled"  
        value={name} 
        onChange={(event)=> { 
        return setName(event.target.value)}}
        />
        <SelectCountry name ={name} />
        
    </div>
  )
}
