import { useEffect, useState } from 'react';

//SPA
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const headers = new Headers();

    headers.append('Accept', 'application/json');

    fetch('http://localhost:3334/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      });
  });

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}

export default App;
