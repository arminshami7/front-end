// history.js
export function saveHistory(item) {
    const history = getHistory();
    const entry = {
        id: Date.now(), // شناسه یکتا بر اساس زمان
        text: item
    };
    history.push(entry);
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
}

export function getHistory() {
    return JSON.parse(localStorage.getItem("calculatorHistory")) || [];
}

export function clearHistory() {
    localStorage.removeItem("calculatorHistory");
}
