import React, { useEffect, useState } from "react";
// import Popup from 'react';
import '../App.css';

export default function AddOrders(props) {
//   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Customer_Name, setCustomer_Name] = useState("");
  const [qnt, setQnt]=useState("");
  const [proId,setProId]=useState('');
  const [clientId, setId]= useState('');
  const [rowData, setRowData] = useState([]);
  const [values, setValue] = useState('');
  const [date,setDate]=useState("");


  const  onChange = (e) => { 
    setValue(e.target.value);
}

 async function getInfo() {
    let response=  await fetch('https://api-pamiran.herokuapp.com/customers')
    const people= await response.json();
    console.log(people)
    const clientId= people.find(x => x.Account_Name === Customer_Name)['ClientId'];
    setId(clientId);
    // let response2=  await fetch('http://localhost:8000/product')
    // const products= await response2.json();
    // console.log(products)
    // const proId= products.find(x => x.Product_Name === values)['ProductId'];
   const proId= rowData.find(x => x.Product_Name === values)['ProductId'];
    
    setProId(proId);
    console.log(proId)
      const obj= {
          Account_Name:Customer_Name,
          Qnt: qnt,
          ProductId: proId,
          ClientId: clientId,
          OrderDate:date,
          OrderStatus:'Ordered',
      }


    fetch("https://api-pamiran.herokuapp.com/orders", {

        // Adding method type
        method: "POST",   
        // Adding body or contents to send
        body: JSON.stringify(obj),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    // .then(response => response.json())
// // Displaying results to console
//     .then(json => console.log(json));
      alert(`Your request is submitted!`);
      setValue('');
      setCustomer_Name('');
      setQnt('');
      setProId('');
    };

    useEffect(() => {
        fetch('https://api-pamiran.herokuapp.com/product')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))

    }, []);

  return (
    <div>
        <div className="ax">
            <img id= 'poly' src="../images/poli2.png" className="center" alt="poly"/>
            <img id= "acr" src="../images/acrylic.png" className="center" alt="acr"/>
        </div>
        <div className="addOrder"><h3><a  href="/addProduct">Did you register the product first?</a></h3></div>
           <form className="Quote">
                <fieldset>
                    <legend>Add a new order</legend>
                    <label>Date</label>
                        <input type="Date" className="date1" value={date} onChange={e => setDate(e.target.value)}/>
                    <label>Product Name:</label>
                    <select value={values} onChange={onChange}>
                                   {rowData.map(item => {
                                       return (<option key= {item.ProductId} value={item.Product_Name}>{item.Product_Name}</option>);
                                   })}
                               </select>
                    <label>Customer:</label>
                    <input type="text" value={Customer_Name} onChange={e => setCustomer_Name(e.target.value)}/>
                    <label>Quantity:</label>
                    <input type="number" value={qnt} onChange={e => setQnt(e.target.value)}/>
                    <div>
                        <button onClick={getInfo}>Submit</button>
                    </div>
                </fieldset>
             </form>
    </div>    
  );
}