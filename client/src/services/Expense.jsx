import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '';
const additonal_url = '/api/expense';

const getExpenses = async (user_id) => {
    const response = await axios.get(`${API_URL}${additonal_url}/${user_id}`);
    return response.data;
};

const getExpensesById = async (id) => {
    const response = await axios.get(`${API_URL}${additonal_url}/${id}`);
    return response.data;
}

const addExpenses = async (expenseData) => {
    const response = await fetch(`${API_URL}${additonal_url}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
    });

    // const response = await axios.post(`${API_URL}${additonal_url}/add`, expenseData);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }

    return data;
};

const updateExpenses = async (id, expenseData) => {
    const response = await axios.put(`${API_URL}${additonal_url}/update/${id}`, expenseData);
    return response.data;
};

const deleteExpenses = async (id) => {
    const response = await axios.delete(`${API_URL}${additonal_url}/delete/${id}`);
    return response.data;
};

const expenseService = {
    getExpenses,
    getExpensesById,
    addExpenses,
    updateExpenses,
    deleteExpenses,
};

export default expenseService;