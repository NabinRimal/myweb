window.onload = () => {
  let makedark = Array.from(document.querySelectorAll(".darktm"));
  let darkbtn = document.getElementById("dark");

  darkbtn.addEventListener("click", () => {
    for (const k in makedark) {
      makedark[k].classList.toggle("darktheme");
    }
    if (darkbtn.innerHTML == "Dark") {
      darkbtn.innerHTML = "Light";
      localStorage.setItem("theme", "dark");
    } else if (darkbtn.innerHTML == "Light") {
      darkbtn.innerHTML = "Dark";
      localStorage.setItem("theme", "light");
    }
  });

  if (localStorage.getItem("theme") === "light") {
    for (const k in makedark) {
      makedark[k].classList.remove("darktheme");
      darkbtn.innerHTML = "Dark";
    }
  } else if (localStorage.getItem("theme") === "dark") {
    for (const k in makedark) {
      makedark[k].classList.add("darktheme");
      darkbtn.innerHTML = "Light";
    }
  }
};
