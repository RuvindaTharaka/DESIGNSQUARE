function openPopup(popup, imageSrc, description) {
    popup.querySelector('img').src = imageSrc;
    popup.querySelector('.description').textContent = description;
    popup.classList.add('active');
    popup.nextElementSibling.classList.add('active');
}

function closePopup(popup) {
    popup.classList.remove('active');
    popup.nextElementSibling.classList.remove('active');
}

function addPopupFunctionality(containerClass) {
    const imgBoxes = document.querySelectorAll(`.${containerClass} .img_box`);
    const imgPopup = document.querySelector(`.${containerClass} .img_popup`);
    const imgPopupImg = imgPopup.querySelector('img');
    const imgPopupDesc = imgPopup.querySelector('.description');
    const closeBtn = document.querySelector(`.${containerClass} .close_btn`);
    const imgPopupBackground = document.querySelector(`.${containerClass} .img_popup_background`);

    imgBoxes.forEach((imgBox) => {
        imgBox.addEventListener('click', () => {
            const imageSrc = imgBox.querySelector('img').src;
            const description = imgBox.querySelector('.description').textContent;
            openPopup(imgPopup, imageSrc, description);
        });
    });

    imgPopupBackground.addEventListener('click', () => {
        closePopup(imgPopup);
    });

    closeBtn.addEventListener('click', () => {
        closePopup(imgPopup);
    });
}

// Call the function to add popup functionality to the project_image_container
addPopupFunctionality('project_image_container');

// Call the function to add popup functionality to the project_image_hide_container
addPopupFunctionality('project_image_hide_container');