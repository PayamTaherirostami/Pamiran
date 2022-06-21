import React, { useState } from "react";
// import Popup from 'react';
import '../App.css';

export default function Register(props) {
  const [First_Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [compName, setCompName] = useState("");
  const [Last_Name , setLName] = useState("");
  const [phone,setNumP]=useState("");
  const [address,setAddress]=useState("");
  const [zipCode,setZip]=useState("");
  const [client_Role]=useState("customer");
  
async function test() {
    let response = await fetch('https://api-pamiran.herokuapp.com/customers');
    const people= await response.json();
    const AllEmails = people.map (p => { return p.EMAIL });
    if (AllEmails.includes(email.toLowerCase()) === true && email.toLowerCase() !== 'payamtaherirostami@gmail.com'){
        alert('This Email already exists, Try another one!')  
    }else{
        alert(`Congrats, " ${email} " is registered now, you can use this email address next time to login!`)
        const obj= {
          F_Name: First_Name,
          L_Name:Last_Name,
          Email: email,
          Phone: phone,
          Address: address,
          ZipCode: zipCode,
          CompName: compName,
          Client_Role: client_Role,
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
          // Displaying results to console
          // .then(json => console.log(json));
              setName("");
              setEmail("");
              setCompName("");
              setLName("");
              setNumP("");
              setAddress("");
              setZip("");
    }
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
                  <label>Account Name/ Company Name:</label>
                  <input type="text" value={compName}  onChange={e => setCompName(e.target.value)}/>
                  <legend>Register An Account</legend>
                  <label>First Name:</label>
                  <input type="text" value={First_Name} placeholder=" First name" onChange={e => setName(e.target.value)}/>
                  <label>Last Name:</label>
                  <input type="email" value={Last_Name} placeholder=" Last name"onChange={e => setLName(e.target.value)}/>
                  <label>Email:</label>
                  <input type="text" value={email}  placeholder=" example@example.com" onChange={e => setEmail(e.target.value)}/>
                  <label>Phone:</label>
                  <input type="text" value={phone} placeholder=" 333 333 33 33" onChange={e => setNumP(e.target.value)}/>
                  <label>Address:</label>
                  <input type="text" value={address}  onChange={e => setAddress(e.target.value)}/>
                  <label>Zip code:</label>
                  <input type="text" value={zipCode}  onChange={e => setZip(e.target.value)}/>
                  <div>
                    <button onClick={handleSubmit}>Submit</button>
                  </div>

              </fieldset>
        
          </form>
      </div> 
      
    );
}