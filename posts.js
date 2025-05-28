let userListTodos = document.querySelector("ul");

getData("https://jsonplaceholder.typicode.com/posts", userId).then((users) => {
  users.forEach((el) => {
    addUserPosts(el, userListTodos);
  });
  commentsBtn();
});

function addUserPosts({ body, id, title }, userList) {
  let li = `
  <li class = "todos">
    <p>Title: ${title}</p>

   <p>Body:
   ${body}
   </p>

    <button id="${userId}" class="comments">comments</button>
  </li>

  `;

  userList.innerHTML += li;
}

function commentsBtn() {
  let btns = document.querySelectorAll(".comments");

  btns.forEach((el) => {
    el.addEventListener("click", () => {
      location.href = `./comments.html?userId=${el.id}`;
    });
  });
}
