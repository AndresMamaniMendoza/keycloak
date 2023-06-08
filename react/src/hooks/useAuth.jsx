// // import React, { useState, useEffect, useRef } from "react";
// // import Keycloak from "keycloak-js";

// // const client = new Keycloak({
// //   // url: import.meta.env.VITE_KEYCLOAK_URL,
// //   // realm: import.meta.env.VITE_KEYCLOAK_REALM,
// //   // clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
// //   url: 'http://127.0.0.1:4000/',
// //   realm: 'myrealm',
// //   clientId: 'myclient',
// // });

// // const useAuth = () => {
// //   const isRun = useRef(false);
// //   const [token, setToken] = useState(null);
// //   const [isLogin, setLogin] = useState(false);

// //   useEffect(() => {
// //     if (isRun.current) return;

// //     isRun.current = true;
// //     client
// //       .init({
// //         onLoad: "login-required",
// //       })
// //       .then((res) => {
// //         setLogin(res);
// //         setToken(client.token);
// //       });
// //   }, []);

// //   return [isLogin, token];
// // };

// // export default useAuth;


// import React, { useState, useEffect, useRef } from "react";
// import Keycloak from "keycloak-js";

// const client = new Keycloak({
//   url: 'http://127.0.0.1:4000/',
//   realm: 'myrealm',
//   clientId: 'myclient',
// });

// const useAuth = () => {
//   const isRun = useRef(false);
//   const [token, setToken] = useState(null);
//   const [isLogin, setLogin] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (isRun.current) return;

//     isRun.current = true;
//     client
//       .init({
//         onLoad: "login-required",
//       })
//       .then((authenticated) => {
//         setLogin(authenticated);
//         setToken(client.token);

//         if (authenticated) {
//           client.loadUserProfile().then((profile) => {
//             setUser(profile);
//           });
//         }
//       });
//   }, []);

//   return [isLogin, token, user];
// };

// export default useAuth;

import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
  url: 'http://127.0.0.1:4000/',
  realm: 'myrealm',
  clientId: 'myclient',
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({
        onLoad: "login-required",
      })
      .then((authenticated) => {
        setLogin(authenticated);
        setToken(client.token);

        if (authenticated) {
          client.loadUserProfile().then((profile) => {
            setUser(profile);
          });
        }
      });
  }, []);

  const logout = () => {
    client.logout();
  };

  return [isLogin, token, user, logout];
};

export default useAuth;