// data for all cards
const data = [
  {
    id: 1,
    detailUrl: '#_react',
    liveUrl: 'https://musong-to-do.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/To-do-List',
    img: 'images/works-images/front2.png',
    name: 'To Do List',
    desc: `It's an application that allows users to add, edit and remove items from the list. All data is saved to local storage`,
    technologies: ['javascript', 'html5', 'css', 'webpack'],
    skills: ['javascript', 'css', 'html5'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 2,
    detailUrl: '#_js',
    liveUrl: '/contribute-page',
    sourseUrl: '/contribute-page',
    img: 'images/works-images/html-css.jpg',
    name: 'html project',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s 
    with the relea`,
    technologies: ['javascript', 'ruby on rails', 'css'],
    skills: ['javascript', 'ruby on rails', 'postgres', 'html'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 3,
    detailUrl: '#_bootstrap',
    liveUrl: '/contribute-page',
    sourseUrl: '/contribute-page',
    img: 'images/works-images/gal-react.png',
    name: 'bootstrap project',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s 
    with the relea`,
    technologies: ['javascript', 'ruby on rails', 'postgres'],
    skills: ['javascript', 'ruby on rails', 'postgres', 'html'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 4,
    detailUrl: '#_rails',
    liveUrl: '/contribute-page',
    sourseUrl: '/contribute-page',
    img: 'images/works-images/gal-react.png',
    name: 'ruby on rails',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s 
    with the relea`,
    technologies: ['javascript', 'ruby on rails', 'postgres'],
    skills: ['javascript', 'ruby on rails', 'postgres', 'html'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 5,
    detailUrl: '#_rails',
    liveUrl: '/contribute-page',
    sourseUrl: '/contribute-page',
    img: 'images/works-images/gal-react.png',
    name: 'ruby on rails',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s 
    with the relea`,
    technologies: ['javascript', 'ruby on rails', 'postgres'],
    skills: ['javascript', 'ruby on rails', 'postgres', 'html'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 6,
    detailUrl: '#_rails',
    liveUrl: '/contribute-page',
    sourseUrl: '/contribute-page',
    img: 'images/works-images/gal-react.png',
    name: 'ruby on rails',
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s 
    with the relea`,
    technologies: ['javascript', 'ruby on rails', 'postgres'],
    skills: ['javascript', 'ruby on rails', 'postgres', 'html'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },

];

// SIDE-BAR
const sideBar = document.querySelector('.sidebar');
const openBtn = document.querySelector('#open');

openBtn.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});
sideBar.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});

// WORKS
const worksDom = document.querySelector('.cards-container');
const languagesDom = document.querySelector('#cards-container');
const popUpOverlay = document.querySelector('.popup-overlay');
let currenItem = 0;
let result = '';

// DISPLAYING WORKS DATA
const displayProjects = (projects) => {
  projects.map((item) => {
    const { technologies } = item;
    let allTechnologies = '';
    for (let i = 0; i < technologies.length; i += 1) {
      allTechnologies += `<li><button>${technologies[i]}</button></li>`;
    }
    result += `
  <div id=${item.detailUrl} class="project">
        <div class="image-wrapper">
            <img class="project-img" src=${item.img} alt="project image">
        </div>
            <div class="project-footer">
            <div class="project-title-wrapper">
                <h4>${item.name}</h4>
            </div>
            <ul class="project-buttons-wrapper">
               ${allTechnologies}
            </ul>
              <button id=${item.id.toString()} onClick = selectPopUp(this.id) class="section-button project-btn" data-id=${item.id}>
                  see project
              </button>
        </div>
    </div>
  `;
    return result;
  });
  worksDom.innerHTML = result;
  return result;
};

// CLOSE POPUP
function closePopUp() {
  popUpOverlay.classList.toggle('remove-popup');
}
closePopUp();
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
  if (event.target === popUpOverlay) {
    popUpOverlay.classList.add('remove-popup');
  }
});
// DISPLAY POPUP
const displayPopUp = (projects) => {
  let detailResult = '';
  const { technologies } = projects[currenItem];
  let allTechnologies = '';
  technologies.map((item) => {
    allTechnologies += `<li>${item}</li>`;
    return allTechnologies;
  });
  detailResult += `
      <div class="popup-card">
      <button onClick=closePopUp() id="desktop-popup-close">
          <img src=${projects[currenItem].desktopPopUpClose} alt="">
     </button>
      <div class="popup-img-wrap">
          <img src=${projects[currenItem].img} alt="">
          <button onClick=closePopUp() id="popup-close">
              <img src=${projects[currenItem].mobilePopUpClose} alt="">
         </button>

      </div>
      <div class="popup-title-wrap">
          <h3>${projects[currenItem].name}</h3>
          <ul id="desktop-popup-btns" class="popup-btn-wrap">
              <li><a id="desktop-see-live-btn" href=${projects[currenItem].liveUrl}>see live <img src=${projects[currenItem].seeLiveIcon} alt="icon"></a></li>
              <li><a id="desktop-see-source-btn" href=${projects[currenItem].sourseUrl}>see source <img src=${projects[currenItem].seeSourceIcon} alt="icon"></a></li>
           </ul>
      </div>
      <ul id="popup-tech" class="popup-tech">
        ${allTechnologies}
     </ul>
     <div class="popup-desc">
         <p>${projects[currenItem].desc}</p>

     </div>
     <ul id="popup-mobile-btns" class="popup-btn-wrap">
        <li><a id="see-live-btn" href="">see live <img src=${projects[currenItem].seeLiveIcon} alt=""></a></li>
        <li><a id="see-source-btn"a href="">see source <img src=${projects[currenItem].seeSourceIcon} alt=""></a></li>
     </ul>
  </div>

      `;

  popUpOverlay.innerHTML = detailResult;
  return detailResult;
};

function selectPopUp(id) {
  currenItem = id - 1;
  displayPopUp(data);
  popUpOverlay.classList.toggle('remove-popup');
}
selectPopUp(1);
// DISPLAYING LANGUAGES DATA
const displayLanguages = (languages) => {
  let result = '';
  languages.map((item) => {
    const { skills } = item;
    let allSkills = '';
    for (let i = 0; i < skills.length; i += 1) {
      allSkills += `<li><button>${skills[i]}</button></li>`;
    }
    result += `
<div class="card">
          <div class="icon-wrapper">
              <div >
                  <img class="icon" src=${item.skillsImg} alt="icon">
              </div>
          </div>
          <div class="card-title-wrap">
              <h4>Languages</h4>
          </div>
          <ul class="card-buttons-wrap">
               ${allSkills}
          </ul>
      </div>
`;
    return result;
  });
  languagesDom.innerHTML = result;
  return result;
};

document.addEventListener('DOMContentLoaded', () => {
  displayProjects(data);
  displayLanguages(data);
  displayPopUp(data);
});

// VALIDATE CONTACT FORM
const form = document.querySelector('.contact-form');
const email = document.querySelector('#mail');
const emailError = document.querySelector('.error');
const fullName = document.querySelector('#name');
const message = document.querySelector('#msg');

function showError() {
  emailError.textContent = `Please enter your email in lowercase letters e.g ${email.value.toLowerCase()}`;
  emailError.className = 'error active';
  return emailError;
}

// LOCAL STORAGE
const user = {
  fullName: String,
  email: String,
  message: String,
};

window.addEventListener('load', () => {
  const user = JSON.parse(localStorage.getItem('user'));

  // populate the local storage information into the contact form
  if (user) {
    fullName.value = user.fullName;
    email.value = user.email;
    message.value = user.message;
  }

  return user;
});
form.addEventListener('change', () => {
  user.fullName = fullName.value;
  user.email = email.value;
  user.message = message.value;
  // set the local storage data with the upddated contact form
  localStorage.setItem('user', JSON.stringify(user));
});
form.addEventListener('submit', (event) => {
  if (email.value !== String(email.value).toLowerCase()) {
    showError();
    event.preventDefault();
  }
});