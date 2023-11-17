import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Delivery } from "./pages/delivery";
import { Payment } from "./pages/payment";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Route>
    </Routes>
  );
}
