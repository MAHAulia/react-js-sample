import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/Profile/Profile";
import InlineCss from "../pages/CssPage/InLIneCss";
import ExternalCss from "../pages/CssPage/ExternalCss";
import MaterialUiPage from "../pages/MaterialUi/MaterialUi";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'profile',
        element: <Profile />
    },
    {
        path: 'in-line-css',
        element: <InlineCss />
    },
    {
        path: 'external-css',
        element: <ExternalCss />
    },
    {
        path: 'material-ui',
        element: <MaterialUiPage />
    }
])

export default router