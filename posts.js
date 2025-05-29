let userListTodos = document.querySelector("ul");

const PostData = async () => {
  let data = await getData(
    "https://jsonplaceholder.typicode.com/posts",
    userId
  );

  try {
    data.map((user) => {
      addUserPosts(user, userListTodos);
    });
    commentsBtn();
  } catch (error) {
    console.log(error);
  }
};

PostData();

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
