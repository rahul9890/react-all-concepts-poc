import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AddUser from "./UserCURD/AddUser";
import ShowUser from "./UserCURD/ShowUser";

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
                      <Route path="/adduser" element={<AddUser />} />
                      <Route path="/showuser" element={<ShowUser/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
