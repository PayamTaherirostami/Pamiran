import React, { useState } from "react";
// import Popup from 'react';
import '../App.css';

export default function ProductAddForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [spect, setspect] = useState("");
  const [floating, setFloating] = useState("");
  const [type, setType]=useState("");
  const [color,setColor]=useState("");
  const [vendorPrice,setsetVendorPrice]=useState("");
  const [margin,setMargin]=useState("");
  const [numP,setNumP]=useState('');
  const [inkType,setInk]=useState('');
  const [clientId, setId]= useState('');
  
  const handleChange= (e) =>{
    setColor(e.target.value);
 };
 const handleChange2= (e) =>{
    setInk(e.target.value);
 };
 async function getId() {
    let response=  await fetch('hhttps://api-pamiran.herokuapp.com/customers')
    const people= await response.json();
    const clientId= people.find(x => x.EMAIL === email)['ClientId'];
    setId(clientId);

      const obj= {
          ProductName: name,
          Owner_Email: email,
          Spect: spect,
          Floating: floating,
          Type: type,
          Vendor_Price: vendorPrice,
          Margin: margin,
          Color:color,
          NumberOfColor: numP,
          InkType: inkType,
          ClientId: clientId
      }
console.log(obj)
fetch("https://api-pamiran.herokuapp.com/product", {

    // Adding method type
    method: "POST",   
    // Adding body or contents to send
    body: JSON.stringify(obj),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
      alert(`Your request is submitted!`);
      setName('');
      setEmail('');
      setspect('');
      setFloating('');
      setType('');
      setColor('');
      setsetVendorPrice('');
      setMargin('');
      setInk('');
      setNumP('')
    };
  return (
    <div>
        <div className="ax">
        <img id= 'poly' src="../images/poli2.png" className="center" alt="poly"/>
        <img id= "acr" src="../images/acrylic.png" className="center" alt="acr"/>
        </div>
        <form className="Quote">
            <fieldset>
                <legend>Register a Product</legend>
                <label>Product Name:</label>
                <input type="text" value={name} placeholder=" Like mn11 " onChange={e => setName(e.target.value)}/>
                <label>Owner's Email:</label>
                <input type="email" value={email} placeholder="example@example.com" onChange={e => setEmail(e.target.value)}/>
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
                <label>Vendor Price</label>
                <input type="floatingber" className="#price" value={vendorPrice} onChange={e => setsetVendorPrice(e.target.value)}/>
                <label>Margin</label>
                <input type="floatingber" className="#margin" value={margin} onChange={e => setMargin(e.target.value)}/>
                <div>
                    <button onClick={getId}>Submit</button>
                </div>
            </fieldset>
        </form>
    </div>    
  );
}