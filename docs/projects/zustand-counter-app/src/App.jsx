import useCounterStore from "./store";

// کامپوننت اول که فقط اعداد رو نشون میده
function CounterDisplay(){

  const count = 
  useCounterStore((state) =>
  state.count);
  return <h1 className=" text-4xl font-bold text-gray-800 my-4">Count: {count}</h1>;
}

//کامپوننت دوم که شامل دکمه ها است
function CountContorols(){

  const increment =
  useCounterStore((state) =>
  state.increment);

  const decrement =
  useCounterStore((state) =>
  state.decrement);

  return (
    <div className="flex justify-center gap-6">
      <button onClick={increment} 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold 
       w-12 h-12 rounded-xl transition-colors flex items-center 
       justify-center text-6xl"><span className="bottom-2
        relative">+</span></button>
        
      <button onClick={decrement}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold 
       w-12 h-12 rounded-xl transition-colors flex items-center 
       justify-center text-6xl"><span className="bottom-2
        relative">-</span></button>
    </div>
  );
}

//کامپوننت اصلی
function App() {

  return(
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className=" bg-white p-8 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-semibold text-gray-500 mb-6">Zustand Counter</h2>
      <CounterDisplay />
      <CountContorols />
      </div>
    </div>
  );
}

export default App;