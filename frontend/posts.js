const posts = [
    {
      title: "Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Post 2",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Post 3",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];
  
  const postsContainer = document.querySelector("#posts");
  
  for (let post of posts) {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  }
  