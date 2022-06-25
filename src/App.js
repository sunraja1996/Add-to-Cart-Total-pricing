import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useState } from 'react';
import Cartitems from './cart.js';
import Product from './product.js'


function App() {
    const [productdetails,setproductdetails ]= useState ([
        {
              id : 1,
              title : "iPhone 11",
              image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone-11-202108?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646502984732",
              price : 599,

        },
        {
              id : 2,
              title : "iPhone 13",
              image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646335268199",
              price : 799,

        },
        {
              id : 3,
              title : "iPhone 13 Pro",
              image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1644989935267",
              price : 999,

        },
        {
              id : 4,
              title : "iPhone 12",
              image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone12purple-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646335268265",
              price : 899,

        },
        {
              id : 5,
              title : "Samsung A8",
              image : "https://images.samsung.com/is/image/samsung/p6pim/my/sm-x200nidaxme/gallery/my-galaxy-a8-sm-x200-sm-x200nidaxme-thumb-532081628?$240_240_PNG$",
              price : 499,

        },
        {
              id : 6,
              title : "Xiaomi Pad 5",
              image : "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-pad-5/section01.jpg",
              price : 699,

        },
        {
              id : 7,
              title : "Lenovo Yoga",
              image : "https://www.lenovo.com/medias/Yoga-9-SS-Hero-Evo.png?context=bWFzdGVyfHJvb3R8NzMxNjN8aW1hZ2UvcG5nfGg5Ny9oZGYvMTI1MTM5NjIxOTcwMjIucG5nfDE4OTUyYWUzZTc2MTJmYjc0ZTdmOTIyZWY0ZWM1OWQ1MTA1ZjJhYmZlOGY1ZmQzMmIzZGRlOGU0NGY2NTc5NDE",
              price : 399,

        },
        {
              id : 8,
              title : "iPad mini",
              image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-202109?wid=540&hei=530&fmt=jpeg&qlt=95&.v=1631751017000",
              price : 899,
        }
        
  ]);

  

  const [cartitems, setCartitems] = useState ([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  let handleAddtoCart = (id) => {
    const productIndex = productdetails.findIndex(obj => obj.id === id);
    const pro = productdetails[productIndex];
    setCartitems([...cartitems,pro]);
    setTotal(total + pro.price)
    setCount(count + 1);
  }
  let handleRemove = (id) => {
    const cartitemIndex = cartitems.findIndex(obj => obj.id === id);
    setTotal(total - cartitems[cartitemIndex].price);
    setCount(count - 1);
    
    cartitems.splice(cartitemIndex,1);
    setCartitems([...cartitems]);
  }
  
  return ( 
  <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start eCommerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <ol className="list-group list-group-numbered">
                                <li>iPhones</li>
                                <li>iPads</li>
                                <li>Samsung</li>
                                <li>Xiaomi</li>
                                <li>Lenovo</li>
                                </ol></ul>
                            
                        </li>
                    </ul>
                    <form className="d-flex">
            <li className="nav-item dropdown list-group-item">
                <a className="btn btn-danger dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <a> {count} </a>
                    Cart
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <ol className="list-group list-group-numbered">

                    {
                    cartitems.map((item) => {
                        return <Cartitems data={item} handleRemove={handleRemove}/>
                    })
                    }
                    <button type="button" class="btn btn-warning">Check Out</button>
                    </ol>
                    
                    </ul>
                    
                    </li> 
                    
                    
                    </form>
                   
                    <h6 className="text-uppercase text-danger font-weight-bold">Total : ${total}</h6>
                </div>
            </div>
        </nav>
  <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">The One-stop Shopping Destination. E-commerce is revolutionizing the way we all shop in India.</p>
                </div>
            </div>
        </header> 

        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                productdetails.map((pro) => {
                return (
                       <Product cartitems={cartitems} data={pro} handleAddtoCart={handleAddtoCart}/> 
                       ) 
            })
            }
                   
                    </div>
                    </div>
                    </section>
                    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Start eCommerce 2022</p></div>
        </footer>

  </>

  );
}

export default App;
