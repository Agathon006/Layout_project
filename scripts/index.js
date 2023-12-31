const headerItemsRightPartLanguageLinkRu = document.querySelector('#header-items-right-part-language-link-ru');
headerItemsRightPartLanguageLinkRu.addEventListener('click', () =>
  alert('Unfortunately, this functionality is under develepoment')
);

const headerItemsRightPartMenuButton = document.querySelector('#header-items-right-part-menu-button');
const asideWrapper = document.querySelector('#aside-wrapper');
headerItemsRightPartMenuButton.addEventListener('click', () => {
  asideWrapper.classList.remove('aside-wrapper');
  asideWrapper.classList.add('aside-wrapper-opened');
});
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('aside-wrapper-opened') || event.target.closest('#aside-button')) {
    asideWrapper.classList.remove('aside-wrapper-opened');
    asideWrapper.classList.add('aside-wrapper');
  }
});
asideWrapper.addEventListener('click', (event) => {
  if (event.target.closest('#header-items-right-part-list-element-link-skills')) {
    asideWrapper.classList.remove('aside-wrapper-opened');
    asideWrapper.classList.add('aside-wrapper');
  }
  else if (event.target.closest('#header-items-right-part-list-element-link-portfolio')) {
    asideWrapper.classList.remove('aside-wrapper-opened');
    asideWrapper.classList.add('aside-wrapper');
  }
  else if (event.target.closest('#header-items-right-part-list-element-link-video')) {
    asideWrapper.classList.remove('aside-wrapper-opened');
    asideWrapper.classList.add('aside-wrapper');
  }
  else if (event.target.closest('#header-items-right-part-list-element-link-price')) {
    asideWrapper.classList.remove('aside-wrapper-opened');
    asideWrapper.classList.add('aside-wrapper');
  }
  else if (event.target.closest('#header-items-right-part-list-element-link-contacts')) {
    asideWrapper.classList.remove('aside-wrapper-opened');
    asideWrapper.classList.add('aside-wrapper');
  };
});


const mainPortfolioNavigation = document.querySelector('#main-portfolio-navigation');
const mainPortfolioNavigationButtonWinter = document.querySelector('#main-portfolio-navigation-button-winter');
const mainPortfolioNavigationButtonSpring = document.querySelector('#main-portfolio-navigation-button-spring');
const mainPortfolioNavigationButtonSummer = document.querySelector('#main-portfolio-navigation-button-summer');
const mainPortfolioNavigationButtonAutumn = document.querySelector('#main-portfolio-navigation-button-autumn');
const mainPortfolioImagesImage1 = document.querySelector('#main-portfolio-images-image-1');
const mainPortfolioImagesImage2 = document.querySelector('#main-portfolio-images-image-2');
const mainPortfolioImagesImage3 = document.querySelector('#main-portfolio-images-image-3');
const mainPortfolioImagesImage4 = document.querySelector('#main-portfolio-images-image-4');
const mainPortfolioImagesImage5 = document.querySelector('#main-portfolio-images-image-5');
const mainPortfolioImagesImage6 = document.querySelector('#main-portfolio-images-image-6');
mainPortfolioNavigation.addEventListener('click', (event) => {
  if (event.target.closest('#main-portfolio-navigation-button-winter')) {
    mainPortfolioNavigationButtonWinter.classList.add('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonWinter.classList.remove('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonSpring.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonSpring.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonSummer.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonSummer.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonAutumn.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonAutumn.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioImagesImage1.src = '../images/weather/winter/winter-1.jpg';
    mainPortfolioImagesImage1.alt = 'winter-image';
    mainPortfolioImagesImage2.src = '../images/weather/winter/winter-2.jpeg';
    mainPortfolioImagesImage2.alt = 'winter-image';
    mainPortfolioImagesImage3.src = '../images/weather/winter/winter-3.jpg';
    mainPortfolioImagesImage3.alt = 'winter-image';
    mainPortfolioImagesImage4.src = '../images/weather/winter/winter-4.jpeg';
    mainPortfolioImagesImage4.alt = 'winter-image';
    mainPortfolioImagesImage5.src = '../images/weather/winter/winter-5.jpeg';
    mainPortfolioImagesImage5.alt = 'winter-image';
    mainPortfolioImagesImage6.src = '../images/weather/winter/winter-6.jpeg';
    mainPortfolioImagesImage6.alt = 'winter-image';
  }
  else if (event.target.closest('#main-portfolio-navigation-button-spring')) {
    mainPortfolioNavigationButtonWinter.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonWinter.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonSpring.classList.add('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonSpring.classList.remove('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonSummer.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonSummer.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonAutumn.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonAutumn.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioImagesImage1.src = '../images/weather/spring/spring-1.png';
    mainPortfolioImagesImage1.alt = 'spring-image';
    mainPortfolioImagesImage2.src = '../images/weather/spring/spring-2.png';
    mainPortfolioImagesImage2.alt = 'spring-image';
    mainPortfolioImagesImage3.src = '../images/weather/spring/spring-3.png';
    mainPortfolioImagesImage3.alt = 'spring-image';
    mainPortfolioImagesImage4.src = '../images/weather/spring/spring-4.png';
    mainPortfolioImagesImage4.alt = 'spring-image';
    mainPortfolioImagesImage5.src = '../images/weather/spring/spring-5.png';
    mainPortfolioImagesImage5.alt = 'spring-image';
    mainPortfolioImagesImage6.src = '../images/weather/spring/spring-6.png';
    mainPortfolioImagesImage6.alt = 'spring-image';
  }
  else if (event.target.closest('#main-portfolio-navigation-button-summer')) {
    mainPortfolioNavigationButtonWinter.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonWinter.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonSpring.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonSpring.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonSummer.classList.add('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonSummer.classList.remove('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonAutumn.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonAutumn.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioImagesImage1.src = '../images/weather/summer/summer-1.png';
    mainPortfolioImagesImage1.alt = 'summer-image';
    mainPortfolioImagesImage2.src = '../images/weather/summer/summer-2.png';
    mainPortfolioImagesImage2.alt = 'summer-image';
    mainPortfolioImagesImage3.src = '../images/weather/summer/summer-3.png';
    mainPortfolioImagesImage3.alt = 'summer-image';
    mainPortfolioImagesImage4.src = '../images/weather/summer/summer-4.png';
    mainPortfolioImagesImage4.alt = 'summer-image';
    mainPortfolioImagesImage5.src = '../images/weather/summer/summer-5.png';
    mainPortfolioImagesImage5.alt = 'summer-image';
    mainPortfolioImagesImage6.src = '../images/weather/summer/summer-6.png';
    mainPortfolioImagesImage6.alt = 'summer-image';
  }
  else if (event.target.closest('#main-portfolio-navigation-button-autumn')) {
    mainPortfolioNavigationButtonWinter.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonWinter.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonSpring.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonSpring.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonSummer.classList.remove('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonSummer.classList.add('main__portfolio-navigation-inactive-button');
    mainPortfolioNavigationButtonAutumn.classList.add('main__portfolio-navigation-active-button');
    mainPortfolioNavigationButtonAutumn.classList.remove('main__portfolio-navigation-inactive-button');
    mainPortfolioImagesImage1.src = '../images/weather/autumn/autumn-1.svg';
    mainPortfolioImagesImage1.alt = 'autumn-image';
    mainPortfolioImagesImage2.src = '../images/weather/autumn/autumn-2.svg';
    mainPortfolioImagesImage2.alt = 'autumn-image';
    mainPortfolioImagesImage3.src = '../images/weather/autumn/autumn-3.svg';
    mainPortfolioImagesImage3.alt = 'autumn-image';
    mainPortfolioImagesImage4.src = '../images/weather/autumn/autumn-4.svg';
    mainPortfolioImagesImage4.alt = 'autumn-image';
    mainPortfolioImagesImage5.src = '../images/weather/autumn/autumn-5.svg';
    mainPortfolioImagesImage5.alt = 'autumn-image';
    mainPortfolioImagesImage6.src = '../images/weather/autumn/autumn-6.svg';
    mainPortfolioImagesImage6.alt = 'autumn-image';
  };
});


const mainVideoContainerButton = document.querySelector('#main__video_container_button');
const mainVideoContainerPlayer = document.querySelector('#main__video_container_player');
mainVideoContainerButton.addEventListener('click', () => {
  mainVideoContainerPlayer.play();
  mainVideoContainerButton.style.visibility = 'hidden';
  mainVideoContainerPlayer.controls = 'controls';
});


const mainFeedbackForm = document.querySelector('#main__feedback_form');
const mainFeedbackFormInputEmail = document.querySelector('#main__feedback_form_input_email');
const mainFeedbackFormInputPhone = document.querySelector('#main__feedback_form_input_phone');
const mainFeedbackFormInputMessage = document.querySelector('#main__feedback_form_input_message');
const mainFeedbackFormSendButton = document.querySelector('#main-feedback-form-send-button');
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