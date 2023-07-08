import React  from 'react'
import { countries } from 'country-data-list';
import styles from './SelectCountry.module.css'
import { v4 as uuidv4 } from 'uuid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';

export default function SelectCountry({ name }) {
    
    const countriesName = countries.all.map((country)=> country.name)
    console.log(countriesName)

    const filteredNames = countriesName.sort().filter((countryName) => {
       const lowercaseCountryNames = countryName.toLowerCase()
       const lowercaseName = name.toLowerCase()
        for (let i = 0; i < name.length; i++) {
            if (lowercaseCountryNames[i] !== lowercaseName[i]) {
                return false;
            }
        }
        
        return true;
    })
    
         return (
            <List className={styles.listBox}>

                {filteredNames.map((countryname) => {
                const id = uuidv4()
                return (
                <ListItemButton key ={id}> <ListItemText>{countryname}</ListItemText></ListItemButton> 
                )
            })}
            </List> 
            )
}



