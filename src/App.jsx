import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";
import { Toaster } from "sonner";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CollectionPage from "./Pages/CollectionPage";
import ProductDetails from "./Components/Products/ProductDetails";
import Checkout from "./Components/Cart/Checkout";
import OrderConfirmationPage from "./Pages/OrderConfirmationPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import MyOrderPage from "./Pages/MyOrderPage";
import AdminLayout from "./Components/Admin/AdminLayout";
import AdminHomePage from "./Components/Admin/AdminHomePage";
import UserManagement from "./Components/Admin/UserManagement";
import ProductManagement from "./Components/Admin/ProductManagement";
import EditProductPage from "./Components/Admin/EditProductPage";
import OrderManagement from "./Components/Admin/OrderManagement";
import FloorPlanShowcase from "./Components/Category/FloorPlanShowcase";
import FloorPlanShowcasefif from "./Components/Category/FloorPlanShowcasefif";
import FloorPlanShowcaseff from "./Components/Category/FloorPlanShowcaseff";
import FloorPlanShowcasefal from "./Components/Category/FloorPlanShowcasefal";
import FloorPlanShowcasesp from "./Components/Category/FloorPlanShowcasesp";
import { PrivacyPolicy, RefundPolicy, TermsOfService } from "./Pages/PolicyLayout";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  return (
    <div>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            {/*User Layout*/}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collections/:collection" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetails />}/>
            <Route path="checkout" element={<Checkout />}/>
            <Route path="order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="my-orders" element={<MyOrderPage />} />
            <Route path="ufpage" element={<FloorPlanShowcase />} />
            <Route path="fifpage" element={<FloorPlanShowcasefif />} />
            <Route path="ffpage" element={<FloorPlanShowcaseff />} />
            <Route path="faipage" element={<FloorPlanShowcasefal />} />
            <Route path="sppage" element={<FloorPlanShowcasesp />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} /> 
            <Route path="refund-policy" element={<RefundPolicy />} /> 
            <Route path="contact" element={<ContactPage />} />
          </Route>
          
          <Route path="/admin" element={<AdminLayout />}>
            {/*Admin Layout*/}
            <Route index element={<AdminHomePage />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
