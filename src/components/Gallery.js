import React from 'react';
import '../App.css';

export default function Gallery(){
    return(
        <div>


           <main>
	<table  className='j'>
	<thead>
		<tr>
			<th colSpan="4"> Gallery</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td><img title="Screen printing on tshirts" src="../images/photo_2020-11-14_17-03-27.jpg" alt=" logo"/> </td>
			<td> <img title="Designing of molds" src="../images/photo_2020-11-14_17-02-39.jpg" alt="the met logo"/> </td>
			<td><img title="Regular and diecut boxes" src="../images/photo_2020-10-29_04-27-56.jpg" alt="the met logo"/> </td>
			<td> <img title="Screen printing on plexiglasses" src="../images/photo_2020-10-29_04-27-49.jpg" alt="the met logo"/></td>
		</tr>
		<tr>
			<td>
				<h4>Screen printing</h4></td>
			<td>
				<h4>Designing molds</h4></td>
			<td>
				<h4>Boxes</h4></td>
			<td>
				<h4>Plexiglasses & Polycarbonates</h4></td>
		</tr>
		<tr>
			<td> <img title="Designing" src="../images/photo_2017-09-24_12-11-44.jpg" alt="the met logo"/></td>
			<td><img title="photo" src="../images/photo_2020-08-06_18-00-05.jpg" alt="the met logo"/></td>
			<td> <img title="Polycarbonate" src="../images/photo_2020-10-29_04-27-19.jpg" alt="the met logo"/></td>
			<td><img title="Industrial Screen Printing" src="../images/photo_2020-10-29_04-27-42.jpg" alt="the met logo"/></td>
		</tr>
		<tr>
			<td>
				<h4>Design boxes</h4></td>
			<td>
				<h4>Photo shoot</h4></td>
			<td>
				<h4>Embossing</h4></td>
			<td>
				<h4>Laser etching</h4></td>
		</tr>
		</tbody>
	</table>
	<div className="eight"> <img title="Scan me for more information about Designing" src="../images/pooya.jpg" alt="the met logo"/>
		<h4>Designing Department</h4> </div>
</main>
        </div> 
    );
}


