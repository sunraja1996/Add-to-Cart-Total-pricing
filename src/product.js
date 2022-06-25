
function Product({data, handleAddtoCart,cartitems}){

      return(
            <div className="col mb-5">
                  <div className="card h-100">
      
                       
                               
                  <img className="card-img-top" src={data.image} alt="..." />
                  <hr/>
                  
                  <div className="card-body p-4">
                      <div className="text-center fw-bolder ">
                          
                          <h5 className="fw-bolder">{data.title}</h5>
                          $<span>{data.price}</span>
                      </div>
                  </div>
                  
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        
                        <button disabled={cartitems.some(obj => obj.id === data.id)} onClick={() => handleAddtoCart(data.id)} className="btn btn-danger mt-auto">Add to cart</button>
                        </div>
                  </div> 
              </div> 
              </div>   
                
            
               
      )
}

export default Product