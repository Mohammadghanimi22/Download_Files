let input = document.querySelector("input");
let button = document.querySelector("button");
let span = document.querySelector("span");

button.addEventListener("click", (e) => {
  e.preventDefault();
  downloadFile(input.value);
});

function downloadFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      let link = document.createElement("a");
      link.href = tempUrl;
      link.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(link);
      link.click();
      link.remove();
      input.value = "";
      span.innerHTML = "";
    })
    .catch((rej) => (span.innerHTML = rej));
}
