import axios from 'axios';

const API_URL = 'https://backend-h3x7.onrender.com/api';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_URL}/products`, productData);
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

export const updateProduct = async (id, productData) => {
    try {
        const response = await axios.put(`${API_URL}/products/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting product with id ${id}:`, error);
        throw error;
    }
};
