// src/App.jsx
import { useState } from 'react';
import TodoItem from './TodoItem'; // ۱. کامپوننت فرزند رو وارد می‌کنیم
import './App.css';


  const initialTodos = [
    { id: 1, text: 'یادگیری React Props' },
    { id: 2, text: 'تمرین رندر کردن لیست‌ها' },
    { id: 3, text: 'ساختن یک اپلیکیشن عالی!' }
  ];
  
  function App() {
   const [todos, setTodos] = useState(initialTodos);
   const [inputText, setInputText] = useState(''); // مقدار اولیه یک رشته خالی است
   

   // داخل کامپوننت App، قبل از return
// تابع رو طوری تغییر میدیم که 'event' رو به عنوان پارامتر بگیره
function handleAddTodo(event) {
  // اولین و مهم‌ترین کار: جلوی رفرش شدن صفحه رو می‌گیریم
  event.preventDefault(); // حرف اول 'event' باید کوچک باشه

  // اگر input خالی بود، کاری نکن
  if (inputText.trim() === '') return;

  // ... بقیه کد تابع دقیقاً مثل قبل باقی می‌مونه ...
  const newTodo = {
    id: Date.now(),
    text: inputText
  };
  setTodos([...todos, newTodo]);
  setInputText('');
}


  return (
    <div className="card">
      <h1>لیست کارهای من</h1>
        <form className="form" onSubmit={handleAddTodo}>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="کار جدید..."
      />
<button type='submit' >اضافه کن</button>

    </form>
      <ul>
        {/* ۳. اینجا جادو اتفاق میفته! */}
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default App;