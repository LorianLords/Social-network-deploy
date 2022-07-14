import s from "./Paginator.module.css";
import React, {useState} from "react";


let Paginator = ({totalItemsCount, pageSize = 5, page, onPageChange, portionSize}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize) ;        // количество страниц
    let portionCount = Math.ceil(pagesCount / portionSize) ;                      // количество порций
    let pages = [];

    for (let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber-1)}}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return <span
                    className= {`${page === p && s.selected} ${s.number_page}`}
                    key={p}
                    onClick={ (e/*absolutely not need*/) => {onPageChange(p)}}
                >{p} </span>})}
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber+1)}}>Next</button>}
        </div>
    )
}

export default Paginator