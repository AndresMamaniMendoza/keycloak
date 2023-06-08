import Protected from "./components/Protected";
import Public from "./components/Public";

import useAuth from "./hooks/useAuth";

function App() {
  const [isLogin, token, user, logout ] = useAuth();

  const handleLogout = () => {
    logout();
  };

  return <>
  <button onClick={()=>console.log(user)}>User</button>
  <button onClick={()=>console.log(token)}>Token</button>
  <button onClick={()=>console.log(isLogin)}>isLogin</button>
  <button onClick={handleLogout}>Cerrar sesión</button>
  {isLogin ? <Protected token={token} /> : <Public />}</>;
}

export default App;
