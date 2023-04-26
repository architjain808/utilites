function getInput() {
  const inputElement = document.querySelector("#exampleFormControlInput1");
  return (inputValue = inputElement.value);
}
function getBase64() {
  const res = getInput();
  const outputElement = document.querySelector("#outputDiv1");
  let outputElementP = outputElement.querySelector("p");
  if (!outputElementP) {
    const newP = document.createElement("p");
    outputElement.replaceChild(newP, outputElement.querySelector("img"));
    outputElementP = outputElement.querySelector("p");
  }
  outputElementP.textContent = btoa(res);
}
function getString() {
  const res = getInput();
  const outputElement = document.querySelector("#outputDiv1");
  let outputElementP = outputElement.querySelector("p");
  if (!outputElementP) {
    const newP = document.createElement("p");
    outputElement.replaceChild(newP, outputElement.querySelector("img"));
    outputElementP = outputElement.querySelector("p");
  }
  outputElementP.textContent = atob(res);
}
function getimage() {
  const res = getInput();
  const outputDiv = document.querySelector("#outputDiv1");
  const newImg = document.createElement("img");
  const mimeType = detectMimeType(res);
  newImg.src = mimeType + res;
  newImg.style.maxWidth = "300px";
  const hasP = outputDiv.querySelector("p");
  if (hasP) {
    if (mimeType != null) {
      outputDiv.replaceChild(newImg, outputDiv.querySelector("p"));
    } else {
      outputElementP = outputDiv.querySelector("p");
      outputElementP.textContent = "Unknown MIME type";
    }
  } else {
    if (mimeType !=null)
      outputDiv.replaceChild(newImg, outputDiv.querySelector("img"));
    else {
      const newP = document.createElement("p");
      outputDiv.replaceChild(newP, outputDiv.querySelector("img"));
      outputElementP = outputDiv.querySelector("p");
      outputElementP.textContent = "Unknown MIME type";
    }
  }
}
function detectMimeType(base64Data) {
  const header = base64Data.substring(0, 20);
  if (header.startsWith("/9j/")) {
    return "data:image/jpeg;base64,";
  } else if (header.startsWith("iVBOR")) {
    return "data:image/png;base64,";
  } else if (header.startsWith("R0lGOD")) {
    return "data:image/gif;base64,";
  } else if (header.includes("data:")) {
    return "";
  } else {
    return null;
  }
}
