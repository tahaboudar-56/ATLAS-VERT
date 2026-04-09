import axios, { AxiosResponse } from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 4000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface ServiceResponse {
    id: string;
    title: string;
    description: string;
    price?: string;
}

export interface BookingPayload {
    name: string;
    email: string;
    zone: string;
    issue: string;
    date: string;
    notes?: string;
}

export interface BookingResponse {
    id: string;
    status: string;
}

export const getServices = async (): Promise<ServiceResponse[]> => {
    const response: AxiosResponse<ServiceResponse[]> = await apiClient.get('/services');
    return response.data;
};

export const createBooking = async (bookingData: BookingPayload): Promise<BookingResponse> => {
    const response: AxiosResponse<BookingResponse> = await apiClient.post('/bookings', bookingData);
    return response.data;
};
