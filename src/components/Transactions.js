import { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../Table.css';
import {formatMoney} from 'accounting-js';

export default function Transactions (props) {

    const [rowData, setRowData] = useState([]);
    const [rowData2, setRowData2] = useState([]);
    const gridRef = useRef(null);
    const [description, setDes]=useState('');
    const [sumDebit,setSumDebit]=useState('');
    const [sumCredit,setSumCredit]=useState('');
    const [bal,setBal]=useState('0');
    const [columnDefs] = useState([
        { field: "Date", sortable: true, filter: true},
        { field: "Account",  filter: true },
        { field: "Debit"},
        { field: "Credit" },
     ], 
     );    
  
     async function getDescription() {
        const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const description = selectedData.map( node => setDes(node.Description));
     }

   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/transactions')
           .then(result => result.json())
           .then(rowData => {
               setRowData(rowData); 
               if (rowData) {
                //    console.log(JSON.stringify(rowData));
                    const obj = {};
                    for (let i = 0; i < rowData.length; i ++) {
                        let data = rowData[i];
                        if (obj[data.Account] !== undefined) {
                            const a = obj[data.Account]['Debit'] += parseInt(data.Debit);
                            const b = obj[data.Account]['Credit'] += parseInt(data.Credit);                           
                            const c = obj[data.Account]['Balance'] = a - b;
                            
                            if (c>0){
                                obj[data.Account]['Status'] ='+'
                            }else if(c<0){
                                obj[data.Account]['Status'] ='-'
                            }else{
                                obj[data.Account]['Status'] ='0'   
                            }
                        } else {
                            const tmp = {
                                'Account' : data.Account,
                                'Debit': parseInt(data.Debit),
                                'Credit': parseInt(data.Credit),
                                'Balance': parseInt(data.Balance),
                                'Status':data.Status
                            };
                            // console.log(tmp)
                            obj[data.Account] = tmp;
                        }
                    }
                    setRowData2(Object.values(obj));
                    // console.log(rowData2)
                }        
            }
               );
   }, []);


   return (
    <div className="tran" id="outer-container2">
        <p>Description: {description}</p>
    <div id="page-wrap2">
       <div className="ag-theme-alpine" style={{height: 300, width: 920}}>
            <div className='des'>
                  </div>
                     <AgGridReact
                        ref={gridRef}
                           rowData={rowData}
                           columnDefs={columnDefs}
                        rowSelection="single"
                        onSelectionChanged= {getDescription}>
                     </AgGridReact>
                  </div>
            </div>
            <div className='table'>
    <table className='transacz'>
        <thead>
            <tr>
                <th>Account</th>
                <th>SumOfDebit</th>
                <th>SumOfCredit</th>
                <th>Balance</th>
                <th>Status</th>

            </tr>
        </thead>
        <tbody>
            {rowData2.map((contact) =>( 
                <tr>
                <td>{contact.Account}</td>
                <td>{contact.Debit}</td>
                <td>{contact.Credit}</td>
                <td>{contact.Balance}</td>
                <td>{contact.Status}</td>

            </tr>
            ))}

        </tbody>
    </table>

</div>
         </div>
  );
};