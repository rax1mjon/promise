let userListTodos = document.querySelector("ul");

const CommentData = async () => {
  let data = await getData(
    "https://jsonplaceholder.typicode.com/comments",
    userId,
    "postId"
  );

  try {
    data.map((user) => {
      addUserComments(user, userListTodos);
    });
  } catch (error) {
    console.log(error);
  }
};

CommentData();

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
