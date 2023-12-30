const mainSkills = document.getElementById("main-skills");
const mainPortfolio = document.getElementById("main-portfolio");
const mainVideo = document.getElementById("main-video");
const mainPrice = document.getElementById("main-price");
const mainFeedback = document.getElementById("main-feedback");
const headerItemsRightPartList = document.getElementById("header-items-right-part-list");
headerItemsRightPartList.addEventListener('click', (event) => {
  if (event.target.closest('.header__items-right-part-list-element-link-skills')) {
    mainSkills.scrollIntoView({ behavior: 'smooth' });
  }
  else if (event.target.closest('.header__items-right-part-list-element-link-portfolio')) {
    mainPortfolio.scrollIntoView({ behavior: 'smooth' });
  }
  else if (event.target.closest('.header__items-right-part-list-element-link-video')) {
    mainVideo.scrollIntoView({ behavior: 'smooth' });
  }
  else if (event.target.closest('.header__items-right-part-list-element-link-price')) {
    mainPrice.scrollIntoView({ behavior: 'smooth' });
  }
  else if (event.target.closest('.header__items-right-part-list-element-link-contacts')) {
    mainFeedback.scrollIntoView({ behavior: 'smooth' });
  };

});


const headerItemsRightPartMenuButton = document.getElementById("header-items-right-part-menu-button");
const asideButton = document.getElementById("aside-button");
const asideWrapper = document.getElementById("aside-wrapper");
headerItemsRightPartMenuButton.addEventListener('click', () => {
  asideWrapper.style.visibility = 'visible';
  asideWrapper.style.opacity = 1;
});
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('aside-wrapper') || event.target.closest('.aside__button')) {
    asideWrapper.style.visibility = 'hidden';
    asideWrapper.style.opacity = 0;
  }
});
asideWrapper.addEventListener('click', (event) => {
  if (event.target.closest('.aside__list-element-button-skills')) {
    mainSkills.scrollIntoView({ behavior: 'smooth' });
    asideWrapper.style.visibility = 'hidden';
    asideWrapper.style.opacity = 0;
  }
  else if (event.target.closest('.aside__list-element-button-portfolio')) {
    mainPortfolio.scrollIntoView({ behavior: 'smooth' });
    asideWrapper.style.visibility = 'hidden';
    asideWrapper.style.opacity = 0;
  }
  else if (event.target.closest('.aside__list-element-button-video')) {
    mainVideo.scrollIntoView({ behavior: 'smooth' });
    asideWrapper.style.visibility = 'hidden';
    asideWrapper.style.opacity = 0;
  }
  else if (event.target.closest('.aside__list-element-button-price')) {
    mainPrice.scrollIntoView({ behavior: 'smooth' });
    asideWrapper.style.visibility = 'hidden';
    asideWrapper.style.opacity = 0;
  }
  else if (event.target.closest('.aside__list-element-button-contacts')) {
    mainFeedback.scrollIntoView({ behavior: 'smooth' });
    asideWrapper.style.visibility = 'hidden';
    asideWrapper.style.opacity = 0;
  };
});


const mainPortfolioNavigation = document.getElementById("main-portfolio-navigation");
const mainPortfolioNavigationButtonWinter = document.getElementById("main-portfolio-navigation-button-winter");
const mainPortfolioNavigationButtonSpring = document.getElementById("main-portfolio-navigation-button-spring");
const mainPortfolioNavigationButtonSummer = document.getElementById("main-portfolio-navigation-button-summer");
const mainPortfolioNavigationButtonAutumn = document.getElementById("main-portfolio-navigation-button-autumn");
const mainPortfolioImagesImage1 = document.getElementById("main-portfolio-images-image-1");
const mainPortfolioImagesImage2 = document.getElementById("main-portfolio-images-image-2");
const mainPortfolioImagesImage3 = document.getElementById("main-portfolio-images-image-3");
const mainPortfolioImagesImage4 = document.getElementById("main-portfolio-images-image-4");
const mainPortfolioImagesImage5 = document.getElementById("main-portfolio-images-image-5");
const mainPortfolioImagesImage6 = document.getElementById("main-portfolio-images-image-6");
mainPortfolioNavigation.addEventListener('click', (event) => {
  if (event.target.closest('.main__portfolio-navigation-button-winter')) {
    mainPortfolioNavigationButtonWinter.style.color = 'black';
    mainPortfolioNavigationButtonWinter.style.backgroundColor = '#bdae82';
    mainPortfolioNavigationButtonSpring.style.color = '#bdae82';
    mainPortfolioNavigationButtonSpring.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonSummer.style.color = '#bdae82';
    mainPortfolioNavigationButtonSummer.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonAutumn.style.color = '#bdae82';
    mainPortfolioNavigationButtonAutumn.style.backgroundColor = 'black';
    mainPortfolioImagesImage1.src = '/images/winter-1.jpg';
    mainPortfolioImagesImage2.src = '/images/winter-2.jpeg';
    mainPortfolioImagesImage3.src = '/images/winter-3.jpg';
    mainPortfolioImagesImage4.src = '/images/winter-4.jpeg';
    mainPortfolioImagesImage5.src = '/images/winter-5.jpeg';
    mainPortfolioImagesImage6.src = '/images/winter-6.jpeg';
  }
  else if (event.target.closest('.main__portfolio-navigation-button-spring')) {
    mainPortfolioNavigationButtonWinter.style.color = '#bdae82';
    mainPortfolioNavigationButtonWinter.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonSpring.style.color = 'black';
    mainPortfolioNavigationButtonSpring.style.backgroundColor = '#bdae82';
    mainPortfolioNavigationButtonSummer.style.color = '#bdae82';
    mainPortfolioNavigationButtonSummer.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonAutumn.style.color = '#bdae82';
    mainPortfolioNavigationButtonAutumn.style.backgroundColor = 'black';
    mainPortfolioImagesImage1.src = '/images/spring-1.png';
    mainPortfolioImagesImage2.src = '/images/spring-2.png';
    mainPortfolioImagesImage3.src = '/images/spring-3.png';
    mainPortfolioImagesImage4.src = '/images/spring-4.png';
    mainPortfolioImagesImage5.src = '/images/spring-5.png';
    mainPortfolioImagesImage6.src = '/images/spring-6.png';
  }
  else if (event.target.closest('.main__portfolio-navigation-button-summer')) {
    mainPortfolioNavigationButtonWinter.style.color = '#bdae82';
    mainPortfolioNavigationButtonWinter.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonSpring.style.color = '#bdae82';
    mainPortfolioNavigationButtonSpring.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonSummer.style.color = 'black';
    mainPortfolioNavigationButtonSummer.style.backgroundColor = '#bdae82';
    mainPortfolioNavigationButtonAutumn.style.color = '#bdae82';
    mainPortfolioNavigationButtonAutumn.style.backgroundColor = 'black';
    mainPortfolioImagesImage1.src = '/images/summer-1.png';
    mainPortfolioImagesImage2.src = '/images/summer-2.png';
    mainPortfolioImagesImage3.src = '/images/summer-3.png';
    mainPortfolioImagesImage4.src = '/images/summer-4.png';
    mainPortfolioImagesImage5.src = '/images/summer-5.png';
    mainPortfolioImagesImage6.src = '/images/summer-6.png';
  }
  else if (event.target.closest('.main__portfolio-navigation-button-autumn')) {
    mainPortfolioNavigationButtonWinter.style.color = '#bdae82';
    mainPortfolioNavigationButtonWinter.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonSpring.style.color = '#bdae82';
    mainPortfolioNavigationButtonSpring.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonSummer.style.color = '#bdae82';
    mainPortfolioNavigationButtonSummer.style.backgroundColor = 'black';
    mainPortfolioNavigationButtonAutumn.style.color = 'black';
    mainPortfolioNavigationButtonAutumn.style.backgroundColor = '#bdae82';
    mainPortfolioImagesImage1.src = '/images/autumn-1.svg';
    mainPortfolioImagesImage2.src = '/images/autumn-2.svg';
    mainPortfolioImagesImage3.src = '/images/autumn-3.svg';
    mainPortfolioImagesImage4.src = '/images/autumn-4.svg';
    mainPortfolioImagesImage5.src = '/images/autumn-5.svg';
    mainPortfolioImagesImage6.src = '/images/autumn-6.svg';
  };
});


const mainVideoContainerButton = document.getElementById("main__video_container_button");
const mainVideoContainerPlayer = document.getElementById("main__video_container_player");
mainVideoContainerButton.addEventListener("click", () => {
  if (mainVideoContainerPlayer.paused) {
    mainVideoContainerPlayer.play();
    mainVideoContainerButton.style.visibility = 'hidden';
    mainVideoContainerPlayer.controls = 'controls';
  } else {
    mainVideoContainerPlayer.pause();
  };
});


const mainFeedbackForm = document.getElementById("main__feedback_form");
const mainFeedbackFormInputEmail = document.getElementById("main__feedback_form_input_email");
const mainFeedbackFormInputPhone = document.getElementById("main__feedback_form_input_phone");
const mainFeedbackFormInputMessage = document.getElementById("main__feedback_form_input_message");
const mainFeedbackFormSendButton = document.getElementById("main-feedback-form-send-button");
mainFeedbackForm.addEventListener('click', (event) => {
  if (event.target.id === 'main__feedback_form_input_email') {
    mainFeedbackFormInputEmail.style.opacity = 1;
    mainFeedbackFormInputPhone.style.opacity = 0.8;
    mainFeedbackFormInputMessage.style.opacity = 0.8;
  }
  else if (event.target.id === 'main__feedback_form_input_phone') {
    mainFeedbackFormInputEmail.style.opacity = 0.8;
    mainFeedbackFormInputPhone.style.opacity = 1;
    mainFeedbackFormInputMessage.style.opacity = 0.8;
  }
  else if (event.target.id === 'main__feedback_form_input_message') {
    mainFeedbackFormInputEmail.style.opacity = 0.8;
    mainFeedbackFormInputPhone.style.opacity = 0.8;
    mainFeedbackFormInputMessage.style.opacity = 1;
  };
});