import { useReducer } from 'react';
import BookingForm from "../../components/BookingForm/BookingForm";
import './Booking.css'

export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
    if (action.type === "UPDATE_DATE") {
        const selectedDate = action.payload;
        return ["20:00", "21:00", "22:00"];
    }
    return state;
};

const Booking = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <>
            <h1>Dine with Us — Reserve Your Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    )
}

export default Booking;
