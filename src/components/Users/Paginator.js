import React, { useState } from 'react'
import cssStyle from './Paginator.module.css'



function Paginator(props) {
    let pagesInPortion = 15;
    let [currentPortionOfPages, setCurrentPortionOfPages] = useState(1);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let portionCount = Math.ceil(pagesCount / pagesInPortion);


    const pageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getDataAboutUsers(pageNumber, props.pageSize);
    }

    const createPagesList = () => {
        let pagesButtonsList = [];
        let start = (currentPortionOfPages - 1) * pagesInPortion + 1;
        for (let i = start; i <= pagesCount; i++) {
            if (i <= currentPortionOfPages * pagesInPortion) {
                pagesButtonsList.push(
                    <button key={i} onClick={() => pageChanged(i)}>
                        <span className={props.currentPage === i ? cssStyle.button_current : cssStyle.button_not_current}>
                            {i}
                        </span>
                    </button>);
            }
        }
        return pagesButtonsList;
    }

    return (
        <div>
            {currentPortionOfPages > 1 && <button onClick={() => setCurrentPortionOfPages(currentPortionOfPages - 1)}>Prev portion</button>}

            {createPagesList()}

            {currentPortionOfPages !== portionCount && <button onClick={() => setCurrentPortionOfPages(currentPortionOfPages + 1)}>Next portion</button>}

        </div>
    );
}

export default Paginator;