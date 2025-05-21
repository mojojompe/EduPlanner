import { router } from "expo-router";
import { Route } from "expo-router/build/Route";
import { Router } from "express";
import Login from "./Pages/Login";

export const Routes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/Pages/Login.js" element={<Login/>} />
            </Routes>
        </Router>
    )
}