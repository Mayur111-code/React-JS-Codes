import { useParams, useNavigate } from "react-router-dom"
import products from "../data/products"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) return <h2>Product not found</h2>

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} width="200" />
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
      {product.stock ? <p>In Stock</p> : <p style={{color:"red"}}>Out of Stock</p>}
      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  )
}
