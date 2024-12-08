import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import User from "./pages/User";
import FrontendLayout from "./Components/layout/FrontendLayout";
import Login from "./Admin/login/login";
import AdminLayout from "./Admin/AdminCommon/AdminLayout";
import Dashboard from "./Admin/pages/Dashboard";
import CreateMasterCategory from "./Admin/pages/categories/CreateMasterCategory";
import AllMasterCategories from "./Admin/pages/categories/AllMasterCategories";
import AllCategories from "./Admin/pages/categories/AllCategories";
import CreateCategory from "./Admin/pages/categories/CreateCategory";
import AllSubCategories from "./Admin/pages/categories/AllSubCategories";
import CreateSubCategory from "./Admin/pages/categories/CreateSubCategory";
import AllSecondBanner from "./Admin/pages/banner/AllSecondBanner";
import CreateSecondBanner from "./Admin/pages/banner/CreateSecondBanner";
import AllFooterBanner from "./Admin/pages/banner/AllFooterBanner";
import CreateFooterBanner from "./Admin/pages/banner/createFooterBanner";
import AllBrands from "./Admin/pages/brands/AllBrands";
import CreateBrands from "./Admin/pages/brands/CreateBrands";
import EditBrands from "./Admin/pages/categories/EditBrands";
import EditCategory from "./Admin/pages/categories/EditCategory";
import EditMasterCategory from "./Admin/pages/categories/EditMasterCategory";
import EditSubCategory from "./Admin/pages/categories/EditSubCategory";
import EditMainBanner from "./Admin/pages/banner/EditMainBanner";
import EditSecondBanner from "./Admin/pages/banner/EditSecondBanner";
import EditFooterBanner from "./Admin/pages/banner/EditFooterBanner";
import AllProducts from "./Admin/pages/product/AllProducts";
import ProductDetails from "./Admin/pages/product/ProductDetails";



import CreateProduct from "./Admin/pages/product/CreateProduct";
import CreateMainBanner from "./Admin/pages/banner/CreateMainBanner";
import AllMainBanner from "./Admin/pages/banner/AllMainBanner";

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<FrontendLayout />} >
        <Route path="" element={<Home />} />{" "}
        <Route path="about" element={<About />} /> 
        <Route path="schedule" element={<Schedule />} /> 
        <Route path="User" element={<User/>}/> 
        </Route>
        <Route path="login" element={<Login />} />


        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="product-master-category">
            <Route index element={<AllMasterCategories />} />
            <Route path="create" element={<CreateMasterCategory />} />
            <Route path="edit/:id" element={<EditMasterCategory />} />
          </Route>

          {/* <Route path="profile" element={<Profile />} /> */}

          <Route path="product-category">
            <Route index element={<AllCategories />} />
            <Route path="create" element={<CreateCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
          </Route>

          <Route path="product-sub-category">
            <Route index element={<AllSubCategories />} />
            <Route path="create" element={<CreateSubCategory />} />
            <Route path="edit/:id" element={<EditSubCategory />} />
          </Route>

          <Route path="product">
            <Route index element={<AllProducts />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="view/:id" element={<ProductDetails />} />
          </Route>

          <Route path="brands">
            <Route index element={<AllBrands />} />
            <Route path="create" element={<CreateBrands />} />
            <Route path="edit/:id" element={<EditBrands />} />
          </Route>

          <Route path="banner">
            <Route path="main-banner">
              <Route index element={<AllMainBanner />} />
              <Route path="create" element={<CreateMainBanner />} />
              <Route path="edit/:id" element={<EditMainBanner />} />
            </Route>
            <Route path="second-banner">
              <Route index element={<AllSecondBanner />} />
              <Route path="create" element={<CreateSecondBanner />} />
              <Route path="edit/:id" element={<EditSecondBanner />} />
            </Route>
            <Route path="footer-banner">
              <Route index element={<AllFooterBanner />} />
              <Route path="create" element={<CreateFooterBanner />} />
              <Route path="edit/:id" element={<EditFooterBanner />} />
            </Route>
          </Route>

       


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
