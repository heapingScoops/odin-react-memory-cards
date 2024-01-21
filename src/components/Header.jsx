import ButtonAppBar from "./mui-components/ButtonAppBar"
import AppBar from '@mui/material/AppBar';
import { useState, useEffect } from "react";


export default function Header({currentScore , highScore}){
//
    return(
        <>
            <ButtonAppBar currentScore={currentScore} highScore={highScore} />

        </>
        
    )
}