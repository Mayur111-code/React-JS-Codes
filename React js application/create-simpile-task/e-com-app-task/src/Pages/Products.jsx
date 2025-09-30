import { useNavigate } from "react-router-dom"
import products from "../data/products"

export default function Products() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="text-center">
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.category}</p>
          <button onClick={() => navigate(`/products/${p.id}`)} className="btn btn-warning w-20 m-auto">View Details</button>
        </div>
        
      ))}
    </div>
    </div>
  )
}
