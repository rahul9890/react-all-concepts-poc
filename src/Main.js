import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AddUser from "./UserCURD/AddUser";

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/adduser" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
