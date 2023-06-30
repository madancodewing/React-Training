import './App.css'
import Box from "./box";
import { useState } from 'react';


const boxItems = Box.map((item) => {
    return (
        <h1>{item.id}</h1>
    )
})

// console.log(boxItems)


function Madan() {
    return (
        <>
            <div className="box">
                {boxItems}
            </div>
        </>
    )
}
export default Madan


/* 

if
else if  
else 

*/