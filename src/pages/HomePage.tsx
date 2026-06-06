import  Products  from '../Components/Product.tsx'
import Header from '../Components/Header.tsx';

function HomePage() {
  return (
    <>
    <Header/>
    <div className='Home-Container'>

      {
      Products.map((product) => (
        <div className="ProductCard" key={product.id}>
          <div className="img">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className='Product_Name'>
                 {product.name}
          </div>
        <div className='Product_Price'>
          <b>
<p> ${product.price}</p>
          </b>

        </div>
          
          <div className='Product_Rating-Container'>
         <div className='Prodict_Count'>
        
          <img src={`images/ratings/rating-${product.rating.stars *10}.png`}  alt="" />   
          {/* {product.rating.count} */}

         </div>

            
            
          </div>

          <div className="quantity">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <button type="submit" className="button">
            Add to Cart
          </button>
        </div>
      ))}
      </div>
    </>
    
  );
}

export default HomePage;