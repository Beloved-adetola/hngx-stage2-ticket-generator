import { useState } from "react";

interface ImageUploadProps {
  onImageUpload: (url: string) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_unsigned_preset"); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`, // Replace with your Cloudinary cloud name
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setImageUrl(data.secure_url);
      onImageUpload(data.secure_url); // Pass the URL to the parent component
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <label htmlFor="image">Image</label>
      <input
        type="file"
        placeholder="Image"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleUpload(e.target.files[0]);
          }
        }}
      />
      {imageUrl && <img src={imageUrl} alt="Uploaded" width="100" />}
    </div>
  );
};

export default ImageUpload;
