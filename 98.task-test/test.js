// const menu = document.querySelector("#menu");

// menu.addEventListener("click", (e) => {
//   if (e.target.tagName !== "LI") return;
//   const li = menu.querySelectorAll("li");
//   li.forEach((li) => {
//     li.classList.remove("active");
//   });
//   e.target.classList.add("active");
// });

// const inputButton = document.querySelector("#input-button");

// inputButton.addEventListener("click", () => {
//   const input = document.querySelector("#todo-input");
//   const todoList = document.querySelector("#todo-list");
//   const li = document.createElement("li");
//   const button = document.createElement("button");
//   button.classList.add("delete");
//   li.textContent = input.value;
//   button.textContent = "❌";
//   li.appendChild(button);
//   todoList.appendChild(li);
// });

// const todoList = document.querySelector("#todo-list");
// todoList.addEventListener("click", (e) => {
//   if (e.target.tagName !== "LI") return;
//   e.target.style.textDecoration = "line-through";
// });

// todoList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.remove();
//   }
// });

// const searchInput = document.querySelector("#search-input");
// const menu = document.querySelector("#menu");
// searchInput.addEventListener("input", (e) => {
//   let text = e.target.value;
//   menu.querySelectorAll("li").forEach((li) => {
//     if (li.textContent.includes(text)) {
//       li.style.display = "block";
//     } else {
//       li.style.display = "none";
//     }
//   });
// });

// const input = document.querySelector("#search");
// const tableBody = document.querySelector("#data-table");
// input.addEventListener("input", (e) => {
//   let text = e.target.value;
//   const tr = tableBody.querySelectorAll("tr");
//   tr.forEach((e) => {
//     if (!e.children[0].textContent.includes(text)) {
//       e.style.display = "none";
//       e.children[0].style.backgroundColor = "";
//     } else {
//       e.style.display = "table-row";
//       e.children[0].style.backgroundColor = "yellow";
//     }
//   });
// });

// const tabs = document.querySelector("#tabs");
// const contents = document.querySelector("#contents");
// tabs.addEventListener("click", (e) => {
//   if (e.target.tagName !== "LI") return;
//   const tab = e.target.dataset.tab;
//   const items = contents.querySelectorAll("div");
//   const li = tabs.querySelectorAll("LI");
//   li.forEach((item) => {
//     if (item.dataset.tab === tab) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
//   items.forEach((item) => {
//     if (item.dataset.content === tab) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });

// const openButton = document.querySelector("#open-btn");
// const closeButton = document.querySelector("#close-btn");
// const modal = document.querySelector("#modal");
// openButton.addEventListener("click", () => {
//   modal.style.display = "block";
// });

// closeButton.addEventListener("click", (e) => {
//   modal.style.display = "none";
// });
const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");
let doneTask = [];
addBtn.addEventListener("click", () => {
  const text = todoInput.value;
  const li = document.createElement("li");
  li.innerHTML = `${text}<button class="delete">❌</button>`;
  todoList.append(li);
});
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
  }
  if (e.target.matches(".delete")) {
    e.target.closest("li").remove();
  }
});

const filterBtn = document.querySelector("#sort-btn");
filterBtn.addEventListener("click", (e) => {});
