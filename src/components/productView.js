import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../App.css';

export default function ProductView ({email}) {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [clientId, setId]= useState('');
    const [columnDefs] = useState([


        { field: "Product_Name", sortable: true, filter: true},
        { field: "Type", sortable: true, filter: true},
        { headerName:'Information',field: "Specs"},
        // { field: "Owner_Email"},
        { field: "Floating", sortable: true, filter: true },
        { field: "Color", sortable: true, filter: true },
        { field: "NumberOfColors", sortable: true, filter: true },
        { field: "InkType", sortable: true, filter: true },
     ]);   
     async function getId() {
        let response=  await fetch('https://api-pamiran.herokuapp.com/customers')
        const people= await response.json();
        const clientId= people.find(x => x.EMAIL === email)['ClientId'];
        setId(clientId);
     }
     getId(); 

   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/product/'+clientId)
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, [clientId]);
   return (
    <div className="Products" id="outer-container">
        <div id="page-wrap">
        <div className="ag-theme-alpine" style={{height: 450, width: 920}}>
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                rowSelection="single">
            </AgGridReact>
        </div>
        </div>
    </div>
  );
};