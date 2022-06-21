import React from 'react';
import About from './About';
import Gallery from './Gallery';
import Quote from './Quote';
import Terms from './Terms';
import Author from './Author';
import Customer  from './Customer';
import Employee from './Employee';
import Vendor from './Vendor';
import Orders from './Orders';
import Customers from './Customers';
import Msg from './Msg';
import Register from './Register';
import AddClientForm from './AddClientForm';
import Slider from './Slider';
import Journal from './Journal'; 
import ExpenseTransaction from './ExpenseTransaction';
import Transactions from './Transactions';
import Products from './Products';
import ProductAddForm from './ProductAddForm';
import Dashboard from './Dashboard';
import Table from './Table';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import AddOrders from './AddOrders';

export default function Nav({setShow}) {

   function hide() {
       setShow(!show)
   }
   function show() {
    setShow(true)

    }
    return (
        <div className="main-nav">
            <Router>
                <nav>
                    <ul className="nav-links">
                        <li> <Link to={{ pathname:"/" }} onClick={show} > HOME</Link></li>
                        <li> <Link to={{ pathname:"/about" }} onClick={hide} > ABOUT US</Link></li>
                        <li> <Link to={{ pathname:"/gallery" }} onClick={hide}  > GALLERY</Link></li>
                        <li> <Link to={{ pathname:"/dashboard" }} onClick={hide} > DASHBOARD</Link></li>
                    </ul>
                </nav>
                <Switch>
                {/* <Route exact path="/login" component={Login} />      */}
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/home" component={MainBody}  /> */}
                <Route exact path="/gallery" component= {Gallery} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/author" component={Author}  />
                <Route exact path="/customer" component={Customer}  />
                <Route exact path="/employee" component={Employee}  />
                <Route exact path="/vendor" component={Vendor}  />
                <Route exact path="/orders" component={Orders}  />
                <Route exact path="/customers" component={Customers}/>
                <Route exact path="/quote" component={Quote}/>
                <Route exact path="/msg" component={Msg}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/test" component={Table}/>
                <Route exact path="/product" component={Products}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/customersAdd" component={AddClientForm}/>
                <Route exact path="/slides" component={Slider}/>
                <Route exact path="/journal" component={Journal}/>
                <Route exact path="/expenses" component={ExpenseTransaction}/>
                <Route exact path="/transactions" component={Transactions}/>
                {/* <Route exact path="/transactions/:id" component={Transactions4Customers}/> */}
                {/* <Route exact path="/productView" component={ProductView}/> */}
                <Route exact path="/addProduct" component={ProductAddForm}/>
                <Route exact path="/addOrders" component={AddOrders}/>
                </Switch>
            </Router>
        </div>
    );
}