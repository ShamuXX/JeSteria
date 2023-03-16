import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Graphics from "./pages/Graphics";

export default function App() {
  return (
    <div>
      <Login />
    </div>

    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="graphics" element={<Graphics />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>*/
  );
}
/* root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root")); */
