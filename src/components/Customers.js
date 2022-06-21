import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Sidebar from './Sidebar'
export default function Customers (props) {
    const [rowData, setRowData] = useState([]);
    const [balance, setBalance]=useState('');
    const [customer, setCustomer]=useState('');
    const [status, setStatus]=useState('');
    const [sum, setSum]=useState('');
    const gridRef = useRef(null);
    const [columnDefs] = useState([

        { field: "Account_Name", sortable: true, filter: true, checkboxSelection: true},
         { field: "Last_Name", sortable: true, filter: true },
         { field: "Phone"},
         { field: "EMAIL", sortable: true, filter: true },
         { field: "Address", sortable: true },
         { field: "Client_Role", sortable: true, filter: true },
         {field: "Client_Act_Status"},
     ]);    

    async function getBalance() {
        let response= await fetch('https://api-pamiran.herokuapp.com/ustomers')
        const people= await response.json();
        const AllNames= people.map(p => { return p.Account_Name });
        const AllBal= people.map(x => x.Balance);
        const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const balance = selectedData.map( node => setBalance(node.Balance));
        const customer=  selectedData.map( node => setCustomer(node.Account_Name));
        const status=  selectedData.map( node => setStatus(node.Status));
        const sum = AllBal.reduce((a, b) => a + b, 0);
        setSum(sum);
    }

   useEffect(() => {
       
       fetch('https://api-pamiran.herokuapp.com/customers')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, []);

    function refresh() {
        setSum('');
        setStatus('');
        setBalance('');
        setCustomer('');
    }

   return (
    <div className="transactions" id="outer-container">
        <h4> <a className="menu-item" href="/customersAdd">Add new Account</a></h4>
        <div id="page-wrap">
            <div className="ag-theme-alpine" style={{height: 450, width: 920}}>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    rowSelection="multiple">
                </AgGridReact>
            </div>
       </div>
    </div>
  );
};

