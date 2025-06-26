import { render, screen } from '@testing-library/react';
import BookingForm from "./components/BookingForm/BookingForm";
import { initializeTimes, updateTimes } from './pages/Booking/Booking'; // путь подкорректируй по своему проекту

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/make your reservation/i); // Поиск без учёта регистра
    expect(headingElement).toBeInTheDocument();
});

describe('initializeTimes', () => {
    test('должна возвращать список времени по умолчанию', () => {
        const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        expect(initializeTimes()).toEqual(expected);
    });
});

describe('updateTimes', () => {
    test('должна возвращать то же состояние, если дата изменена (заглушка)', () => {
        const initialState = ["20:00", "21:00", "22:00"];
        const action = { type: 'UPDATE_DATE', payload: '2025-07-01' };
        const newState = updateTimes(initialState, action);

        expect(newState).toEqual(initialState); // тест пока заглушка, поведение не изменяется
    });

    test('возвращает исходное состояние при неизвестном типе действия', () => {
        const initialState = ["17:00", "18:00", "19:00"];
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = updateTimes(initialState, action);

        expect(newState).toEqual(initialState);
    });
});