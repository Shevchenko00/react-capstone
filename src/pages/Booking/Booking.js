import {useEffect, useReducer} from 'react';
import BookingForm from "../../components/BookingForm/BookingForm";
import './Booking.css'
import {fetchAPI, fetchData, submitAPI} from "../../api/api";
import {useNavigate} from "react-router-dom";


export const initializeTimes = () => {
    const today = new Date();
    const times = fetchData(today);
    return today;
};

export const updateTimes = (state, action) => {
    if (action.type === "UPDATE_DATE") {
        const date = new Date(action.payload);
        const newTimes = fetchData(date);
        return newTimes;
    }
    return state;
};

const Booking = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate()
    function submitForm(formData) {
        const isSubmitted = submitAPI(formData);

        if (isSubmitted) {
            navigate("/confirmed");
        }
    }
    return (
        <>
            <h1>Dine with Us — Reserve Your Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </>
    )
}

export default Booking;
