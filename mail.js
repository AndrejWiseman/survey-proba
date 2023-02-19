const firebaseConfig = {
    apiKey: "AIzaSyCE7U8N8P2vVj4YqSNRtTXVG6yn5OSA_w0",
    authDomain: "contactform-1fec2.firebaseapp.com",
    databaseURL: "https://contactform-1fec2-default-rtdb.firebaseio.com",
    projectId: "contactform-1fec2",
    storageBucket: "contactform-1fec2.appspot.com",
    messagingSenderId: "417069802152",
    appId: "1:417069802152:web:4242f609ac70c693a6989d"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);




function submitForm(e) {
  e.preventDefault();

  // var name = getElementVal("name");
  // var emailid = getElementVal("emailid");
  // var msgContent = getElementVal("msgContent");

  var pol = document.querySelector('input[name="pol"]:checked').value;
  var starost = document.querySelector('input[name="starost"]:checked').value;
  var volim_pol = document.querySelector('input[name="volim-pol"]:checked').value;
  var veza = document.querySelector('input[name="veza"]:checked').value;

  var br_partnera = document.querySelector('input[name="br_partnera"]:checked').value;
  var sex_sedmicno = document.querySelector('input[name="sex_sedmicno"]:checked').value;
  var sex_trajanje = document.querySelector('input[name="sex_trajanje"]:checked').value;
  var sex_istiPol = document.querySelector('input[name="sex_istiPol"]:checked').value;
  var sex_istiPolZamisljali = document.querySelector('input[name="sex_istiPolZamisljali"]:checked').value;
  var vise_partnera = document.querySelector('input[name="vise_partnera"]:checked').value;
  var sex_poza = document.querySelector('input[name="sex_poza"]:checked').value;
  var da_li_ste_masturbirali = document.querySelector('input[name="da_li_ste_masturbirali"]:checked').value;
  var masturbirali_vreme = document.querySelector('input[name="masturbirali_vreme"]:checked').value;
  var oralno_zadovoljavali = document.querySelector('input[name="oralno_zadovoljavali"]:checked').value;
  var oralno_vas = document.querySelector('input[name="oralno_vas"]:checked').value;
  var oralno_redovno = document.querySelector('input[name="oralno_redovno"]:checked').value;
  var analni = document.querySelector('input[name="analni"]:checked').value;
  var sperma = document.querySelector('input[name="sperma"]:checked').value;
  var spermaStomak = document.querySelector('input[name="spermaStomak"]:checked').value;
  var spermaGrudi = document.querySelector('input[name="spermaGrudi"]:checked').value;
  var spermaLice = document.querySelector('input[name="spermaLice"]:checked').value;
  var spermaGutanje = document.querySelector('input[name="spermaGutanje"]:checked').value;
  var spermaGuza = document.querySelector('input[name="spermaGuza"]:checked').value;
  var uUsta = document.querySelector('input[name="uUsta"]:checked').value;

  var klasicniOcena = document.querySelector('input[name="klasicniOcena"]:checked').value;
  var doggyOcena = document.querySelector('input[name="doggyOcena"]:checked').value;
  var oralniOcena = document.querySelector('input[name="oralniOcena"]:checked').value;
  var analniOcena = document.querySelector('input[name="analniOcena"]:checked').value;


  // saveMessages(name, emailid, msgContent, pol);
  saveMessages(pol, starost, volim_pol, veza, br_partnera, sex_sedmicno, sex_trajanje, sex_istiPol, sex_istiPolZamisljali, vise_partnera, sex_poza, da_li_ste_masturbirali, masturbirali_vreme, oralno_zadovoljavali, oralno_vas, oralno_redovno, analni, sperma, spermaStomak, spermaGrudi, spermaLice, spermaGutanje, spermaGuza, klasicniOcena, doggyOcena, oralniOcena, analniOcena, uUsta );

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (pol, starost, volim_pol, veza, br_partnera, sex_sedmicno, sex_trajanje, sex_istiPol, sex_istiPolZamisljali, vise_partnera, sex_poza, da_li_ste_masturbirali, masturbirali_vreme, oralno_zadovoljavali, oralno_vas, oralno_redovno, analni, sperma, spermaStomak, spermaGrudi, spermaLice, spermaGutanje, spermaGuza, klasicniOcena, doggyOcena, oralniOcena, analniOcena, uUsta ) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    pol: pol,
    starost: starost,
    volim_pol: volim_pol,
    veza: veza,
    br_partnera: br_partnera,
      sex_sedmicno: sex_sedmicno,
      sex_trajanje: sex_trajanje,
      sex_istiPol: sex_istiPol,
      sex_istiPolZamisljali: sex_istiPolZamisljali,
      vise_partnera: vise_partnera,
      sex_poza: sex_poza,
      da_li_ste_masturbirali: da_li_ste_masturbirali,
      masturbirali_vreme: masturbirali_vreme,
      oralno_zadovoljavali: oralno_zadovoljavali,
      oralno_vas: oralno_vas,
      oralno_redovno: oralno_redovno,
      analni: analni,
      sperma: sperma,
      spermaStomak: spermaStomak,
      spermaGrudi: spermaGrudi,
      spermaLice: spermaLice,
      spermaGutanje: spermaGutanje,
      spermaGuza: spermaGuza,
      uUsta: uUsta,
    klasicniOcena: klasicniOcena,
    doggyOcena: doggyOcena,
    oralniOcena: oralniOcena,
    analniOcena: analniOcena,

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};