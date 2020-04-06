import React from 'react';

import {Link} from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/menu"}>Термини</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/rooms"}>Простории</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className={"nav-link"} to={"/consultations/add"}>Додади термин</Link>
                        </li>
                    </ul>


            </nav>
        </header>
    )
}
export default Header;
