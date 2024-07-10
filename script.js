const btn = document.getElementById("button");
const text = document.getElementById("url");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;
  let url = "https://localhost:8080/";
  console.log(name, year);

  if (name) {
    url += `?name=${name}`;
  }
  if (year) {
    url += name ? `&year=${year}` : `?year=${year}`;
  }
  text.textContent = url;
});
