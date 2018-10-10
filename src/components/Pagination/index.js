import React from 'react';

import './../../assets/style/pagination.css';

export default () =>{

    let pagesList= [];

    for (let i = 0; i < 5; i++) {
        pagesList.push(
            <li
                className=""
                key={i} >
                <a
                    className="pagination__link"
                    href="#"
                >
                    {i+1}
                </a>
            </li>
        );
    }

    return(
        <div>
            <nav>
                <ul className="pagination">
                    <li className="">
                        <a
                            className='pagination__link pagination__link_arrow'
                            href="#"
                            >
                            Prev
                        </a>
                    </li>

                    {pagesList}

                    <li
                        className="">
                        <a
                            className="pagination__link pagination__link_arrow pagination__link_arrow-mr"
                            href="#"
                            >
                            >
                        </a>
                    </li>
                    <li
                        className="">
                        <a
                            className="pagination__link pagination__link_arrow"
                            href="#"
                        >
                            >>
                        </a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}