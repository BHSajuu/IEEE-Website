import React, { useState, useEffect } from "react";

const ProfileModal = ({ isOpen, onClose, currentName, currentImage, onSave }) => {
  const [name, setName] = useState(currentName);
  const [image, setImage] = useState(currentImage);
  const [preview, setPreview] = useState(currentImage);

  useEffect(() => {
    setName(currentName);
    setImage(currentImage);
    setPreview(currentImage);
  }, [currentName, currentImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const updatedData = { name, image };
    await onSave(updatedData);

  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
   
    >
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg z-10 p-6 w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Edit Profile</h2>
        <div className="mb-4 flex justify-center">
          <img
            src={preview || "https://placehold.co/150"}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Profile Picture
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose()}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
