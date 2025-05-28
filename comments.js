let userListTodos = document.querySelector("ul");

getData("https://jsonplaceholder.typicode.com/comments", userId, "postId").then(
  (users) => {
    users.forEach((el) => {
      addUserComments(el, userListTodos);
    });
  }
);

function addUserComments({ name, email, body }, userList) {
  let li = `
  <li>
    <h4>Name: <span>${name}</span></h4>
    <p>Email: <span>${email}</span></p>
    <p> Body: <span>${body}</span></p>
  </li>
  `;

  userList.innerHTML += li;
}
