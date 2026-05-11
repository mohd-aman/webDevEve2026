export default function ProductList({products}){
    // console.log(products);
    const handleAddToCart = (name,price)=>{
        console.log(`Product Name is ${name}, Price is ${price}$`)
    }
    return (
      <ul className="product-list-container">
        {products.map(({ id, name, price }) => {
          return (
            <li key={id} className="product-container">
              <div>
                {name} - {price}
              </div>
              <button onClick={()=>handleAddToCart(name,price)}>Add to Cart</button>
            </li>
          );
        })}
      </ul>
    );
}