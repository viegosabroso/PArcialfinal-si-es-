import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";

import routes from "./Navigation/Navigation.tsx";
import PoemsContext from "./contexts/contex.tsx";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        
        <RouterProvider router={routes}>
        </RouterProvider>
       
    </Provider>

);
