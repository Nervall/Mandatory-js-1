/* ---- Useful variables ---- */
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
let main = document.querySelector('#main');

/* ---- Changing text on header h1 ---- */
document.querySelector('h1').textContent = "Fruits & Vegetables Corp";

/* ---- Changing text and attribute to <a> in header ul ---- */
document.querySelector('header ul li:last-child a').textContent = 'Vegetables';
document.querySelector('header ul li:last-child a').setAttribute('href', '#vegetables');

/* ---- Swap #about and #contact ---- */
main.insertBefore(about, contact);

/* ---- Wrap text in a <p>-tag in #about---- */
let aboutText = document.querySelector('#about').textContent;
document.querySelector('#about').innerHTML = '<p>' + aboutText + '</p>';

/* ---- Create <H2> in #about and put it first ---- */
let h2About = document.createElement('h2');
h2About.textContent = 'About';
about.insertBefore(h2About, about.firstChild);

/* ---- Create <H2> in #contact and put it first ---- */
let h2Contact = document.createElement('h2');
h2Contact.textContent = 'Contact';
contact.insertBefore(h2Contact, contact.firstChild);

/* ---- Changing <TD> to <TH> in thead ---- */
let tdTag = document.querySelectorAll('thead tr td');
for (let i = 0; i < tdTag.length; i++) {
    let thTag = document.createElement('th');
    tdTag[i].replaceWith(thTag);
}
document.querySelector('thead tr th').textContent = 'Name';
document.querySelector('thead tr th:last-child').textContent = 'Email';

  /* ---- Adding main.css to <head> ---- */
let headTag = document.querySelector('head');
let createLink = document.createElement('link');
createLink.setAttribute('href', 'main.css');
createLink.setAttribute('rel', 'stylesheet');
createLink.setAttribute('type', 'text/css');
headTag.appendChild(createLink);

/* ---- Changing document title ---- */
document.title = "Fruits & Vegetables Corp";



