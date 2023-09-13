import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '@/configs/environment';
import axios from 'axios';

export default async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const res = await axios.post<{ secure_url: string }>(
    CLOUDINARY_UPLOAD_URL,
    formData,
  );
  return res.data.secure_url;
}
