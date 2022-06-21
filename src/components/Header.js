import '../App.css';

// Header function component just the pamiran logo
export default function Header(props) {
    return (
      <div>    
         <header>
         <img id="logo" src="../images/logo1.jpg" alt="the pamiran logo" />
         <div id="banner">
         <img title="logo2" src="../images/cartonbarik.png" alt="the cart logo"/>
      </div>
         </header>
      </div>
   );
}