import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-4 bg-white min-h-screen max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-600">Services Section</h2>
        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded"
            onClick={() => navigate("/cards")}
          >
            All Card View
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded">
            Save
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <InputWithIcons label="Top Title" placeholder="HAIR SALON, MASSAGES, BEAUTY SALON" />
        <InputWithIcons label="Heading" placeholder="Find a service close to you"  />
        <InputWithIcons label="Sub Heading" placeholder="Find a service close to you" />
        <CardCreate />
        <div className="grid grid-cols-2 gap-4">
          <InputWithIcons label="Review Number" placeholder="4.4" />
          <InputWithIcons label="Total Reviews" placeholder="104 Reviews" />
        </div>
        <InputWithIcons label="Heading" placeholder="Find a service close to you" showLinkIcon />
        <InputWithIcons label="Location" placeholder="Find a service close to you" />
        <div className="grid grid-cols-2 gap-4">
          <InputWithIcons label="Book Button" placeholder="Book" />
          <InputWithIcons label="Book URL" placeholder="/Book" />
        </div>
      </div>
    </div>
  );
};

// 🧩 Updated Input with bold black border & optional link icon
const InputWithIcons = ({ label, placeholder, showLinkIcon = false }) => (
  <div>
    <label className="block font-medium text-sm mb-1">{label}</label>
    <div className="flex items-center border border-black border-2 rounded px-2 py-1">
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 outline-none text-sm"
      />

      <div className="flex items-center gap-6 ml-2">
        {showLinkIcon && (
          <img
            src="./public/link.png" 
            alt="link"
            className="w-4 h-4  object-contain"
          />
        )}
        <span className="w-4 h-4 rounded-full bg-black inline-block"></span>
        <img
          src="./public/font.png"
          alt="font"
          className="w-4 h-4 object-contain"
        />
        <img
          src="./public/Aa.png"
          alt="Aa"
          className="w-4 h-4 object-contain"
        />
        
      </div>
    </div>
  </div>
);

// 🧩 Card image upload
const CardCreate = () => {
  const [images, setImages] = useState({
    main: null,
    review: null,
    location: null,
  });

  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({
        ...prev,
        [key]: URL.createObjectURL(file),
      }));
    }
  };

  const renderUpload = (label, key) => (
    <div className="flex items-center justify-between border border-black border-2 rounded p-2">
      {/* Image Preview */}
      <div className="w-10 h-10 rounded overflow-hidden border mr-2">
        {images[key] ? (
          <img src={images[key]} alt={key} className="object-cover w-full h-full" />
        ) : (
          <div className="bg-gray-200 w-full h-full" />
        )}
      </div>

      {/* File Input */}
      <div className="flex-1">
        <label className="block text-sm font-semibold">{label}</label>
        <input
          type="file"
          onChange={(e) => handleImageChange(e, key)}
          className="text-sm mt-1"
        />
      </div>

      {/* Trash icon */}
      <img
        src="./public/Trash.png"
        alt="Delete"
        className="w-5 h-5 cursor-pointer ml-4"
        onClick={() => setImages((prev) => ({ ...prev, [key]: null }))}
      />
    </div>
  );

  return (
    <div>
      <h3 className="font-semibold">Card Create</h3>
      <div className="space-y-3">
        {renderUpload("Card Main Image", "main")}
        {renderUpload("Card Review Icon", "review")}
        {renderUpload("Card Location Icon", "location")}
      </div>
    </div>
  );
};

export default ServicesSection;
