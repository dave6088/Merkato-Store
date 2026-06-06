
import HomePage  from "./pages/HomePage"
import {Routes,Route} from 'react-router-dom'
import Orderpage from "./pages/Orderspage"
import CartPage from "./pages/CartPage"
function App() {
  
  return(
    <div>
      
      <Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path="orders" element={<Orderpage/>}></Route>
<Route path="Cart" element= {<CartPage/>}> </Route>


      </Routes>
     
    
    </div>
    )
  

    
  
}

export default App
