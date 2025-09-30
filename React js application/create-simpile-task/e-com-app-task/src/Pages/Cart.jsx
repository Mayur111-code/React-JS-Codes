export default function Cart() {
  const cart = [] // later can fill with products

  if (cart.length === 0) {
    return <h3>Your cart is empty</h3>
  }

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}
