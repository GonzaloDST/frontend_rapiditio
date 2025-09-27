import React, { useEffect, useState } from "react";

const API_URL = "http://<LOAD_BALANCER_DNS>:8000/orders"; // Cambia esto por tu endpoint real

function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>Maki Orders</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <b>ID:</b> {order.id} | <b>Producto:</b> {order.product_name} | <b>Cantidad:</b> {order.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;