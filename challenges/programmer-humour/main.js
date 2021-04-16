
const urlAddress = `https://xkcd.now.sh/?comic=latest`;
function displayImage() {
  fetch(urlAddress)
    .then((response) => {
      if (!response.ok) {
        throw new response.statusText;
      }
      return response.json();
    })
    .then((object) => {
      const imgElem = document.createElement("img");
      imgElem.src = object.img;
      const imgOutput = document.getElementById("image-container");
      imgOutput.appendChild(imgElem);
    })
    .catch((error) => {
      const errorContainer = document.getElementById("error-container");
      const errorOutput = document.createElement("h1");
      errorOutput.innerText = `Something went wrong: ${error}`;
      errorContainer.appendChild(errorOutput);
    });
}
window.onload = displayImage;


         
       
        

       