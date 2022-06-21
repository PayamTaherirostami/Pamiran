
import { useEffect} from 'react';

import '../chat.css'
export default function Orders4Bot (props) {
    // console.log(props);
    const {setState}= props;

    // async function getId() {
    //     let response=  await fetch('http://localhost:8000/customers')
    //     const people= await response.json();
    //     const clientId= people.find(x => x.EMAIL === email)['ClientId'];
    //     setId(clientId);

    //  }
   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/orders')
           .then(result => result.json())
           .then((data)=>{
               const firstTen = data.slice(0,10);
               setState(state => ({...state, orders:firstTen}));
           });

   }, [setState]);
// console.log(props.orders)
   const renderMyOrder= () => {
       return props.orders.map((order) =>{
   
           return (

               <li className='order-list-item' key={order.OrdersId}>
                   {order.Account_Name}
                </li>
           );
       });
   };

   return(
   <div className="order-widget">
       {/* <h1>hi</h1> */}
       <ul className='order-wid-list'>
           {renderMyOrder()}
           </ul>

   </div>)
}