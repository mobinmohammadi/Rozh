import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";
import store from "./store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="font-Dana">
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </StrictMode>,
);
