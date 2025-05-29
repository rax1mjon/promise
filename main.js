let lastPage = document?.querySelector("nav button:nth-child(1)");
let nextPage = document?.querySelector("nav button:nth-child(2)");

if (lastPage) {
  lastPage.addEventListener("click", function () {
    history.go(-1);
  });
  nextPage.addEventListener("click", function () {
    history.go(1);
  });
}
let userList = document?.querySelector(".users");

function getData(url, userIdFunc, IdName = "userId") {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          let userData = userIdFunc
            ? JSON.parse(xhr.responseText).filter(
                (el) => el[IdName] == userIdFunc
              )
            : JSON.parse(xhr.responseText);

          resolve(userData);
        } else {
          reject(xhr.status);
        }
      }
    };

    xhr.open("GET", url);
    xhr.send();
  });

  return promise;
}

const UserData = async () => {
  let data = await getData("https://jsonplaceholder.typicode.com/users", false);
  
  try {
    data.map((user) => {
      addUser(user, userList);
    });
    buttonClickUsers();
  } catch (error) {
    console.log(error);
  }
};

if (userList) UserData();

function addUser({ id, name, username, email, address: { street } }, userList) {
  let li = `
    <li>

    <h4>Name: <span>${name}</span></h4>
    <p>Email: <span>${email}</span></p>
    <p>UserName: <span>${username}</span></p>
    <p>Address: <span>${street}</span></p>
    <p>id: <span>${id}</span></p>
    <div class="btns">
      <button id="${id}" class="btn-todos">Todos</button>
      <button id="${id}" class="btn-posts ">Posts</button>
    </div>

  </li>

  `;

  userList.innerHTML += li;
}

let params = new URLSearchParams(location.search);

let userId = params.get("userId");

function buttonClickUsers() {
  let btnPosts = document.querySelectorAll("li div button:nth-child(2)");
  let btnTodos = document.querySelectorAll("li div button:nth-child(1)");

  btnTodos.forEach((btn) => {
    btn.addEventListener("click", function () {
      location.href = `./todos.html?userId=${btn.id}`;
    });
  });

  btnPosts.forEach((btn) => {
    btn.addEventListener("click", function () {
      location.href = `./post.html?userId=${btn.id}`;
    });
  });
}
