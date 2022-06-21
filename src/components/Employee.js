import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import Sidebar from './Sidebar';
import '../App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Employee () {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [columnDefs] = useState([
         { field: "Email", sortable: true, filter: true , checkboxSelection: true},
         { field: "First_Name", sortable: true },
     ]);    
 
   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/employee')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, []);

   return (
        <div className="App" id="outer-container">
            <div className='emp-side'>
        </div>
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