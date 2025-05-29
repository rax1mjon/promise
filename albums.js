let userListTodos = document.querySelector("ul");

const albumsData = async () => {
  let data = await getData(
    "https://jsonplaceholder.typicode.com/albums",
    userId
  );

  try {
    data.map((user) => {
      addUserAlbums(user, userListTodos);
    });
  } catch (error) {
    console.log(error);
  }
};

albumsData();

function addUserAlbums({ title }, userList) {
  let li = `
  <li>
    <p>Title: ${title}</p>
  </li>

  `;

  userList.innerHTML += li;
}
