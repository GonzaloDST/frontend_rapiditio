import React, { useEffect, useState } from "react";

const API_URL = "http://lb-prod-55563764.us-east-1.elb.amazonaws.com:8000/users"; // Endpoint de users

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>Maki Users</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <b>ID:</b> {user.id} | <b>Username:</b> {user.username} | <b>Email:</b> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;