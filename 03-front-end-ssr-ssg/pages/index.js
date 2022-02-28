function App({users}) {
  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}

export const getServerSideProps = async () => {
  const headers = new Headers();

  headers.append('Accept', 'application/json');
  const response = await fetch('http://localhost:3333/users', { headers });
  const data = await response.json();
  return {
    props: {
      users: data.data,
    },
  };

};

export default App;
