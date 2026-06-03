import  Products  from './Product'

function ProductCard() {
  return (
    <>
      {Products.map((product) => (
        <div className="ProductCard" key={product.id}>
          <div className="img">
            <img src={product.image} alt={product.name} />
          </div>

          <hr />

          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>

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
    </>
  );
}

export default ProductCard;