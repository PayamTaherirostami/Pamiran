import React from 'react'; 
import '../App.css';


export default function Author(){ 

    return(
		<div id="wrapper22">
        	<div className='author'>
				<h1>Welcome to My Portal Page!</h1>
				<img id="payam" src="../images/photo1.jpg" alt="Hi"/>
				<p></p>
				<p> Hello, my name is Payam Taherirostami. I was born in Iran in 1983. I came to United States in 2013. I have several degrees and certificates in
					 <i> Agriculture machines, Industrial Management, General Packaging, Graphic Designing, Accounting and Bookkeeping
					</i>  and <b> Application Development
					</b> at North Seattle College.
				</p>
				<p>
					I established my own company in Iran in 2005. The company's field is about printing and packaging. We make customized printed boxes and also print on all kinds of flat material such as
					 <i> glass, polycarbonate, Iron, PVC, and etc.
					</i>
				</p>
				<p>The company's name is Pamiran Industries. Please click 
					<i><u><a href="http://pamiranindustries.com/"> here</a></u></i> for more information
				</p>
				<h3> My Hobbies</h3>
				<p></p>
				<ul>
					<li> - Skiing</li>
					<li> - Hiking</li>
					<li> - Swimming</li>
					<li> - Playing basketball</li>
					<li> - Watching <i>comedy</i> movies with my family</li>
				</ul>
				<p></p>
				<hr></hr>
				<p></p>
				<p>
					" Educating the mind without educating the heart in no education
					<strong> at all</strong>."
				</p>
				<blockquote> -Aristotle </blockquote>
				<hr></hr>
				<a title="Click here to see our Linkedin page!"   href="https://www.linkedin.com/in/payamtaherirostami"> <img id="link" src="../images/Linkedin.png" className="center" alt="Linkedin"/></a>
				<a title="Click here to see my GitHub!"           href="https://github.com/PayamTaherirostami?tab=repositories"> <img id="git" src="../images/git2.png" className="center" alt="Github"/></a>
				<a title="Click here to see our Youtub page!"     href="https://www.youtube.com/channel/UCVKtohJFsajBe2GWNfDC7ig"> <img id="you" src="../images/you.jpg.png" className="center" alt="youtub"/></a>
				<a title=" Click here to see our Instagram page!" href="https://www.instagram.com/pamiranindustries/"> <img id="insta" src="../images/insta.png" className="center" alt="insta"/></a>
        	</div>
		</div>
    );
}