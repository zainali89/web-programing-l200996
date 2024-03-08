let tableVisibility = false; // Variable to track table visibility

function viewData() {
  let table = document.getElementById("viewrecord");

  // Toggle table visibility
  if (tableVisibility) {
    table.style.visibility = "hidden";
    tableVisibility = false;
  } else {
    table.style.visibility = "visible";
    tableVisibility = true;
  }
}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!inputText.value.match(mailformat)) {
    alert("You have entered an invalid email address!");
    document.form1.email.focus();
    return false;
  }
}

let form1 = document.getElementById("form1");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let street = document.getElementById("street");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let zip = document.getElementById("zip");
  let file1 = document.getElementById("file1");
  let cletter = document.getElementById("cletter");
  let heducation = document.getElementById("heducation");
  let sname = document.getElementById("sname");
  let areastudy = document.getElementById("areastudy");
  let gyear = document.getElementById("gyear");
  let ehistory = document.getElementById("ehistory");
  let cname = document.getElementById("cname");
  let edate = document.getElementById("edate");
  let jobres = document.getElementById("jobres");
  let revskills = document.getElementById("revskills");
  let certification = document.getElementById("certification");
  let sdate = document.getElementById("sdate");
  let workschedule = document.getElementById("workschedule");
  let relocate = document.getElementById("relocate");
  let rname = document.getElementById("rname");
  let refcontact = document.getElementById("refcontact");
  let relationship = document.getElementById("relationship");
  let workforcompany = document.getElementById("workforcompany");
  let term = document.getElementById("term");
  let privacy = document.getElementById("privacy");

  console.log(
    `You submitted data here: ${fname.value} , ${lname.value} , ${phone.value} , ${email.value} , ${street.value} ,
    ${city.value} , ${state.value} , ${zip.value} , ${file1.value} , ${cletter.value} , ${heducation.value} ,
    ${sname.value} , ${areastudy.value} , ${gyear.value} , ${ehistory.value} , ${cname.value} , ${edate.value} ,
    ${jobres.value} , ${revskills.value} , ${certification.value} , ${sdate.value} , ${workschedule.value} , ${relocate.value} ,
    ${rname.value} , ${refcontact.value} , ${relationship.value} , ${workforcompany.value} , ${term.value} , ${privacy.value}`
  );
});

let formDataArray = []; // Array to store form data
let y = 1;
document.getElementById("form1").addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = {
    // Create object to represent form data
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    street: document.getElementById("street").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value,
    file1: document.getElementById("file1").value,
    cletter: document.getElementById("cletter").value,
    heducation: document.getElementById("heducation").value,
    sname: document.getElementById("sname").value,
    areastudy: document.getElementById("areastudy").value,
    gyear: document.getElementById("gyear").value,
    ehistory: document.getElementById("ehistory").value,
    cname: document.getElementById("cname").value,
    edate: document.getElementById("edate").value,
    jobres: document.getElementById("jobres").value,
    revskills: document.getElementById("revskills").value,
    certification: document.getElementById("certification").value,
    sdate: document.getElementById("sdate").value,
    workschedule: document.getElementById("workschedule").value,
    relocate: document.getElementById("relocate").value,
    rname: document.getElementById("rname").value,
    refcontact: document.getElementById("refcontact").value,
    relationship: document.getElementById("relationship").value,
    workforcompany: document.getElementById("workforcompany").value,
    term: document.getElementById("term").checked,
    privacy: document.getElementById("privacy").checked,
  };

  formDataArray.push(formData); // Push form data object into array

  console.log("Form Data Array:", formDataArray); // Log the array to console
  var x = document.getElementById("tables").insertRow(-1);
  var c1 = x.insertCell(0);
  var c2 = x.insertCell(1);
  var c3 = x.insertCell(2);
  var c4 = x.insertCell(3);
  var c5 = x.insertCell(4);
  c1.innerHTML = y++;
  c2.innerHTML = fname.value;
  c3.innerHTML = lname.value;
  c4.innerHTML = phone.value;
  c5.innerHTML = email.value;
});

const formToReset = document.getElementById("form1");
formToReset.addEventListener("submit", (e) => {
  e.preventDefault();
  formToReset.reset();
});
