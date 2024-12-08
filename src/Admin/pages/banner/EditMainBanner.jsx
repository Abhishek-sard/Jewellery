import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getOneMainBanner, updateMainBanner } from "../../../Redux/Slice/bannerSlice";
import { PiListBulletsBold } from "react-icons/pi";

const EditMainBanner = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { banner, isLoading } = useSelector((state) => state.banner);

  // Fetch banner details
  useEffect(() => {
    dispatch(getOneMainBanner(id)).then((result) => {
      console.log(result)
      if (result.payload) {
        console.log(result.payload);
        const { title, images } = result.payload.data;
        setTitle(title);
        setExistingImages(images || []);
      }
    });
  }, [id, dispatch]);

  // Handle new image selection
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || (images.length === 0 && existingImages.length === 0)) {
      toast.error("Please provide a title and upload at least one image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    images.forEach((image) => formData.append("images", image));
    
    try {
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      const result = await dispatch(updateMainBanner({ formData,id }));
      console.log(result)
      if (result?.payload?.success) {
        toast.success("Banner updated successfully!");
        navigate("/admin/banner/main-banner");
      } else {
        toast.error(result.payload.message || "Banner update failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating the banner.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">Edit Main Banner</h2>
      </div>

      <div className="mx-8 px-4 py-4 my-4 shadow-md">
        <Link
          to="/admin/banner/main-banner"
          className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <PiListBulletsBold /> All Main Banners
        </Link>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-gray-600 font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter banner title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="images" className="block text-gray-600 font-medium">
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="mt-1 text-sm text-gray-500">You can upload multiple images.</p>
          </div>

          {/* Existing Images Preview */}
          <div className="flex flex-wrap gap-4">
            {existingImages.map((url, index) => (
              <div key={index} className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                <img src={import.meta.env.VITE_API_URL + url} alt="Existing" className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

          {/* New Images Preview */}
          <div className="flex flex-wrap gap-4">
            {Array.from(images).map((image, index) => (
              <div key={index} className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Update Banner
          </button>
        </form>
      </div>
    </>
  );
};

export default EditMainBanner;
