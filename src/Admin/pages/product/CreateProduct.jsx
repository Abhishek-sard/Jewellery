import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiListBulletsBold } from "react-icons/pi";
import RichTextEditor from "../../../components/RichTextEditor";
import { useDispatch, useSelector } from "react-redux";
import { getFooterBannerDropDown, getSecondBannerDropDown } from "../../../Redux/Slice/bannerSlice";
import { categoryDropDown, subCategoryDropDown } from "../../../Redux/Slice/categorySlice";
import { brandsDropdown } from "../../../Redux/Slice/brandSlice";
// import { createproduct } from "../../../Redux/Slice/productSlice";
import toast from "react-hot-toast";
import { postProduct } from "../../../Redux/Slice/productSlice";
import { getSuitableForDropDown } from "../../../Redux/Slice/suitableForSlice";
import {  getUnitsDropDown } from "../../../Redux/Slice/unitSlice";

const CreateProduct = () => {
  // Dummy categories and subcategories
  const [secondBanners, setSecondBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [footerBanners, setFooterBanners] = useState([]);
  const {suitableFor,isLoading} = useSelector((state) => state.suitableFor)
const {units,isLoading:unitsloading} = useSelector((state) => state.unit) 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDropDownData = async () => {
      try {
        const response = await dispatch(getSecondBannerDropDown());
        console.log(response)
        if (response?.payload?.success) {
          setSecondBanners(response.payload.data);
        }
        const response2 = await dispatch(categoryDropDown());
        if (response2?.payload?.success) {
          setCategories(response2.payload.data);
          console.log({ categories: response2.payload.data })
        }
        const response3 = await dispatch(brandsDropdown());
        if (response3?.payload?.success) {
          setBrands(response3.payload.data);
        }
        const response4 = await dispatch(subCategoryDropDown());
        if (response4?.payload?.success) {
          setSubCategories(response4.payload.data);
          console.log({ subCategories: response4.payload.data })
        }
        const response5 = await dispatch(getFooterBannerDropDown());
        if (response5?.payload?.success) {
          setFooterBanners(response5.payload.data);
        }


      } catch (error) {
        toast.error('Error fetching data');
        console.error('Error fetching second banners:', error);
      }
      dispatch(getSuitableForDropDown());
      dispatch(getUnitsDropDown());

    }
    fetchDropDownData();
  }, [])


  const [formData, setFormData] = useState({
    product_name: "",
    category_id: "",
    brand_id: "",
    unit_id: "",
    unit_amount: "",
    price: "",
    stock: "",
    subcategory_id: "",
    description: "",
    is_active: true,
    is_top_search: false,
    is_hot_sales: false,
    is_prescription: false,
    prescription_desc: null,
    suitable_for_id: "",
    discount_amount: 0,
    discount_percent: 0,
    discount_type: "amount",
    is_best_seller: false,
    second_banner_id: "",
    discount_start_date: null,
    discount_end_date: null,
    footer_banner_id: "",
    images: null,
    is_basic_medicine: true,
    disclaimer: "",
  });

  const [is_discounted, setIs_discounted] = useState(false);
  // is_discounted: false,
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: Array.from(files) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();

    // Append fields from formData to FormData
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null &&
        formData[key] !== undefined &&
        formData[key] !== 0 &&
        !(key.startsWith('is_') && formData[key] === false) &&
        key !== 'images') {
        productData.append(key, formData[key]);
      }
    });

    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((image, index) => {
        productData.append(`images`, image);
      });
    } else {

    }
    for (let pair of productData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    res = 0
    // const res = await dispatch(postProduct({ productData }));
    console.log(res)
    if (res?.payload?.success) {
      toast.success(res.payload.message);
      navigate('/admin/product');

    } else {
      toast.error(res?.payload?.message || "error occoured");
    }
  };

  return (
    <>
      <div className="cardHead">
        <h2 className="text-3xl font-semibold text-[#34395E]">Create Product</h2>
      </div>
      <div className="bg-white p-6 shadow-md rounded-md">
        <Link
          to="/admin/product"
          className="bg-blue-500 w-fit text-white py-2 px-4 flex items-center gap-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
        >
          <PiListBulletsBold /> Products
        </Link>
        <form onSubmit={handleSubmit} className="space-y-4 px-8 shadow-lg">
          {/* Product Name */}
          <div className="flex flex-col">
            <label htmlFor="product_name" className="text-sm font-semibold mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              value={formData.product_name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
          </div>


          {/* Brand */}
          <div className="flex flex-col">
            <label htmlFor="brandId" className="text-gray-700 text-sm my-1 font-semibold">
              Brand <span className="text-red-500"> *</span>
            </label>
            <select
              id="brand_id"
              name="brand_id"
              value={formData.brand_id}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a Brand</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.brand_name}
                </option>
              ))}
            </select>
          </div>


          {/* Sub Category */}
          <div className="flex flex-col">
            <label htmlFor="subcategory_id" className="text-sm font-semibold mb-1">
              Subcategory
            </label>
            <select
              id="subcategory_id"
              name="subcategory_id"
              value={formData.subcategory_id}
              onChange={(e) => {
                const selectedSubcategoryId = e.target.value;
                const selectedSubcategory = subCategories.find(
                  (subcategory) => subcategory.id === parseInt(selectedSubcategoryId)
                );

                setFormData({
                  ...formData,
                  subcategory_id: selectedSubcategoryId,
                  category_id: selectedSubcategory?.category_id || "",
                });
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Subcategory</option>
              {subCategories.map((subcategory) => (
                <option key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label htmlFor="categoryId" className="text-gray-700 text-sm my-1 font-semibold">
              Category <span className="text-red-500"> *</span>
            </label>
            <select
              id="categoryId"
              name="category_id"
              value={formData.category_id}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {/* suitable for */}
          <div className="flex flex-col">
            <label htmlFor="quantity_type" className="text-sm font-semibold mb-1">
              Suitable for <span className="text-red-500">*</span>
            </label>
            <select
              id="suitable_for_id"
              name="suitable_for_id"
              value={formData.suitable_for_id}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Array.isArray(suitableFor) && suitableFor.map((suitable) => (
                <option key={suitable.id} value={suitable.id}>
                  {suitable.name}
                </option>
              ))}
              {/* <option value="">Select a condition</option>
              <option value="1">skin</option>
              <option value="2">Diabeties</option> */}
            </select>

          </div>





          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-semibold mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
          </div>







          {/* disclaimer */}
          <div className="flex flex-col">
            <label htmlFor="disclamer" className="text-sm font-semibold mb-1">
              Disclaimer <span className="text-red-500"></span>
            </label>
            <input
              type="text"
              id="disclaimer"
              name="disclaimer"
              value={formData.disclaimer}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
          </div>

          {/* Discount */}
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="is_discounted"
              name="is_discounted"
              checked={is_discounted}
              onChange={() => setIs_discounted(!is_discounted)}
              className="form-checkbox"
            />
            <label htmlFor="is_discounted" className="text-sm">
              Is Discounted
            </label>
          </div>

          {is_discounted && (
            <>
              {/* Toggle between Discount Amount and Discount Percent */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="discount_amount"
                    name="discount_type"
                    value="amount"
                    checked={formData.discount_type === "amount"}
                    onChange={() =>
                      setFormData({ ...formData, discount_type: "amount", discount_percent: 0 })
                    }
                    className="form-radio"
                  />
                  <label htmlFor="discount_amount" className="text-sm">
                    Discount Amount
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="discount_percent"
                    name="discount_type"
                    value="percent"
                    checked={formData.discount_type === "percent"}
                    onChange={() =>
                      setFormData({ ...formData, discount_type: "percent", discount_amount: 0 })
                    }
                    className="form-radio"
                  />
                  <label htmlFor="discount_percent" className="text-sm">
                    Discount Percent
                  </label>
                </div>
              </div>

              {/* Discount Input */}
              {formData.discount_type === "amount" ? (
                <div className="flex flex-col mb-4">
                  <label htmlFor="discount_amount" className="text-sm font-semibold mb-1">
                    Discount Amount <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="discount_amount"
                    name="discount_amount"
                    value={formData.discount_amount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : (
                <div className="flex flex-col mb-4">
                  <label htmlFor="discount_percent" className="text-sm font-semibold mb-1">
                    Discount Percent <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="discount_percent"
                    name="discount_percent"
                    value={formData.discount_percent}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {/* Discount Dates */}
              <div className="flex flex-col mb-4">
                <label htmlFor="discount_start_date" className="text-sm font-semibold mb-1">
                  Discount Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="discount_start_date"
                  name="discount_start_date"
                  value={formData.discount_start_date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="discount_end_date" className="text-sm font-semibold mb-1">
                  Discount End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="discount_end_date"
                  name="discount_end_date"
                  value={formData.discount_end_date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* {quantity type dropdown} */}
          <div className="flex flex-col">
            <label htmlFor="quantity_type" className="text-sm font-semibold mb-1">
              Quantity Type <span className="text-red-500">*</span>
            </label>
            <select
              id="unit_id"
              name="unit_id"
              value={formData.unit_id}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Array.isArray(units) &&units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.unit_name}
                </option>
              ))
              }
            </select>

          </div>




          {/* Quantity (ML) */}
          <div className="flex flex-col">
            <label htmlFor="ml" className="text-sm font-semibold mb-1">
              Unit Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="unit_amount"
              name="unit_amount"
              value={formData.unit_amount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
          </div>

          {/* Stock */}
          <div className="flex flex-col">
            <label htmlFor="stock" className="text-sm font-semibold mb-1">
              Stock <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
          </div>



          {/* Product Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-semibold mb-1">
              Product Description <span className="text-red-500">*</span>
            </label>
            <RichTextEditor
              value={formData.description}
              onChange={(value) => setFormData({ ...formData, description: value })}
              name="description"

            />

          </div>

          <div className="flex flex-col">
            <label
              htmlFor="images"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Upload Images
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
          </div>
          {/* second banner */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-semibold mb-1">
              second  banner
            </label>
            <select name="second_banner_id"
              onChange={handleInputChange}
              value={formData.second_banner_id}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="">
              <option value="">Select second Banner</option>
              {secondBanners.map((banner) => (
                <option key={banner.id} value={banner.id}>
                  {banner.title}
                </option>
              ))}
            </select>
          </div>
          {/* footer banner */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-semibold mb-1">
              footer  banner
            </label>
            <select name="footer_banner_id"
              onChange={handleInputChange}
              value={formData.footer_banner_id}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="">
              <option value="">Select footer Banner</option>
              {footerBanners.map((banner) => (
                <option key={banner.id} value={banner.id}>
                  {banner.title}
                </option>
              ))}
            </select>
          </div>

          {/* Checkbox fields for additional options */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_active"
                name="is_active"
                checked={formData.is_active}
                onChange={handleInputChange}
                className="form-checkbox"
              />
              <label htmlFor="is_active" className="text-sm">
                Active
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_top_search"
                name="is_top_search"
                checked={formData.is_top_search}
                onChange={handleInputChange}
                className="form-checkbox"
              />
              <label htmlFor="is_top_search" className="text-sm">
                Top Searched Product
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_hot_sales"
                name="is_hot_sales"
                checked={formData.is_hot_sales}
                onChange={handleInputChange}
                className="form-checkbox"
              />
              <label htmlFor="is_hot_sales" className="text-sm">
                Is Hot Sales
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_prescription"
                name="is_prescription"
                checked={formData.is_prescription}
                onChange={handleInputChange}
                className="form-checkbox"
              />
              <label htmlFor="is_prescription" className="text-sm">
                Requires Prescription
              </label>
            </div>



            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_best_seller"
                name="is_best_seller"
                checked={formData.is_best_seller}
                onChange={handleInputChange}
                className="form-checkbox"
              />
              <label htmlFor="is_best_seller" className="text-sm">
                Best Seller
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_basic_medicine"
                name="is_basic_medicine"
                checked={formData.is_basic_medicine}
                onChange={handleInputChange}
                className="form-checkbox"
              />
              <label htmlFor="is_best_seller" className="text-sm">
                Basic medicine
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="px-8 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
