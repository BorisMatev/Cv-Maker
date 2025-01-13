window.addEventListener('load', function () {
  checkToken();
  loadContent();
});

function checkToken() {
  var token = localStorage.getItem("token");
  if (!token) {
    localStorage.clear();
    window.location.href = "/welcome";
  }
}

function loadContent() {
  const ids = [
    'name', 'lastName', 'email', 'phone', 'city', 'info', "hobbies", "language","network","link",
    'workplace', 'place', 'year', 'job', 'details',
    'workplace1', 'place1', 'year1', 'job1', 'details1',
    'workplace2', 'place2', 'year2', 'job2', 'details2',
    'class', 'place4', 'year4', 'school', 'details4',
    'class1', 'place5', 'year5', 'school1', 'details5',
    'class2', 'place6', 'year6', 'school2', 'details6'
  ];
  
  ids.forEach(id => {
    const value = localStorage.getItem(id);
    if (value) {
      document.getElementById(id).innerHTML = value;;
  
    }
  });
  
  const savedImage = localStorage.getItem('photo');
  if (savedImage) {
    document.getElementById('imageContainer').style.backgroundImage = `url(${savedImage})`;
    document.getElementById('dropdownMenuButton').style.backgroundImage = `url(${savedImage})`;
  }
}

function update(value, IdForChange) {
  var inputVal = value.value;
  document.getElementById(IdForChange).innerText = inputVal;
  localStorage.setItem(IdForChange, inputVal);
}

function download() {
  const element = document.getElementById('content');
  html2pdf().from(element).set({
    filename: 'myCV.pdf',
    html2canvas: { scale: 4 },
    jsPDF: {orientation: 'portrait', unit: 'in', compressPDF: true}
  }).save();
}

function logout() {
  localStorage.clear();
  window.location.href = "/welcome";
}
