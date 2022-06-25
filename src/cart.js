import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Cartitems({data,handleRemove}){
  
      return(
            
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{data.title}</div>
                        ${data.price}
                      </div>
                      <span onClick={() => handleRemove(data.id)} className="badge bg-danger rounded-pill">X</span>
                    </li>
                    
                 
      )
}

export default Cartitems