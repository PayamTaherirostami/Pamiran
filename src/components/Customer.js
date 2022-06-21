import { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Sidebar from './Sidebar';
export default function Customer () {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [columnDefs] = useState([
        { field: "Account_Name", sortable: true, filter: true, checkboxSelection: true },
         { field: "Last_Name", sortable: true, filter: true },
         { field: "Phone", sortable: true, filter: true },
         {field: "Address"},
     ]);    

   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/customer')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, []);

   return (
    <div className="App" id="outer-container">
        <div id="page-wrap">
          <div className="ag-theme-alpine" style={{height: 400, width: 920}}>
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