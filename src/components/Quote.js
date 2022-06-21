import React, { useState } from "react";
// import Popup from 'react';
import '../App.css';
import {Redirect} from "react-router-dom";
////////////////////////////////////////////////// az safhe chera mire birun bad k kar tamum shod? normale?
export default function Quote({email}){

  const [name, setName] = useState("");
  const [email2, setEmail] = useState("");
  const [CompName, setCompName] = useState("");
  const [num, setNum] = useState("");
  const [type, setType]=useState("None");
  const [color,setColor]=useState("");
  const [numP,setNumP]=useState(0);
  const [qnt,setQnt]=useState("");
  const [date,setDate]=useState("");
  const [txt,setTxt]=useState("");
  const [clientId, setId]= useState('');
  const [inkType,setInk]=useState('');
  const [spect, setspect] = useState("");
  const [floating, setFloating] = useState("");
  const[nameOfProduct,setPName]=useState('');
  const handleChange= (e) =>{
    setColor(e.target.value);
 };
 const handleChange2= (e) =>{
  setInk(e.target.value);
};
 async function getId() {
    let response=  await fetch('https://api-pamiran.herokuapp.com/customers')
    const people= await response.json();
    const clientId= people.find(x => x.EMAIL === email)['ClientId'];
    const custName= people.find(x => x.EMAIL === email)['Account_Name'];
    setCompName(custName);
    setId(clientId);
//  }
    // getId();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    const Tdate = mm + '-' + dd + '-' + yyyy;
      const obj= {
          Today: Tdate,
          FullName: name,
          Email: email2,
          CompanyName: custName,
          Phone: num,
          ProductName: nameOfProduct,
          Spect: spect,
          Floating: floating,
          Type: type,
          ColorOfBox:color,
          NumberOfColor: numP,
          InkType: inkType,
          Qnt: qnt,
          Date: date,
          Text: txt,
          Status:'Waiting for Price',
          Client:clientId,
          Price:'-',
          QR:'Sent to api-pamiran'

      }

// POST request using fetch()
fetch("https://api-pamiran.herokuapp.com/msg", {

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
      alert(`Dear ${name} your request is submitted, we will back to you soon!`);
      setName('');
      setEmail('');
      setCompName('');
      setNum('');
      setType('');
      setColor('');

      setNumP('');
      setQnt('');
      setDate('');
      setTxt('');
      setId('');
      <Redirect to= "/dashboard"/>
      //(MsgId, FullName, EMAIL, CompanyName, Phone, Type, ColorOfBox,  NumberOfColor, Qnt, Date, Text, Product_Name, Specs, Floating, InkType, ClientId)
    };
  return (
      <div>
          <div className="ax">
            <img id= 'poly' src="../images/poli2.png" className="center" alt="poly"/>
            <img id= "acr" src="../images/acrylic.png" className="center" alt="acr"/>
          </div>
          <form className="Quote">
            <fieldset>
                <legend>Ask for a quote</legend>
                <label>Name:</label>
                <input type="text" value={name} placeholder=" Full name" onChange={e => setName(e.target.value)}/>
                <label>Email:</label>
                <input type="email" value={email2} placeholder=" example@example.com" onChange={e => setEmail(e.target.value)}/>
                {/* <label>Name of company:</label>
                <input type="text" value={CompName} onChange={e => setCompName(e.target.value)}/> */}
                <label>phone number:</label>
                <input type="text"value={num} placeholder=" xxx xxx xx xx" onChange={e => setNum(e.target.value)}/>           
                <label>Product Name:</label>
                <input type="text" value={nameOfProduct} placeholder=" Like product-11 " onChange={e => setPName(e.target.value)}/>
                <label>Information:</label>
                <input type="text" value={spect} placeholder=' Like L * W * H ' onChange={e => setspect(e.target.value)}/>
                <label>Floating</label>     
                <select className="floating"  value={floating} onChange={e => setFloating(e.target.value)}>
                <option value="-">-
                    </option>
                    <option value="E">E
                    </option>
                    <option value="B">B
                    </option>
                    <option value="C">C
                    </option>
                    <option value="B&C">B&C
                    </option> 
                </select>          
                <label>Type</label>     
                <select className="type"  value={type} onChange={e => setType(e.target.value)}>
                <option value="-">-
                    </option>
                    <option value="None">Mold
                    </option>
                    <option value="Regular Box">Regular Box
                    </option>
                    <option value="Diecut Box">Diecut Box
                    </option>
                    <option value="Divider for Box">Divider for Box
                    </option>  
                    <option value="Polycarbonate">Polycarbonate
                    </option> 
                    <option value="Plexyglass">Plexyglass
                    </option> 
                    <option value="PVC/ABS parts">PVC/ABS parts
                    </option>               
                </select>
                <label>Color of Box</label>
                    <select className="color" onChange={handleChange} value={color}>
                    <option value="-">-
                    </option>
                    <option value="Laminated">Laminated
                    </option>
                    <option value="White">White
                    </option>
                    <option value="Brown">Brown
                    </option>
                </select> 
                <label>Number of colors</label>
                      <input type="number" className="#color" value={numP} onChange={e => setNumP(e.target.value)}/>
                      <label>Type of Ink</label>
                      <select className="ink" onChange={handleChange2} value={inkType}>
                    <option value="-">-
                    </option>
                    <option value="WaterBase">WaterBase
                    </option>
                    <option value="UV">UV
                    </option>
                    <option value="PVC">PVC
                    </option>
                </select>
                <label>When do you need these items by?</label>
                <input type="Date" className="date1" value={date} onChange={e => setDate(e.target.value)}/>
                <label>Quantity:</label>
                    <input type="number" value={qnt} onChange={e => setQnt(e.target.value)}/>
                <label> Any other Description:*</label>
                <textarea className="comments"  placeholder=' Enter the dimention for the box or product number here.' value={txt} onChange={e => setTxt(e.target.value)}></textarea>
                    <div>
                    <button onClick={getId}>Submit</button>
                    </div>
            </fieldset>
        </form>
    </div>   
  );
}