import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-white">
          <div className="container flex justify-between items-center mx-auto my-2 px-2">
            <a href="/">
              <Logo />
            </a>
            <nav>
              <ul className="flex gap-5 justify-between items-center mx-3 font-Archivo_Narrow text-sm md:text-md">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                  >
                    <button className="bg-ForestGreen font-Archivo_Narrow px-6 py-1 text-white font-medium rounded-full text-sm md:text-md">
                      Login
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                  >
                    <div className="relative">
                      <img
                        src="/assets/cart.png"
                        alt="Cart"
                        className="bg-white p-1 object-cover min-w-full min-h-full"
                      />
                      <div className=" bg-DarkTeal rounded-[100%] px-2 aspect-square absolute -top-2 -right-2 text-xs text-center">
                        3
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/products" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
