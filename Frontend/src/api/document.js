import axios from "axios";

const API = "http://localhost:5000";

export const uploadDocument = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  return axios.post(
    `${API}/documents/upload`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const getDocuments = async () => {
  return axios.get(
    `${API}/documents`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

export const verifyDocument = async (id) => {
  return axios.get(
    `${API}/documents/verify/${id}`
  );
};