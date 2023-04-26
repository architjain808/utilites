const fileInput = document.getElementById("file-upload");
const fileName = document.getElementById("file-name");
let file =""
fileInput.addEventListener("change", (e) => {
  fileName.innerText = e.target.files[0].name;
  file = e.target.files[0]
});

function resize() {
  const sizeInput = document.querySelector("#exampleFormControlInput1");
    const maxSize = parseInt(sizeInput.value);
    resizeAndDownloadImage(file, maxSize)
}
function resizeAndDownloadImage(file, size) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(event) {
      const img = new Image();
      img.src = event.target.result;
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob(function(blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'resized-image.jpg';
          link.click();
        }, 'image/jpeg', 1);
      }
    }
  }
  
