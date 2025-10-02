// src/utils/imageCompressor.js
import imageCompression from 'browser-image-compression';

export const compressImage = async (file) => {
  console.log(`Original file size: ${(file.size / 1024 / 1024).toFixed(2)} MB`);

  const options = {
    maxSizeMB: 1,          // Max size in MB
    maxWidthOrHeight: 1920, // Max width or height
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    console.log(`Compressed file size: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`);
    return compressedFile;
  } catch (error) {
    console.error("Image compression error:", error);
    return file; // Agar error aaye toh original file bhej do
  }
};