import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-enterprise';
import Sidebar from './Sidebar';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Vendor () {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [columnDefs] = useState([
        { field: "Account_Name", sortable: true, filter: true, checkboxSelection:true},
         { field: "Phone"},
         { field: "EMAIL", sortable: true, filter: true },
         { field: "Address", sortable: true },
         {field: "Balance"},
         {field: "Status"},
     ]);    

   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/vendor')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, []);

   return (
        <div className="App" id="outer-container">
    {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
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