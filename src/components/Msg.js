import { useEffect, useState, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



export default function Msg ({setCounter}) {

  const [rowData, setRowData] = useState([]);
  const [customer_Name, setCustName]=useState('');
  const [email , setemail]=useState('');
  const [name , setname]=useState('');
  const [price , setPrice]=useState('');
  const [specs , setspecs]=useState('');
  const [floating , sefloating ]=useState('');
  const [type , settype]=useState('');
  const [clientId, setclientId]=useState('');
  const [inkType, setinkType]=useState('');
  const [numP , setnumP]=useState('');
  const [color , setcolor]=useState('');
  const [qnt , setQnt]=useState('');
  const [productId , setProductId]=useState('');
  const [msgId , setMsgId]=useState('');
  const gridRef = useRef(null);
  const cellClassRules = {
    'cell-pass': params => params.value ==='New',
    'cell-approved' :params => params.value ==='Approved'
}
  const [columnDefs] = useState([

         { field: "Date", sortable: true, filter: true,checkboxSelection: true, suppressCellFlash: true },
         { field: 'Status', cellClassRules: cellClassRules},
         { field: 'MsgStatus'},
         { field: "CompanyName", sortable: true, filter: true },
         { field: "Qnt", sortable: true },
         { field: "Product_Name", sortable: true },
         { field: 'Price'}
     ]);  
    //  var colorIndex = 0;

    //   var colors = ['#000000', '#000066', '#006600', '#660000'];  
    //   const progressColor = () => {
    //     colorIndex++;
    //     if (colorIndex === colors.length) {
    //       colorIndex = 0;
    //     }
    //   };
    //   const redrawAllRows = useCallback(() => {
    //     progressColor();
    //     gridRef.current.api.redrawRows();
    //   }, []);

      async function getId() {
        let response=  await fetch('https://api-pamiran.herokuapp.com/product')
        const AllProducts= await response.json();
        const id= AllProducts[AllProducts.length-1].ProductId+1
          setProductId(id)
    }

    async function getLength() {
      fetch('https://api-pamiran.herokuapp.com/msg')
      .then(result => result.json())
      .then(rowData => setCounter(rowData.length))

  }

   useEffect(() => {
       fetch('https://api-pamiran.herokuapp.com/msg')
           .then(result => result.json())
           .then(rowData => setRowData(rowData))
           

          getLength()
          getId()
   }, [price]);
  //  console.log(countMsg)
   async function getDescription(){
      const selectedNodes = gridRef.current.api.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      // console.log(selectedData)
      selectedData.map( node => setemail(node.EMAIL));
      selectedData.map( node => setname(node.Product_Name));
      selectedData.map( node => setspecs(node.Specs));
      selectedData.map( node => sefloating(node.Floating));
      selectedData.map( node => settype(node.Type));
      selectedData.map( node => setclientId(node.ClientId));
      selectedData.map( node => setinkType(node.InkType));
      selectedData.map( node => setnumP(node.NumberOfColor));
      selectedData.map( node => setcolor(node.ColorOfBox));
      selectedData.map( node => setQnt(node.Qnt));
      selectedData.map( node => setCustName(node.CompanyName));
      selectedData.map( node => setMsgId(node.MsgId));
      selectedData.map( node => setPrice(node.Price));
   }

  function Add2Orders(){
  
     //// add to product

     const obj= {
      ProductName: name,
      Owner_Email: email,
      Spect: specs,
      Floating: floating,
      Type: type,
      Vendor_Price: 0,
      Margin: 0,
      Color:color,
      NumberOfColor: numP,
      InkType: inkType,
      ClientId: clientId
    }
    
      fetch("https://api-pamiran.herokuapp.com/product", {

      // Adding method type
      method: "POST",   
      // Adding body or contents to send
      body: JSON.stringify(obj),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
      })
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     
     const Tdate = yyyy + '-' + mm + '-' + dd;
     const orderObj= {
      Account_Name:customer_Name,
      Qnt: qnt,
      ProductId:productId,                                                     
      ClientId: clientId,
      OrderDate:Tdate,
      Price:price,
      OrderStatus:'Ordered',
      BackgroundColor:'red'
    }
    // console.log(orderObj)
  fetch("https://api-pamiran.herokuapp.com/orders", {
      method: "POST",   
      body: JSON.stringify(orderObj),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
    }
  })
.then(response =>  alert(`Your request is added to orders!`),
  
fetch('https://api-pamiran.herokuapp.com/msg/'+msgId, { 
  method: 'DELETE'
 }),
 fetch('https://api-pamiran.herokuapp.com/msg/')
 .then(result => result.json())
 .then(rowData => setRowData(rowData)) 
 
)


    };

 async function showForm2  () {

  const newPrice= prompt("What is the price?");
  setPrice(newPrice);
  const obj= {
    Id: msgId,
    MsgStatus:'Price Sent',
    Status:'New' ,
    Price:newPrice
}
rowData.forEach(data => {
  if (data.id === msgId) {
    data.price = newPrice;
    data.Status = 'New';
  }
});
setRowData(rowData);


 fetch(`https://api-pamiran.herokuapp.com/msg/${msgId}`,{
          method:'PUT',
          // mode:'no-cors',
          headers:{
          //   'Accept':'application/json',
            'Content-Type':'application/json'
          },
        
          body: JSON.stringify(obj)
        })
  }

   return  (
     <div>
        <div className='msgBtn'><button id='add2Orders' onClick={Add2Orders}>Add to Orders</button></div>
        <div className='msgBtn'><button id='add2Orders' onClick={showForm2 }>Response</button></div>
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