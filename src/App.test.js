import { initializeTimes, updateTimes } from './pages/Booking/Booking';
import * as api from './api/api';  // путь подкорректируй

describe('initializeTimes', () => {
    beforeEach(() => {
        jest.spyOn(api, 'fetchAPI').mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('должна возвращать список времени по умолчанию', () => {
        const times = initializeTimes();
        expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    });
});

describe('updateTimes', () => {
    test('должна возвращать обновленное состояние при UPDATE_DATE', () => {
        const initialState = ["17:00", "18:00"];
        const action = { type: 'UPDATE_DATE', payload: '2025-07-01' };

        jest.spyOn(api, 'fetchAPI').mockReturnValue(["19:00", "20:00", "21:00"]);

        const newState = updateTimes(initialState, action);

        expect(newState).toEqual(["19:00", "20:00", "21:00"]);

        jest.restoreAllMocks();
    });

    test('возвращает исходное состояние при неизвестном типе действия', () => {
        const initialState = ["17:00", "18:00", "19:00"];
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = updateTimes(initialState, action);
        expect(newState).toEqual(initialState);
    });
});
