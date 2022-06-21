import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Products () {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [columnDefs] = useState([
        { field: "Product_Name", sortable: true, filter: true},
        { field: "Owner_Email", sortable: true, filter: true},
        { field: "Type", sortable: true, filter: true},
        { field: "Specs"},
         { field: "Floating", sortable: true, filter: true },
         {field: "VendorPrice_Per_m"},
         { field: "Margin"},
         { field: "ClientPrice_Per_m", sortable: true },
     ]);    

   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/product')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, []);

   return (
    <div className="Products" id="outer-container">
        <h4> <a className="menu-item" href="/addProduct">Add new Product</a></h4>
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