import { Outlet } from "react-router-dom";
import Home from "./assets/Page/Home";

export default function App() {
  return (
    <div className="font-Dana w-full overflow-x-hidden min-h-screen bg-white">
      <Outlet /> 

    </div>
  );
}