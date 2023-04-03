import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parking from "./Parking";
import ParkingLot from "./ParkingLot";
import Context from "./Context";
import PaymentPage from "./PaymentPage";
const Routing = () => {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/CarparkingApp/" element={<Parking />} />
            <Route path="/CarparkingApp/parkinglot" element={<ParkingLot />} />
            <Route
              path="/CarparkingApp/paymentPage"
              element={<PaymentPage />}
            />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
};

export default Routing;
