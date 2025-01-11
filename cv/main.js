document.getElementById('imageInput').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;
      localStorage.setItem('photo', imageUrl);
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.style.backgroundImage = `url(${imageUrl})`;
    };
    reader.readAsDataURL(file);
  }
});
function download() {
  const element = document.getElementById('content');
  html2pdf()
    .from(element)
    .save('myCV .pdf');
}
function update(value, IdForChange) {
  var inputVal = value.value; // Get the input value
  document.getElementById(IdForChange).innerText = inputVal; // Update the H1 text
  localStorage.setItem(IdForChange, inputVal);
}