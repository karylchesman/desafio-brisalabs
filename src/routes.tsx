import {
    Routes,
    Route
} from "react-router-dom";
import { PrivateRoute } from "./helpers/PrivateRoute";

import { Favoritos } from "./pages/Favoritos";
import { Login } from "./pages/Login";
import { Search } from "./pages/Search";
import { Todos } from "./pages/Todos";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/favoritos" element={<PrivateRoute><Favoritos /></PrivateRoute>} />
            <Route path="/procurar" element={<PrivateRoute><Search /></PrivateRoute>} />
            <Route path="/todos" element={<PrivateRoute><Todos /></PrivateRoute>} />
        </Routes>
    );
}