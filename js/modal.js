const showModalBtn = document.querySelector(".show-modal");
const closeBtn = document.querySelector(".clear-cart");
const closeConfirmBtn = document.querySelector(".close-confirm-modal");


const modal = document.querySelector(".cart");
const backDrop = document.querySelector(".backdrop");

showModalBtn.addEventListener('click', () => {
    modal.style.opacity = "1";
    // modal.style.transform = "translateY(20vh)";
    modal.style.top = "20%";
    backDrop.style.display = "block";

});


function closeModal() {
    modal.style.opacity = "0";
    // modal.style.transform = "translateY(-100vh)";
    modal.style.top = "-100%";
    backDrop.style.display = "none";
}
closeBtn.addEventListener('click', closeModal);
closeConfirmBtn.addEventListener('click', closeModal);
backDrop.addEventListener('click', closeModal);