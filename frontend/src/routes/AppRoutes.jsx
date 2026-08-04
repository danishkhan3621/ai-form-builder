import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormBuilder from "../pages/FormBuilder/FormBuilder";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormBuilder />} />
            </Routes>
        </BrowserRouter>
    );
}