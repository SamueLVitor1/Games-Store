import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Delivery } from "./pages/delivery";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery/>}/>
      </Route>
    </Routes>
  );
}
