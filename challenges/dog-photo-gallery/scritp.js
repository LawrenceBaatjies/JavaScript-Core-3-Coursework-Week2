window.onload = function() {

  const firstButton = document.getElementById("img-bt1");
  const secondImgButton = document.getElementById("img-bt2");
  const urlAddress = "https://dog.ceo/api/breeds/image/random";


  function displayImage() {
    fetch(urlAddress)
    .then((response) => {
      if (response)
       {
        throw new response.statusText;
      }
      return response.json();
    })
    .then((object) => {

      let imgAddress = object.message;
      let listItemElem = document.createElement("li");
      listItemElem.className = "p-3 mx-auto list-group-item";
      let imgElem = document.createElement("img");
      imgElem.classList.add("w-150");
      imgElem.src = imgAddress;
      imgElem.alt = " A dog photo";
      let listElem = document.getElementById("imageGallery");
      let currentPhotoNumber = listElem.childNodes.length;

      for (let i = 0; i < currentPhotoNumber; i++) {
        let child = listElem.childNodes[i];
        listElem.removeChild(child);
      }

      listItemElem.appendChild(imgElem);
      listElem.appendChild(listItemElem);
    })
    .catch((error) => {
       const errorContainer = document.getElementById("error-container");
       const errorOutput = document.createElement("h1");
       errorOutput.innerText = `Connection Not established: ${error}`;
       errorContainer.appendChild(errorOutput);
    });
}

  function displayAllImages() {

    fetch(urlAddress)
      .then((Response) => Response.json())
      .then((object) => {
        let imgAddress = object.message;
        let listItemElem = document.createElement("li");
        listItemElem.className = "p-3 mx-auto list-group-item";
        let imgElem = document.createElement("img");
        imgElem.classList.add("w-100");
        imgElem.src = imgAddress;
        imgElem.alt = " A dog photo";
        let listElem = document.getElementById("imageGallery");
        listItemElem.appendChild(imgElem);
        listElem.appendChild(listItemElem);
      })
      .catch((error) =>  {
        const errorContainer = document.getElementById("error-container");
        const errorOutput = document.createElement("h1");
        errorOutput.innerText = `Connection Not established: ${error}`;
        errorContainer.appendChild(errorOutput);
     });
      console.log("error");
  }

    firstButton.addEventListener("click", displayImage);
    secondImgButton.addEventListener("click", displayAllImages);


}