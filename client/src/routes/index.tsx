import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Intropage from "../pages/intropage.tsx";

const AppRoutes: FC =  () => {
    return (
        <Routes>
            <Route path="/" element={<Intropage />} />
        </Routes>
    )
}

export default AppRoutes;