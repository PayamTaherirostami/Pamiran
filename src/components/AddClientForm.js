import React, { useState } from "react";
import '../App.css';

export default function Register(props) {
  const [First_Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Account_Name, setAccountName] = useState("");
  const [Last_Name , setLName] = useState("");
  const [phone,setNumP]=useState("");
  const [address,setAddress]=useState("");
  const [zipCode,setZip]=useState("");
  const [client_Role,setRole]=useState("");

async function test() {
    let response = await fetch('https://api-pamiran.herokuapp.com/customers');
    const people= await response.json();
    const AllEmails = people.map (p => { return p.EMAIL });
        alert(` ${Account_Name}  is registered now!`)
        const obj= {
          F_Name: First_Name,
          L_Name:Last_Name,
          Email: email,
          Phone: phone,
          Address: address,
          ZipCode: zipCode,
          CompName: Account_Name,
          Client_Role: client_Role,
          Debit:'0',
          Credit:'0',
          Client_Act_Status:'1'
        }
        // POST request using fetch()
        fetch("https://api-pamiran.herokuapp.com/customers", {
          // Adding method type
          method: "POST",   
          // Adding body or contents to send
          body: JSON.stringify(obj),
          // Adding headers to the request
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
        })
          // Converting to JSON
          .then(response => response.json())
              setName("");
              setEmail("");
              setAccountName("");
              setLName("");
              setNumP("");
              setAddress("");
              setZip("");
  }
  const handleSubmit = (evt) => {
      evt.preventDefault();
      test();
  }
  return (
      <div>
    <div className="ax">
    <img id= 'poly' src="../images/customer.png" className="center" alt="poly"/>
    <img id= "acr" src="../images/22.png" className="center" alt="acr"/>
    </div>
    <form className="Quote">
        <fieldset>
            <legend>Register new Account</legend>
            <label>First Name:</label>
            <input type="text" value={First_Name} placeholder="First name" onChange={e => setName(e.target.value)}/>
            <label>Last Name:</label>
            <input type="email" value={Last_Name} placeholder="Last name"onChange={e => setLName(e.target.value)}/>
            <label>Email:</label>
            <input type="text" value={email}  placeholder="example@example.com" onChange={e => setEmail(e.target.value)}/>
            <label>Phone:</label>
            <input type="text" value={phone} placeholder="333 333 33 33" onChange={e => setNumP(e.target.value)}/>
            <label>Address:</label>
            <input type="text" value={address}  onChange={e => setAddress(e.target.value)}/>
            <label>Zip code:</label>
            <input type="text" value={zipCode}  onChange={e => setZip(e.target.value)}/>
            <label>Account/Cust. Name:</label>
            <input type="text" value={Account_Name}  onChange={e => setAccountName(e.target.value)}/>
            <select className="type"  value={client_Role} onChange={e => setRole(e.target.value)}>
                <option value="customer">Customer
                </option>
                <option value="employee">Employee
                </option>
                <option value="vendor">Vendor
                </option>
                <option value="account">Account
                </option>
            </select>
            <div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
        </fieldset>
      </form>
    </div>   
  );
}