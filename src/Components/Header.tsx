import './header.css';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
    <div className="header">
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
          
        </button>
      </div>


      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/Checkout">
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
     </div>
    </>
  );

}

export default Header;