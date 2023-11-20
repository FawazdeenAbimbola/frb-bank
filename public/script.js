const menuButton = document.querySelector('#menu');
const profileButton = document.querySelector('#user');
const closeButton = document.querySelector('#closeButton');

const errorCancel = document.querySelector('#error-cancel');
menuButton.addEventListener('click', () => {
    document.querySelector('.profile-container').style.width = '100%';
});
profileButton.addEventListener('click', () => {
    document.querySelector('.profile-container').style.width = '100%';
});
closeButton.addEventListener('click', () => {
    document.querySelector('.profile-container').style.width = '0%';
});




const sendButton = document.querySelector('.send-btn');
const backButton = document.querySelector('#back-btn');
const sendSection = document.querySelector('.send-section');
sendButton.addEventListener('click', () => {
    sendSection.style.height = "100%";
});
backButton.addEventListener('click', () => {
    sendSection.style.height = "0%";
});