import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/graphics">Graphics</Link>
          </Button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
