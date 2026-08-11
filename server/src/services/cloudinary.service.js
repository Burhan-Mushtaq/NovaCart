import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

/*
|--------------------------------------------------------------------------
| Upload Single Image
|--------------------------------------------------------------------------
*/

export const uploadImage = (
  buffer,
  folder = "ecommerce/products"
) => {
  return new Promise((resolve, reject) => {
    const uploadStream =
      cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "image",
        },
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve({
            public_id: result.public_id,
            url: result.secure_url,
          });
        }
      );

    streamifier
      .createReadStream(buffer)
      .pipe(uploadStream);
  });
};

/*
|--------------------------------------------------------------------------
| Upload Multiple Images
|--------------------------------------------------------------------------
*/

export const uploadMultipleImages = async (
  files,
  folder = "ecommerce/products"
) => {
  const uploads = files.map((file) =>
    uploadImage(file.buffer, folder)
  );

  return Promise.all(uploads);
};

/*
|--------------------------------------------------------------------------
| Delete Image
|--------------------------------------------------------------------------
*/

export const deleteImage = async (
  publicId
) => {
  if (!publicId) return;

  return cloudinary.uploader.destroy(
    publicId
  );
};