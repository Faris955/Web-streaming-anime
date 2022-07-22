let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

let search = document.querySelector(".search");

document.querySelector("#cari").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
};
