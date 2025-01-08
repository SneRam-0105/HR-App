import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import Form from "../pages/Forms/Form";
// import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import EmployeeDetailsPage from "../pages/SinglePage/SinglePage";

const createRoutes = () => {
    return createBrowserRouter(
        [
            {
                path: "/",
                element: <Root />,
                errorElement: <ErrorPage />,
                children: [
                    { path: "/employees", element: <List /> },
                    { path: "/employee/:id", element: <EmployeeDetailsPage /> },
                    { path: "/new", element: <Form /> },
                ],
            },
        ],
        {
            future: {
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                v7_skipActionErrorRevalidation: true,
            },
        }
    );
}

export default createRoutes;