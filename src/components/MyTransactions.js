import React from 'react';
import { useState,useEffect,useRef } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {formatMoney} from 'accounting-js';
import ReactLoading from 'react-loading';
import {usePromiseTracker} from 'react-promise-tracker';

export default function MyTransactions({email}){
    const [values, setValue] = useState('api-pamiran1');
    const[stat,setStat]=useState('');
    const [myArr, setMyArr]=useState([]);
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [clientId, setId]= useState('');
    const [columnDefs] = useState([

        { field: "Date", sortable: true, filter: true},
        { field: "Account",  filter: true },
        { field: "Debit"},
        { field: "Credit" },
        {field: "Description",  filter: true},
     ]);    

    const  onChange = (e) => { 
        setValue(e.target.value);
    }
    const { promiseInProgress }= usePromiseTracker();
  
    useEffect(() => {
        
            const fetchData= async() => { 
            let url= "https://api-pamiran.herokuapp.com/myAccount";
            await fetch(url)
            .then(result => result.json())
            .then(rowData => setRowData(rowData));
            }
            fetchData()
            if (values !== 'api-pamiran1'){
                const getId=async() => { 
                    const clientIdnew=rowData.find(x => x.Account_Name === values)['ClientId'];
                    setId(clientIdnew)
                    let url2= "https://api-pamiran.herokuapp.com/transactions/"+clientIdnew;
                    await fetch(url2)
                        .then(result => result.json())
                        .then(myArr =>setMyArr(myArr));
            }
            getId();
        }
    }, [values]);

    const sumDebArr= myArr.map(x => x.Debit);
    const sumD = sumDebArr.reduce(function (result,item) {
         return result + parseFloat(item);}, 0);
    const sumCreArr= myArr.map(x => x.Credit);
    const sumC = sumCreArr.reduce(function (result,item) {
         return result + parseFloat(item);}, 0);
         const final= formatMoney(sumC-sumD, {
            symbol: "",
            precision: 0,
            thousand: ",",
            format: {
                pos : "%s %v",
                neg : "%s (%v)",
                zero: "%s  --"
            }
        });
        useEffect(()=>{

            if((sumC-sumD)<0){
              setStat('بدهکار');    
            }else if ((sumC-sumD)>0){
              setStat('بستانکار');
            
            }else{
              setStat('تصفیه')
            }
          },[sumC, sumD])
    const LoadingIndicator =() =>{
              return(
                  <div className='loadingIcon'>
                        <ReactLoading type={'spin'} color={'#00807F'} height={'9%'} width={'9%'} />    
                  </div>
              )
          }
    return promiseInProgress ?   <LoadingIndicator />: (
      
        <div className='dd'>
            
           <form className="Account">
               
                <div className='h'><h3>Balance: {final} </h3></div> 
                
                <div className='hac'><h3>Status: {stat}</h3></div> 
                        <fieldset>
                            <legend>Select the Account</legend>
                            
                                <select value={values} onChange={onChange}>
                                    {rowData.map(item => {
                                        return (<option key= {item.ClientId} value={item.Account_Name}>{item.Account_Name}</option>);
                                    })}
                                </select>
                            
                    </fieldset>
           </form> 
            <div className="App" id="outer-container">
                <div id="page-wrap">
                    <div className="ag-theme-alpine" style={{height: 450, width: 920}}>
                        <AgGridReact
                            ref={gridRef}
                            rowData={myArr}
                            columnDefs={columnDefs}
                            rowSelection="multiple">
                        </AgGridReact>
                    </div>
                </div>
            </div>
        </div>
    );

}