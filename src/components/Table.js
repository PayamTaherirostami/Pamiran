import {React, useEffect, useState} from 'react';
import '../Table.css';

const Table=() =>{

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetch('https://api-pamiran.herokuapp.com/employee')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);    
return <div className='table'>
    <table className='emplo'>
        <thead>
            <tr>
                <th>Email</th>
                <th>First_Name</th>
                <th>Balance</th>
                <th>Status</th>

            </tr>
        </thead>
        <tbody>
            {rowData.map((contact) =>( 
                <tr>
                <td>{contact.Email}</td>
                <td>{contact.First_Name}</td>
                <td>{contact.Balance}</td>
                <td>{contact.Status}</td>

            </tr>
            ))}

        </tbody>
    </table>

</div>

}
export default Table;