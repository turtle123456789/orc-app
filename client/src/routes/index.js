import { createBrowserRouter } from "react-router-dom";
import ConvertPage from "../pages/ConvertPage/ConvertPage";
import DefaultPage from "../pages/DefaultPage/DefaultPage";
import HomePage from "../pages/HomePage/HomePage";

export const route = createBrowserRouter(
    [
        {
            path: "/",
            element: <DefaultPage/>,
            children: [
                {
                    path: "",
                    element: <HomePage/>,
                },
                {
                    path: "/convert",
                    element: <ConvertPage/>,
                }
            ]
        }
    ]
)