import './header.css';
import SearchIcon from '../assets/Images/Arrow.png'
import {Link} from 'react-router-dom'
import orders from '../pages/Orderspage.tsx'

function Header() {
  return (
    <>
    <div className="header">
        <title>Home page</title>
          <div className="left-section">
             <Link to='/' className='header-link'>
               <h2>Merkato Store</h2>
          </Link>
        </div>
        

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
        />

        <button className="search-button">
          <img src={SearchIcon} alt="SearchIcon" />
        </button>
      </div>


      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/Cart">
        <div >
<img  src="images\icons\cart-icon.png" alt="cart"/>
        </div>
        
          <div className="cart-quantity"> </div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
     </div>
    </>
  );

}

export default Header;