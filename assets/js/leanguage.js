// button leanguage
var btnEng = document.getElementById("btnEng");
var btnId = document.getElementById("btnId");
var imgLng = document.getElementById("imgLng");
var linkcv = document.getElementById("linkcv");

// menu Navbar
var homeMenuText = document.getElementById("homeMenuText");
var aboutMenuText = document.getElementById("aboutMenuText");
var skillMenuText = document.getElementById("skillMenuText");
var projectMenuText = document.getElementById("projectMenuText");
var contactMenuText = document.getElementById("contactMenuText");

// About
var headingAbout = document.getElementById("headingAbout");
var about1 = document.getElementById("about1");
var about2 = document.getElementById("about2");

// Skill
var headingSkill = document.getElementById("headingSkill");

// Project
var headingProject = document.getElementById("headingProject");
var btnTextAll = document.getElementById("btnAll");
var viewSite = document.querySelectorAll(".viewSite");
var viewGithub = document.querySelectorAll(".viewGithub");
var viewYt = document.querySelectorAll(".viewYt");
var viewMore = document.querySelectorAll(".viewMore");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");

// Contact
var headingContact = document.getElementById("headingContact");
var formName = document.getElementById("formName");
var formEmail = document.getElementById("formEmail");
var formMessage = document.getElementById("formMessage");
var btnSubmit = document.getElementById("btnSubmit");
var btnLoding = document.getElementById("btnLoding");
var succesMessage = document.getElementById("succesMessage");
var failMessage = document.getElementById("failMessage");

//footer
var footerText = document.getElementById("footerText");

function checkRegion() {
  idLeanguage();
  $.get(
    "https://ipinfo.io",
    function (response) {
      if (response.country == "ID") {
        idLeanguage();
      } else {
        engLeanguage();
      }
    },
    "json"
  );
}

window.onload = function () {
  checkRegion();
  // engLeanguage();
};

btnEng.onclick = function () {
  engLeanguage();
};

btnId.onclick = function () {
  idLeanguage();
};

function engLeanguage() {
  imgLng.src = "assets/image/eng.png";


  homeMenuText.innerHTML = '<i class="bi bi-house"></i> Home';
  aboutMenuText.innerHTML = '<i class="bi bi-person"></i> About';
  skillMenuText.innerHTML = '<i class="bi bi-clipboard-data"></i> Skill';
  projectMenuText.innerHTML = '<i class="bi bi-diagram-2-fill"></i> Project';
  contactMenuText.innerHTML = '<i class="bi bi-telephone"></i> Contact';

  headingAbout.innerHTML = "About Me";
  about1.innerHTML = "My name is Roy Aditya, 22 years old. I started to enter the world of ornamental fish since second semester.";
  about2.innerHTML = "I have a lot of experience cultivating ornamental fish in both ground and tarpaulin ponds.";

  headingSkill.innerHTML = "My Skills";

  headingProject.innerHTML = "My Projects";
  btnTextAll.innerHTML = "All";
  viewSite.forEach((element) => {
    element.innerHTML = '<i class="bi bi-globe"></i> View Site';
  });
  viewGithub.forEach((element) => {
    element.innerHTML = '<i class="bi bi-whatsapp"></i> Order now';
  });
  viewMore.forEach((element) => {
    element.innerHTML = '<i class="bi bi-eye-fill"></i> View More';
  });
  card1.innerHTML = "Process and Methods of Cultivating Ornamental Fish for Beginners";
  card2.innerHTML = "HOW TO CULTIVATE MOLLY FISH IN A TARBLE FISH <br /> &nbsp;";
  card3.innerHTML = "HOW TO CULTIVATE CHEF FISH IN LAND POOL <br> &nbsp;";
  card4.innerHTML = "HOW TO CULTIVATE KOI FISH In the Rainy Season <br /> &nbsp;";
  card5.innerHTML = "About Guide to Raising Ornamental Fish for Beginners";
  card6.innerHTML = "About Guide to Raising Ornamental Fish for Beginners";
  card7.innerHTML = "About Guide to Raising Ornamental Fish for Beginners";
  card8.innerHTML = "Process and Methods of Cultivating Ornamental Fish for Beginners";
  card9.innerHTML = "Processes and Methods of Cultivating Ornamental Fish for Beginners";

  headingContact.innerHTML = "Contact Me";
  formName.innerHTML = "Full Name";
  formEmail.innerHTML = "Email";
  formMessage.innerHTML = "Message";
  btnSubmit.innerHTML = 'Submit <i class="bi bi-cursor-fill"></i>';
  btnLoding.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
  succesMessage.innerHTML = '<strong>Thank you!</strong> We have received your message. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></i>';
  failMessage.innerHTML = '<strong>Ups!</strong> We cannot accept your message. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></i>';

  footerText.innerHTML =
    '<p>Created with <i class="bi bi-heart-fill text-danger"></i> by <a href="https://github.com/raksamalafarm" class="text-white fw-bold" target="_blank" rel="noopener noreferrer"> Raksamala Farm</a></p>';
}

function idLeanguage() {
  imgLng.src = "assets/image/indonesia.png";



  homeMenuText.innerHTML = '<i class="bi bi-house"></i> Utama';
  aboutMenuText.innerHTML = '<i class="bi bi-person"></i> Tentang';
  skillMenuText.innerHTML = '<i class="bi bi-clipboard-data"></i> Jenis-Jenis Ikan';
  projectMenuText.innerHTML = '<i class="bi bi-diagram-2-fill"></i> Proyek';
  contactMenuText.innerHTML = '<i class="bi bi-telephone"></i> Kontak';

  headingAbout.innerHTML = "Tentang Saya";
  about1.innerHTML = "Nama saya Roy Aditya berusia 22 tahun. Saya mulai terjun ke dunia ikan hias sejak semester 2.";
  about2.innerHTML = "Saya memiliki pengalaman cukup lama pada budidaya ikan hias di kolam tanah maupun kolam terpal.";

  headingSkill.innerHTML = "Jenis-Jenis Ikan";

  headingProject.innerHTML = "Proyek Saya";
  btnTextAll.innerHTML = "Semua";
  
  viewMore.forEach((element) => {
    element.innerHTML = '<i class="bi bi-eye-fill"></i> Lihat lebih banyak';
  });
  card1.innerHTML = "Proses dan Cara Budidaya Ikan Hias Untuk Pemula";
  card2.innerHTML = "CARA BUDIDAYA IKAN MOLLY DI KOLAM TERPAL <br /> &nbsp;";
  card3.innerHTML = "CARA BUDIDAYA IKAN KOKI DI KOLAM TANAH <br> &nbsp;";
  card4.innerHTML = "CARA BUDIDAYA IKAN KOI Di musim Hujan <br /> &nbsp;";
  card5.innerHTML = "Tentang Panduan Memelihara Ikan Hias untuk Pemula";
  card6.innerHTML = "Tentang Panduan Memelihara Ikan Hias untuk Pemula";
  card7.innerHTML = "Tentang Panduan Memelihara Ikan Hias untuk Pemula";
  card8.innerHTML = "Proses dan Cara Budidaya Ikan Hias Untuk Pemula";
  card9.innerHTML = "Proses dan Cara Budidaya Ikan Hias Untuk Pemula";

  headingContact.innerHTML = "Kontak Saya";
  formName.innerHTML = "Nama Lengkap";
  formEmail.innerHTML = "Surel";
  formMessage.innerHTML = "Pesan";
  btnSubmit.innerHTML = 'Kirim <i class="bi bi-cursor-fill"></i>';
  btnLoding.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Memuat...';
  succesMessage.innerHTML = '<strong>Terimakasih!</strong> Kami telah menerima pesan Anda. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></i>';
  failMessage.innerHTML = '<strong>Ups!</strong> Kami tidak dapat menerima pesan Anda. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></i>';

  footerText.innerHTML =
    '<p>Dibuat <i class="bi bi-heart-fill text-danger"></i> oleh <a href="https://github.com/raksamalafarm" class="text-white fw-bold" target="_blank" rel="noopener noreferrer"> Raksamala Farm</a></p>';
}
