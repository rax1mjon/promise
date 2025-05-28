let userListTodos = document.querySelector("ul");

getData("https://jsonplaceholder.typicode.com/albums", userId).then((users) => {
  users.forEach((el) => {
    addUserAlbums(el, userListTodos);
  });
});

function addUserAlbums({ title }, userList) {
  let li = `
  <li>
    <p>Title: ${title}</p>
  </li>

  `;

  userList.innerHTML += li;
}
