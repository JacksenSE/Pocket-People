import React from 'react'
import Nav from '../components/Nav';
function Products() {
  const products = [

  {
    id: 1,
    name: 'Chicken Wings',
    Image:
      'https://images.unsplash.com/photo-1585703900468-13c7a978ad86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    Description: '900-1300',
  },
    {
      id: 2,
      name: "Ribs",
      Image:
        "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      Description: "900-1300",
    },
    {
      id: 3,
      name: "Chicken",
      Image:
        "https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      Description: "900-1300",
    },
    {
      id: 4,
      name: "BBQ Ribs",
      Image:
        "https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      Description: "900-1300",
    },
    {
      id: 5,
      name: "Chicken Platter",
      Image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
      Description: "900-1300",
    },
    {
      id: 6,
      name: "Tiny Ribs",
      Image:
        "https://images.unsplash.com/photo-1589895224610-5ae4b4a899ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
      Description: "900-1300",
    },
  ];


  const handleProducts = (productId) => {
  
  console.log(`Product clicked: ${productId}`);
};

return (
  <div>
    <div className='Nav'>
    <Nav/>
    </div>
  <div>
    <p className="productsH">Our Products</p>
  </div>
  <div className="productsL">
    {products.map((product) => (
      <div className="productCard" key={product.id} onClick={() => handleProducts(product.id)}>
        <img src={product.Image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.Description}</p>
      </div>
    ))}
  </div>
</div>
)}
export default Products;