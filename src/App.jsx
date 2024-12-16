import "./App.css";
import createRoutes from "./Routes/appRoutes";
import { RouterProvider } from "react-router-dom";


function App() {

  return (
    <RouterProvider
      router={createRoutes}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;