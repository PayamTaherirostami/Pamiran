import { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {formatMoney} from 'accounting-js';
import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";
import '../Table.css'
export default function Transactions4Customers ({email}) {
    const [rowData, setRowData] = useState([]);
    const[stat,setStat]=useState('');
    const gridRef = useRef(null);
    const [clientId, setId]= useState('');
    const[custName,setName]=useState('');
//     // Group columns
// const groupHeaderHeight = 75;

// // Label columns
// const headerHeight = 150;

// // Floating filter
// const floatingFiltersHeight = 50;

// // Pivoting, requires turning on pivot mode. Label columns
// const pivotHeaderHeight = 100;

// // Pivoting, requires turning on pivot mode. Group columns
// const pivotGroupHeaderHeight = 50;
    const [columnDefs] = useState([
      { headerName: 'Transactions',
        children: [ 
          { field: "Date", sortable: true, filter: true},
          { field: "Debit"},
          { field: "Credit" },
          {field: "Description",  filter: true},
        ],
      },
    ], 
  // gridOptions = {
  //     defaultColDef: {
  //       sortable: true,
  //       resizable: true,
  //     },
    //   columnDefs: columnDefs,
    //   rowData: null,
    //   groupHeaderHeight: 75,
    //   headerHeight: 150,
    //   floatingFiltersHeight: 50,
    //   pivotGroupHeaderHeight: 50,
    //   pivotHeaderHeight: 100,
    // },
    ); 

     async function getId() {
        let response=  await fetch('https://api-pamiran.herokuapp.com/customers')
        const people= await response.json();
        const clientId= people.find(x => x.EMAIL === email)['ClientId'];
        const custName= people.find(x => x.EMAIL === email)['Account_Name'];
        setId(clientId);
        setName(custName);

     }
     getId();
      useEffect(() => {
        let url= "https://api-pamiran.herokuapp.com/transactions/"+clientId;
        fetch(url)
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
      }, [clientId]);


   const sumDebArr= rowData.map(x => x.Debit);
   const sumD = sumDebArr.reduce(function (result,item) {
        return result + parseFloat(item);}, 0);
   const sumCreArr= rowData.map(x => x.Credit);
   const sumC = sumCreArr.reduce(function (result,item) {
        return result + parseFloat(item);}, 0);
  //  const final= formatMoney(sumC-sumD, {
  //     symbol: "",
  //     precision: 0,
  //     thousand: ",",
  //     format: {
  //       pos : "%s %v",
  //       neg : "%s (%v)",
  //       zero: "%s  --"
  //     }
  //   });
    function eArabic(x){
      return x.toLocaleString('ar-EG');
    }
    const final = eArabic(sumC-sumD)

useEffect(()=>{
  if((sumC-sumD)<0){
    setStat('بدهکار');    
  }else if ((sumC-sumD)>0){
    setStat('بستانکار');
  }else{
    setStat('تصفیه')
  }
},[sumC, sumD])
// console.log(sumC-sumD)    //why several render?
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const Tdate = yyyy + '-' + mm + '-' + dd;

  // Generate the pdf based on a component
  const printToPdf = () => {
   html2canvas(document.getElementById("print_to_pdf")).then(canvas => {
     var data = canvas.toDataURL();
     var pdfExportSetting = {
       content: [
         {
           image: data,
           width: 520
         }
       ],
     };
     pdfMake.createPdf(pdfExportSetting).download("test_file.pdf");
   });
 };

   return (
    <div className="tranCus" id="outer-container">
               <button onClick={printToPdf} style={{ backgroundColor: "blue" }}>
          Download
        </button>
        <br />
        <hr />
        <br />
        <br></br>
        <span id="print_to_pdf">
          <div className="picture1"> <img id= 'logo22' src="../images/13.jpg" className="center" alt="logo"/></div>
            <div className='date'>{Tdate}</div>
            <div className='h31'><h3>  {custName} :مشتری </h3></div>
            <div className='h31'><h3>مانده: {final} تومان </h3></div> 
            <div className='h31'><h3>وضعیت: {stat}</h3></div> 
            <div className='h3'>
            <br />
        <hr />
        <br />
        </div>
            <div id="page-wrapcust">
               
                  {/* <AgGridReact
                      ref={gridRef}
                      rowData={rowData}
                      columnDefs={columnDefs}
                      //  groupHeaderHeight={groupHeaderHeight}
                      //  headerHeight={headerHeight}
                      //  floatingFiltersHeight={floatingFiltersHeight}
                      //  pivotHeaderHeight={pivotHeaderHeight}
                      //  pivotGroupHeaderHeight={pivotGroupHeaderHeight}
                      rowSelection="single"
                    >
                  </AgGridReact> */}
                  <div className='table'>
                      <table className='transacz'>
                          <thead>
                              <tr>
                                  <th>Date</th>
                                  <th>Debit</th>
                                  <th>Credit</th>
                                  <th>Description</th>
                              </tr>
                          </thead>
                          <tbody>
                              {rowData.map((contact) =>( 
                                  <tr>
                                      <td>{contact.Date}</td>
                                      <td>{contact.Debit}</td>
                                      <td>{contact.Credit}</td>
                                      <td>{contact.Description}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
           
         </span>
      </div>
  );
};