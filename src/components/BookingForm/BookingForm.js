import './BookingForm.css'
import { useState } from "react";

const BookingForm = ({ availableTimes=[], dispatch }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [countGuest, setCountGuest] = useState(0);
    const [occasion, setOccasion] = useState('');
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!date) newErrors.date = 'Please choose a date';
        if (!time) newErrors.time = 'Please choose a time';
        if (!countGuest || countGuest < 1) newErrors.countGuest = 'Please enter at least 1 guest';
        if (!occasion) newErrors.occasion = 'Please select an occasion';
        if (!agree) newErrors.agree = 'You must agree to the terms';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        console.log('Booking submitted:', { date, time, countGuest, occasion, agree });
        alert('Reservation confirmed!');
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: "UPDATE_DATE", payload: newDate });
    };

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
            />
            {errors.date && <p className="error">{errors.date}</p>}

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                <option value="" disabled>Select time</option>
                {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                        {timeOption}
                    </option>
                ))}
            </select>
            {errors.time && <p className="error">{errors.time}</p>}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                onChange={(e) => setCountGuest(Number(e.target.value))}
            />
            {errors.countGuest && <p className="error">{errors.countGuest}</p>}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="" disabled>Select occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {errors.occasion && <p className="error">{errors.occasion}</p>}

            <label className="custom-checkbox">
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="checkmark"></span>
                I agree to the terms
            </label>
            {errors.agree && <p className="error">{errors.agree}</p>}

            <button className="btn_booking" type="submit">Make Your reservation</button>
        </form>
    );
};

export default BookingForm;
