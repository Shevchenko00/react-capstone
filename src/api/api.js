export const fetchData = (date) => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return availableTimes;
};


const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export function submitAPI(formData) {
    return true;
};