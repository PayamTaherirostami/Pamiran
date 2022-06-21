import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../App.css';

export default function OrderView ({email}) {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [clientId, setId]= useState('');
    const [columnDefs] = useState([


        { field: "Account_Name", sortable: true, filter: true},
        { field: "OrderDate", sortable: true, filter: true},
        // { field: "Owner_Email"},
        { field: "Qnt", sortable: true, filter: true },
        { field: "Price", sortable: true, filter: true },
        { field: "OrderStatus", sortable: true, filter: true },
    
    ]);   
    async function getId() {
        let response=  await fetch('https://api-pamiran.herokuapp.com/customers')
        const people= await response.json();
        // console.log(email)
        const clientId= people.find(x => x.EMAIL === email)['ClientId'];
        setId(clientId);
        // console.log(email)
        // console.log('clientId:',clientId)
    }
    getId(); 

    useEffect(() => {
        let url= "https://api-pamiran.herokuapp.com/orders/"+clientId;
        fetch(url)
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, [clientId]);
    return (
        <div className="Products" id="outer-container">
            <div id="page-wrap">
                <div className="ag-theme-alpine" style={{height: 430, width: 920}}>
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

