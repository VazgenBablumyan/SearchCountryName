import React from 'react'
import { countries } from 'country-data-list';
import styles from './SelectCountry.module.css'
import { v4 as uuidv4 } from 'uuid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';

export default function SelectCountry({ name }) {
    const countriesName = []
    for (const country in countries) {
        countriesName.push(countries[country].name)
    }

    const filteredNames = countriesName.filter((countryName,idx)=> idx % 2 === 1).filter((countryName) => {
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

                {filteredNames.sort().map((countryname) => {
                const id = uuidv4()
                return (
                <ListItemButton key ={id}> <ListItemText>{countryname}</ListItemText></ListItemButton> 
                )
            })}
            </List> 
            )
}



