
import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../App.css';

export default function Orders (props) {

    const [rowData, setRowData] = useState([]);
    const [values, setValue] = useState('Pending');
    const [orderId,setID]=useState('');
    const [backgroundColor,setOrdColor]=useState('')
    const gridRef = useRef(null);
    const [columnDefs] = useState([
        { field: "Account_Name",sortable: true, filter: true, checkboxSelection: true },
        { field: "OrderStatus", sortable: true,filter: true  },
        //  { field: "ClientId", },
        //  { field: "ProductId", sortable: true, filter: true },

         { field: "OrderDate", sortable: true, filter: true },
         { field: "Price", editable: true,},
         { field: "Qnt"},
         
     ]);    
const options=[{id:1,Name:'Pending'},{id:2,Name:'Ordered'},{id:3,Name:'InProcess'},{id:4,Name:'Completed'}]
const  onChange = (e) => { 
    
    setValue(e.target.value);
    const newVal = e.target.value
    if (newVal==='pending'){
        setOrdColor('brown')
    } else if(newVal==='Ordered'){
        setOrdColor('red')
    } else if(newVal==='InProcess'){
        setOrdColor('green')
    } else if(newVal==='Completed'){
        setOrdColor('black')}
    const obj= {
        id: orderId,
        OrderStatus:newVal,
        BackgroundColor:backgroundColor
    }
    console.log(obj);
    fetch(`https://api-pamiran.herokuapp.com/orders/${orderId}`,{
        method:'PUT',
        // mode:'no-cors',
        headers:{
        //   'Accept':'application/json',
          'Content-Type':'application/json'
        },
      
        body: JSON.stringify(obj)
      })
      fetch('https://api-pamiran.herokuapp.com/orders')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
}
async function getDescription(){

    const selectedNodes = gridRef.current.api.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    // console.log(selectedData)
    const orderId= selectedData.map( node => setID(node.OrdersId));
}


 
   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/orders')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
   }, []);

   return (
       <div className="orderPage" >
           <form className="Account">
               
               <fieldset>
                   <legend>Change the order Status</legend>
                   
                       <select value={values} onChange={onChange}>
                           {options.map(item => {
                               return (<option key= {item.id} value={item.Name}>{item.Name}</option>);
                           })}
                       </select>
                   
           </fieldset>
       </form>
            <div className="ag-theme-alpine" style={{height: 400, width: 920}}>
                <div className='h'> <h3> <a  href="/addOrders">Add new Order</a></h3></div>
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    rowSelection="single"
                    onSelectionChanged= {getDescription}>
                </AgGridReact>
            </div>
    </div>
  );
};