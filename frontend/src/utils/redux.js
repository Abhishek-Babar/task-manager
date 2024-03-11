import { toast } from 'react-toastify';

export const getReducerError = (error) => ({
    message: error?.message || 'Something went wrong!',
    code: error?.code,
    status: error?.status,
    info: error?.info,
    exception: error?.exception,
});

export const showErrorToast = (error) => {
    let message = error?.message;
    toast.error(message);
};
