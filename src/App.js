import "./App.css";
import { RouterProvider } from "react-router-dom";
import {app_router} from "./utils/app_routes.js"


function App() {
  return <RouterProvider router={app_router} />;
}

export default App;
