import React from "react";
import { PageButton } from "./css/Pages.js";

export default function Pages({allVideogames, videogamesPerPage, pages}) {
    const pageNumbers = []
    for (let i = 0; i < Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i+1)
    }
    
    return(
        <nav>
                {pageNumbers && pageNumbers.map(num =>(
                    <PageButton onClick={() => pages(num)} key={num}>{num}</PageButton>
                ))}
        </nav>
    )
}