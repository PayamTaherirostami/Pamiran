
import '../Nav.css';
import '../App.css';
import Products from './Products';
import AddClientForm from './AddClientForm';
import Orders from './Orders';
import Employee from './Employee';
import Customer from './Customer';
import Customers from './Customers';
import Vendor from './Vendor';
import MyTransactions from './MyTransactions';
import Msg from './Msg';
import Journal from './Journal';
import ExpenseTransaction from './ExpenseTransaction';
import Transactions from './Transactions';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Calendar from './Calendar';
import Invoice from './Invoice';
import { useState, useEffect } from 'react';
import usePrevious from './usePrevious';



export default function NavAdmin ({email}) {
  const [count,setCounter]=useState('0');
  // const[old,setOld]=useState([]);
  // const [countMsg,setMsgCounter]=useState('count');
  const prevCount = usePrevious(count)
  useEffect(() => {
    fetch('https://api-pamiran.herokuapp.com/msg')
    .then(result => result.json())
    .then(rowData => setCounter(rowData.length))
    
    // old.push(prevCount)
    // setOld([...old]);
    // const id= AllProducts[AllProducts.length-1].ProductId+1
}, []);

  //  console.log(old);
   const counter=count
  //  console.log('count:',count,'countMsg:',prevCount)
  //  console.log('akharin tu list:',old[old.length-1])
    return ( 
        <div className='GG_nav'> 
            <Router>
                <Switch>
                    <Route exact path="/admin/orders" component={Orders} ></Route>
                    <Route exact path="/admin/employee" component={Employee} ></Route>
                    <Route exact path="/admin/customer" component={Customer} ></Route>
                    <Route exact path="/admin/vendor" component={Vendor} ></Route>
                    <Route exact path="/admin/calender"> <Calendar email={email} /> </Route>
                    <Route exact path="/admin/customers" component={Customers} ></Route> 
                    <Route exact path="/admin/msg"> <Msg count={count} countMsg={prevCount} setCounter={setCounter}/> </Route>
                    <Route exact path="/admin/journal" component={Journal}></Route>
                    <Route exact path="/admin/expenses" component={ExpenseTransaction}></Route>
                    <Route exact path="/admin/transactions" component={Transactions} ></Route> 
                    <Route exact path="/admin/myTransaction"> <MyTransactions email={email} /> </Route>
                    <Route exact path="/admin/product"> <Products email={email} /> </Route>
                    <Route exact path="/admin/customersAdd" component={AddClientForm}> </Route>
                    <Route exact path="/admin/invoices"> <Invoice email={email} /> </Route>
            
                </Switch> 
                <nav>
                  <ul className="nav-links">
                    <li> <Link to="/admin/invoices"> Invoices</Link></li>
                    <li> <Link to="/admin/orders"> Orders</Link></li>
                    <li> <Link to="/admin/employee"> Employees</Link></li>
                    <li> <Link to="/admin/customer"> Customers</Link></li>
                    <li> <Link to="/admin/vendor"> Vendors</Link></li>
                    <li> <Link to="/admin/calender"> Calender</Link></li>
                    <li> <Link to="/admin/customers"> All Accounts</Link></li>
                    <li> <Link to="/admin/msg"> MSG</Link></li>
                    <li> <Link to="/admin/journal"> Journal</Link></li>
                    <li> <Link to="/admin/expenses">  Enter Expenses</Link></li>
                    <li> <Link to="/admin/transactions"> Transactions</Link></li>
                    <li> <Link to="/admin/myTransaction"> My Transactions</Link></li>
                    <li> <Link to="/admin/product"> Products</Link></li>
                    <li> <Link to="/admin/msg">  <div><div className='noti'><img src='../images/notification.png'  alt=''></img><div className="counter">{counter}</div></div></div></Link></li>
                  </ul>
                </nav>
            </Router>
        </div>
    );
}
 