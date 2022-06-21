
import '../Nav.css';
// import '../App.css';
import Quote from './Quote';
import Bot from './Bot';
import ProductView from './productView'
import  History  from './History';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Transactions4Customers from './Transactions4Customers';
import OrderView from './OrderView';
import { useEffect, useState } from 'react';

const NavCustomer = ({email}) => {
    const [counter,setCounter]=useState('0');
    // const[old,setOld]=useState([]);
    // const [countMsg,setMsgCounter]=useState('count');

    useEffect(() => {
      fetch('https://api-pamiran.herokuapp.com/msg')
      .then(result => result.json())
      .then(rowData => setCounter(rowData.length))
      
      // old.push(prevCount)
      // setOld([...old]);
      // const id= AllProducts[AllProducts.length-1].ProductId+1
  }, []);
    return ( 
        <div className='G_navCust'> 
            <Router>
                <Switch>
                    <Route  path="/dashbord/quote"> <Quote email={email} /> </Route>
                    <Route  path="/dashbord/transactionsCustomer"> <Transactions4Customers email={email} /> </Route>
                    <Route  path="/dashbord/productView"> <ProductView email={email} /> </Route>
                    <Route  path="/dashbord/history"> <History email={email} /> </Route>
                    <Route  path="/dashbord/chat"> <Bot /> </Route>
                    <Route  path="/dashbord/orderView"> <OrderView email={email} /> </Route>
                </Switch> 
                <nav>
                    <ul className="nav-links">
                        <li> <Link to="/dashbord/quote"> Quote</Link></li>
                        <li> <Link to="/dashbord/transactionsCustomer"> Transactions</Link></li>
                        <li> <Link to="/dashbord/productView"> Products</Link></li>
                        {/* <li> <Link to="/dashbord/chat"> Chatbot</Link></li> */}
                        <li> <Link to="/dashbord/history"> Messages</Link></li>
                        {/* <li> <Link to="/dashbord/history">  <div className='noti2'><img src='../images/notification.png'  alt=''></img><div className="counterCust">{counter}</div></div></Link></li> */}
                        <li> <Link to="/dashbord/orderView"> Orders</Link></li>
                    </ul>
                </nav>
            </Router>
        </div>
    );
}
export default NavCustomer;