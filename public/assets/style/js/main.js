const navBar = document.getElementById("nav-bar");
const hamburger = document.querySelector(".hamburger");
const settingsModal = document.querySelector(".modal_settings");
const dashboard = document.querySelector(".dashboard");
const tasksModal = document.querySelector(".task_modal");
const cteModal = document.querySelector(".cte_modal");
const settingsBtn = document.getElementById("settings");
const homeBtn = document.getElementById("home");
const taskBtn = document.getElementById("tasks");
const cteBtn = document.getElementById("cte_section");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

settingsBtn.addEventListener("click", () => {
  settingsModal.classList.add("modal_show");
  cteModal.classList.remove("modal_show");
  tasksModal.classList.remove("modal_show");
  dashboard.classList.remove("modal_show");
});

homeBtn.addEventListener("click", () => {
  dashboard.classList.add("modal_show");
  settingsModal.classList.remove("modal_show");
  tasksModal.classList.remove("modal_show");
  cteModal.classList.remove("modal_show");
});

taskBtn.addEventListener("click", () => {
  tasksModal.classList.add("modal_show");
  dashboard.classList.remove("modal_show");
  settingsModal.classList.remove("modal_show");
  cteModal.classList.remove("modal_show");
});

cteBtn.addEventListener("click", () => {
  cteModal.classList.add("modal_show");
  dashboard.classList.remove("modal_show");
  tasksModal.classList.remove("modal_show");
  settingsModal.classList.remove("modal_show");
});
