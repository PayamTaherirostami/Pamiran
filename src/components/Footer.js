import React from 'react';

import Terms from './Terms';
// import Author from './Author'
import '../App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';


export default function Footer({setShow}){

    function hide() {
        setShow(false)
    }
    return (
    <div className="main-nav">
        <BrowserRouter>
               <nav>
                    <ul className="nav-links">
                        <li>Copyright 2021 &copy;</li>
                        <li>All Rights Reserved</li>
                        <li> <Link to={{ pathname:"/terms" }} onClick={hide}> TERM OF USE</Link></li>
                        {/* <li> <Link to={{ pathname:"/author" }} onClick={hide}> DESIGN BY PAYAM</Link></li> */}
                    </ul>
                </nav>
                <Switch>
                    <Route  exact path="/terms" component={Terms} />
                    {/* <Route exact path="/author" component={Author}  /> */}
                </Switch> 
        </BrowserRouter>
        </div>
    );
}
