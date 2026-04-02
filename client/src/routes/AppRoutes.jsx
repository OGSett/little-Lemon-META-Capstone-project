import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;