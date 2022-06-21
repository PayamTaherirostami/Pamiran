import React from 'react'
import { useState,useEffect} from 'react';
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid' ;
import interactionPlugin ,{DateClickArg} from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import momentPlugin from '@fullcalendar/moment';
// import { Calendar } from '@fullcalendar/core';

export default function Calendar () {
  const [rowData, setRowData] = useState('');
  const [sts, setSts] = useState('  روز');
  const [values, setValue] = useState('Pending');
  const [orderId,setID]=useState('');
  const [backgroundColor,setOrdColor]=useState('')

  useEffect(() => {
        
    fetch('https://api-pamiran.herokuapp.com/orderCal')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
   
 
  }
  , []);
// console.log(rowData)
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
  const handleClick=(arg)=>{
    alert(arg.event.extendedProps.status)
   
   
  }
  var today = new Date()
  var d1 = today.getTime();
  var one_day=1000*60*60*24;
  const toDo = (DateClickArg) => {
  // if(KeyboardEvent.altKey){
    
    const date= DateClickArg.date
    const d2= date.getTime();
    const dif= d1-d2
    const answer=  Math.round(dif/one_day); 
    // if ( answer<0){
    //   setSts("   روز کذشته ")
    // }else{
    //   setSts("  روز مانده ")
    // }
    // console.log(answer)
    alert(answer.toString()+sts)
    // setSts("")
  // }
    
  }

    return (
      <div className='calendar'>
                {/* <form className="Account">
               
               <fieldset>
                   <legend>Change the order Status</legend>
                   
                       <select value={values} onChange={onChange}>
                           {options.map(item => {
                               return (<option key= {item.id} value={item.Name}>{item.Name}</option>);
                           })}
                       </select>
                   
           </fieldset>
       </form> */}
      <FullCalendar 
        plugins={[ dayGridPlugin, momentPlugin ,interactionPlugin, timeGridPlugin, listPlugin ] }  

        editable={true}
       initialView="dayGridMonth"
       timeZone= 'UTC'
       events={rowData}
       droppable= {true}
       locales= {[ esLocale ]}
       locale= 'en'
      //  eventColor= 'white'
       eventClick={handleClick}
       eventTextColor= 'white'
       dateClick={toDo}
      //  eventContent={renderEventContent}
// weekends={false}
      // titleFormat= 'dddd, MMMM D, YYYY'
       />
       </div>
    )
}
