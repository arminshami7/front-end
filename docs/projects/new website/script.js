async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();

    const postList = document.getElementById("post-list");
    const searchInput = document.getElementById("search");
    const sortSelect = document.getElementById("sort");

    function renderPosts(list) {
      postList.innerHTML = ""; // پاک‌کردن لیست قبلی
      list.slice(0, 10).forEach(post => {
        const li = document.createElement("li");
        const postText = document.createElement("span")
        postText.textContent = post.title;
        postText.style.marginRight = "10px";


        const button = document.createElement("button");
        button.textContent = "نمایش جزییات";
        
        const div = document.createElement("div");
        div.style.display = "none";
        div.textContent = post.body;

        const colors =  [ "blue", "red", "yellow", "green", "purple", "orange", "black", "white"];
        const bgColors = ["lightyellow", "lightblue", "lightgreen", "pink", "lightgray"];

        button.addEventListener("click", () => {
            if(div.style.display === "none"){
                div.style.display = "block";
                button.textContent = "مخفی کردن جزییات";

                const randomColor = colors[ Math.floor(Math.random() * colors.length)];
                const randomBgColor = bgColors[ Math.floor(Math.random() * bgColors.length)];
                div.style.color = randomColor;
                div.style.backgroundColor = randomBgColor;
            } else {
                 div.style.display = "none";
                 button.textContent = "نمایش جزئیات";
                   }
        });
        
         // شمارنده لایک

         let likes = 0;
let liked = false;     // آیا کاربر لایک زده؟
let disliked = false;  // آیا کاربر دیس لایک زده؟

const likeDisplay = document.createElement("span");
          likeDisplay.textContent = `${likes}`;
          likeDisplay.style.margin = "10px";

const likeButton = document.createElement("button");
likeButton.textContent = "👍";

likeButton.addEventListener("click", () => {
  if (!liked) {       // فقط اگر هنوز لایک نزده
    likes += 1;
    liked = true;
    if (disliked) {   // اگر قبلاً دیس زده بود، برگردش
      disliked = false;
    }
    likeDisplay.textContent = likes;
  }
});

const dislikeButton = document.createElement("button");
dislikeButton.textContent = "👎";

dislikeButton.addEventListener("click", () => {
  if (!disliked && likes > 0) {  // فقط اگر هنوز دیس نزده
    likes -= 1;
    disliked = true;
    if (liked) {  // اگر قبلاً لایک زده بود، برگردش
      liked = false;
    }
    likeDisplay.textContent = likes;
  }
});


          li.style.display = "flex";
          li.style.gap = "10px";
          likeDisplay.style.margin = "0px"

            
  li.appendChild(postText);
  li.appendChild(button);
  li.appendChild(likeButton);
  li.appendChild(likeDisplay);
  li.appendChild(dislikeButton);
  li.appendChild(div);

  postList.appendChild(li);
        });
    }

    // نمایش اولیه
    renderPosts(posts);

    searchInput.addEventListener("input", () =>{
        const query = searchInput.value.toLowerCase();
        const filtered = posts.filter(p => p.title.toLowerCase().includes(query));
        renderPosts(filtered);
    });

    sortSelect.addEventListener("change", ()=>{
        const sorted = [...posts].sort((a, b) => {
            if(sortSelect.value === "asc"){
                return a.title.length - b.title.length;
            } else if (sortSelect.value === "desc") {
      return b.title.length - a.title.length; // بلندتر به کوتاه‌تر
    }
    return 0;
        });
        renderPosts(sorted);
    });

} catch(error){
    console.log(error);
  }
}
getPosts();