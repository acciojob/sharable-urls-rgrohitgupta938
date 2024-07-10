 const btn = document.getElementById("button");
    btn.addEventListener("click", (e) => {
		e.preventDefault();
      const h = document.getElementById("url");
      const name = document.getElementById("name").value;
      const year = document.getElementById("year").value;
      let url = "https://localhost:8080/";

      if (name) {
        url += `?name=${name}`;
      }
      if (year) {
        url += `&year=${year}`;
      }
      h.textContent = url;
    });