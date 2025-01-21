
import createRoutes from "./Routes/appRoutes";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const router = createRoutes(isLoggedIn, loginHandler);

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;