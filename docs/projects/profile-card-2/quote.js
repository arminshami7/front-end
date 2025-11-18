// ۱. انتخاب عناصر مورد نیاز از DOM
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

const apiUrl = 'https://zenquotes.io/api/random';

async function getNewQuote() {

try{  const response = await fetch(apiUrl);

  const data = await response.json();

  quoteTextElement.innerText = data.content;
  quoteAuthorElement.innerText = data.author;
}
 catch (error){
  console.error("خطا رخ داده" , error);
  quoteAuthorElement.innerText = "متاسفانه دریافت نقل قول با مشکل مواجه شد"
  quoteTextElement.innerText = "لطفا اتصال اینترنت خود را بررسی کنید"
}
}

newQuoteBtn.addEventListener('click', getNewQuote )
getNewQuote();