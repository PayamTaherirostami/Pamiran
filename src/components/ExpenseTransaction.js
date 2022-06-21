import React, { useState } from "react";
import '../App.css';

export default function ExpenseTransaction(){
    
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [amount, setAmount] = useState("");
    const [date,setDate]=useState("");
    const [txt,setTxt]=useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const obj= {
            Date: date,
            Account1: name,
            Amount: amount, //debit
            AmountNull:'', //credit
            Text: txt,
            Email1:'payamtaherirostami@gmail.com'
        }
            const obj2= {
            Date: date,
            Account2: name2,
            AmountNull2:'', //debit
            Amount: amount,// credit
            AmountNull3:'',
            Email2:'payamtaherirostami@gmail.com'
            }

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
      };
   
    return (
        <div className="Journalasli">
        <p><a className="menu-item3" href="/customersAdd">Need to register any Account?</a></p>
            <fieldset>
                <div className="Date_Input">
                    <label>Date</label>
                    <input type="Date" className="date" value={date} onChange={e => setDate(e.target.value)}/>
                    </div>
                    <legend>Enter the Expense transaction</legend>
                        <form className="Journal">
                            <fieldset>
                                <legend>(cust-inv/ven-pay)</legend>
                                <label>Account (Debit):</label>
                                <select className="type"  value={name} onChange={e => setName(e.target.value)}>
                                    <option value="">Select an Account
                                    </option>
                                    <option value="Water Expense">Water Expense
                                    </option>
                                    <option value="Electricity Expense">Electricity Expense
                                    </option>
                                    <option value="Factory Expense">Factory Expense
                                    </option>
                                    <option value="Insurance Expense">Insurance Expense
                                    </option>  
                                    <option value="Tax Expense">Tax Expense
                                    </option> 
                                    <option value="Salary/Wage Expense">Salary/Wage Expense
                                    </option> 
                                    <option value="Miscellaneous Expense">Miscellaneous Expense
                                    </option>     
                                    <option value="Corrugate Expense">Corrugate Expense
                                    </option> 
                                    <option value="Polycarbonate Expense">Polycarbonate Expense
                                    </option> 
                                    <option value="Mold Expense">Mold Expense
                                    </option> 
                                    <option value="Film Expense">Film Expense
                                    </option>           
                                </select>
                            </fieldset>                     
                        </form>
                        <form className="Journal2">
                            <fieldset>
                                <legend>(ven-inv/cust-pay)</legend>
                                <label>Account (Credit):</label>
                                <select className="type"  value={name2} onChange={e => setName2(e.target.value)}>
                                    <option value="">Select an Account
                                    </option>
                                    <option value="BoA Bank ">BoA Bank 
                                    </option>
                                    <option value="Check (A/P)">Check (A/P)
                                    </option>
                                    <option value="Chase Bank">Chase Bank
                                    </option>
                                    <option value="Check">Check
                                    </option>
                                </select>
                            </fieldset>
                        </form>
                        <div className="description">
                            <input type="number" className="#qnt" value={amount} onChange={e => setAmount(e.target.value)}/>
                            <textarea className="comments"  placeholder=' Enter the desciption here.' value={txt} onChange={e => setTxt(e.target.value)}></textarea>
                            <button onClick={handleSubmit}>Enter</button>
                </div>
            </fieldset>
        </div>   
    );
}