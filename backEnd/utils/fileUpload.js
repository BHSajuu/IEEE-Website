// server/utils/fileUpload.js
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

export const uploadImage = async (file) => {
  const result = await cloudinary.uploader.upload(file.path);
  return result.secure_url;
};

export { upload };