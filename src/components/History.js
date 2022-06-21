import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function History ({email}) {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const [clientId, setId]= useState('');
    const [msgId, setMsgId]= useState('');
    const [price, setPrice]= useState('');
    const[custName,setName]=useState('');

    const cellClassRules = {
        'cell-pass': params => params.value ==='New',
        'cell-approved' :params => params.value ==='Approved'
    }
   
    const [columnDefs] = useState([
        
         { field: "Date", sortable: true, filter: true,checkboxSelection: true },
         { field: "Status", cellClassRules: cellClassRules},
         { field: "Price"},
         { field: "Product_Name", sortable: true },
         { field: "Qnt"},
    ])
  

     async function getId() {
      let response=  await fetch('https://api-pamiran.herokuapp.com/customers')
      const people= await response.json();
    //   console.log(email)
      const clientId= people.find(x => x.EMAIL === email)['ClientId'];
      const custName= people.find(x => x.EMAIL === email)['Account_Name'];
      setId(clientId);
      setName(custName);
   }
   getId();
   useEffect(() => {

       let url= "https://api-pamiran.herokuapp.com/msg/"+clientId;
       fetch(url)
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
 
      }, [clientId,price]);


     function getDescription(){

        const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        // console.log(selectedData)
        // const mgIdd=setMsgId(0)
        selectedData.map( node => setMsgId(node.MsgId));
        selectedData.map( node => setPrice(node.Price));
    //   change()
      }

    //   async function change(){
    //     const obj= {
    //         Id: msgId,
    //         MsgStatus:'Seen',
    //         Status:'Waiting for Price',
    //         Price:'-'
    //     }
    //     console.log(obj)
    //      await fetch(`http://localhost:8000/msg/${msgId}`,{
    //         method:'PUT',
    //         // mode:'no-cors',
    //         headers:{
    //         //   'Accept':'application/json',
    //           'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify(obj)
    //       })
    //   }

      const  Approval = (e) => { 

        const obj= {
            Id: msgId,
            MsgStatus:'Seen',
            Status:'Approved',
            Price:price
        }
        console.log(obj)
        fetch(`https://api-pamiran.herokuapp.com/msg/${msgId}`,{
            method:'PUT',
            // mode:'no-cors',
            headers:{
            //   'Accept':'application/json',
              'Content-Type':'application/json'
            },
          
            body: JSON.stringify(obj)
          })
          let url= "https://api-pamiran.herokuapp.com/msg/"+clientId;
          fetch(url)
              .then(result => result.json())
              .then(rowData => setRowData(rowData))
    }

   return (
       <div>
           <div className='Hist'>
               <button onClick={Approval}>Approve it!</button>
            </div>
            <div className="ag-theme-alpine" style={{height: 450, width: 920}}>
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