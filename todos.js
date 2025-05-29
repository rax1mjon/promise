let userListTodos = document.querySelector("ul");

const TodosData = async () => {
  let data = await getData(
    "https://jsonplaceholder.typicode.com/todos",
    userId
  );

  try {
    data.map((user) => {
      addUserTodos(user, userListTodos);
    });
    todosBtnClick();
  } catch (error) {
    console.log(error);
  }
};

TodosData();

function addUserTodos({ userId, id, title, completed }, userList) {
  let li = `
  <li class = "todos">
    <p>Title: ${title}</p>

    <span>${completed ? "✅" : "❌"}</span>
    <button id="${userId}" class="album">albums</button>
  </li>

  `;

  userList.innerHTML += li;
}

function todosBtnClick() {
  let albums = document.querySelectorAll(".album");
  albums.forEach((btn) => {
    btn.addEventListener("click", function () {
      location.href = `./albums.html?userId=${btn.id}`;
    });
  });
}
