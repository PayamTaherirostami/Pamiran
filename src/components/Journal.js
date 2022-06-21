import React, { useState} from "react";
// import Popup from 'react';
import '../App.css';
export default function Journal(){
    
 
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [amount, setAmount] = useState("");
    const [date,setDate]=useState("");
    const [txt,setTxt]=useState("");
    const [email1,setEmail1]=useState("");
    const [email2,setEmail2]=useState("");
    const [clientId1, setId1]= useState('');
    const [clientId2, setId2]= useState('');


    //     // Get Email using fetch
    async function getEmail() {
        let response= await fetch('https://api-pamiran.herokuapp.com/customers')
        const people= await response.json();
        const AllNames= people.map(p => { return p.Account_Name.toLowerCase() });
        if (AllNames.includes(name.toLowerCase()) === false &&  AllNames.includes(name2.toLowerCase()) === false) { 
             alert(` Both Account: ${name} and ${name2} need to be registered!`);
        }
        else if (AllNames.includes(name.toLowerCase()) === false) {  
             alert(` Account: ${name} needs to be registered!`);
        }
        else if ( AllNames.includes(name2.toLowerCase()) === false) {
             alert(` Account: ${name2} needs to be registered!`);
        }else{
            const email1= people.find(x => x.Account_Name === name)['EMAIL'];
            setEmail1(email1);
            const clientId1= people.find(x => x.Account_Name === name)['ClientId'];
            setId1(clientId1);
            const email2= people.find(y => y.Account_Name === name2)['EMAIL'];
            setEmail2(email2);
            const clientId2= people.find(y => y.Account_Name === name2)['ClientId'];
            setId2(clientId2);
            const obj= {
                Date: date,
                Account1: name,
                Amount: amount, //debit
                AmountNull:'0', //credit
                Text: txt,
                Email1: email1,
                ClientId1:clientId1
            }
            const obj2= {
                Date: date,
                Account2: name2,
                AmountNull2:'0', //debit
                Amount: amount,// credit
                Text: txt,
                Email2: email2,
                ClientId2:clientId2
            }

            // POST request using fetch()
            fetch("https://api-pamiran.herokuapp.com/transactions", {
            // Adding method type
            method: "POST",   
            // Adding body or contents to send
            body: JSON.stringify({obj, obj2}), 
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
    
            // Converting to JSON
            .then(response => response.json())
            alert(`Your request is submitted!`);
            setName('');
            setName2('');
            setAmount('');
            setDate('');
            setTxt('');
            setEmail1('');
            setEmail2('');
        }
    }   
   
    return (
        <div className="Journalasli">
            <p><a className="menu-item2" href="/customersAdd">Need to register any Account?</a></p>
            <p><a className="exp" href="/expenses">Want to add expenses?</a></p>
            <fieldset>
                <div className="Date_Input">
                    <label>Date</label>
                    <input type="Date" className="date" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                    <legend>Enter the transaction</legend>
                        <form className="Journal">
                            <fieldset>
                                <legend>(cust-inv/ven-pay)</legend>
                                <label>Account (Debit):</label>
                                <input type="text" value={name} placeholder=" Debit" onChange={e => setName(e.target.value)}/>
                            </fieldset>                     
                        </form>
                        <form className="Journal2">
                            <fieldset>
                                <legend>(ven-inv/cust-pay)</legend>
                                <label>Account (Credit):</label>
                                <input type="text" value={name2} placeholder=" Credit" onChange={e => setName2(e.target.value)}/>
                            </fieldset>
                        </form>
                        <div className="description">
                            <input type="number" className="#qnt" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <textarea className="comments"  placeholder=' Enter the desciption here.' value={txt} onChange={e => setTxt(e.target.value)}></textarea>
                            <button onClick={getEmail}>Enter</button>
                        </div>
            </fieldset>
        </div>  
    );
}