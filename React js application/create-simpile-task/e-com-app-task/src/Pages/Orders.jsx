export default function Orders() {
  const orders = [
    { id:1, products:["Laptop","Mouse"], total:50800, status:"Delivered" },
    { id:2, products:["Smartphone","Headphones"], total:22000, status:"Pending" },
    { id:3, products:["Chair","Table"], total:11500, status:"Shipped" },
  ]

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((o)=>(
        <div key={o.id}>
          <p>Order #{o.id} - {o.status}</p>
          <p>Products: {o.products.join(", ")}</p>
          <p>Total: ₹{o.total}</p>
        </div>
      ))}
    </div>
  )
}
