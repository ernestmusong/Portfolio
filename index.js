// data for all cards
const data = [
  {
    id: 1,
    detailUrl: '#_react',
    liveUrl: 'https://musong-furniture-store.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/React-House-Furniture-Store',
    img: 'images/works-images/furniture-store.png',
    name: 'furniture store',
    desc: `An E-commerce Web App that enables users to buy online with the
    following features: Add cart items, Remove cart items, Clear cart,
    Calculate tax, Sub totals, and totals.`,
    technologies: ['React', 'Redux', 'Bootstrap'],
    skills: ['javascript', 'ruby on rails', 'postgres', 'html'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 2,
    detailUrl: '#_bootstrap',
    liveUrl: '/contribute-page',
    sourseUrl: 'https://github.com/ernestmusong/Annual-Income-Report',
    img: 'images/works-images/income-statement.png',
    name: 'Annual Income Report',
    desc: `Pulls from the Financial modeling prep API to give annual report
    of the income statements for the company "Apple Inc." for the past
    thirty-eight years.`,
    technologies: ['React', 'Redux', 'CSS'],
    skills: ['javascript', 'ruby on rails', 'postgres', 'html'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 3,
    detailUrl: '#_rails',
    liveUrl: 'https://musong-bookstore.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/Bookstore',
    img: 'images/works-images/bookstore.png',
    name: 'Bookstore',
    desc: `Pulls from the Bookstore api to display a
    list of books, with the following features: Add,
    Remove, and Edit.`,
    technologies: ['React', 'Redux', 'CSS'],
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
    liveUrl: 'https://musong-math-magicians.onrender.com/',
    sourseUrl: 'https://github.com/ernestmusong/Math-magicians',
    img: 'images/works-images/React-calculator.PNG',
    name: 'math magicians',
    desc: `A single page application containing three pages: a welcome
    page, a calculator, and a quote page. The quote page pulls from the
    Ninja API and displays a random quote. The calculator component 
    contains a calculator that performs mathematical operations.`,
    technologies: ['React', 'APIs', 'CSS'],
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
    liveUrl: 'https://musong-react-pomodoro-clock.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/React-Pomodoro-clock',
    img: 'images/works-images/pomo.png',
    name: 'pomodoro clock',
    desc: `Pomodoro clock is a timer clock built with React that has 
    a break length of 5 minutes and a session length of 25 minutes by 
    default. User can set the break and session lengths by clicking 
    the (+) or (-) keys, play and pause the clock. The end of every 
    session is indicated by a sound produced by the machine. `,
    technologies: ['React', 'HTML', 'CSS'],
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
    liveUrl: 'https://ernest-markdown-previewer.netlify.app/',
    sourseUrl: 'https://github.com/ernestmusong/React-Markdown-Previewer',
    img: 'images/works-images/markdown.png',
    name: 'markdown previewer',
    desc: `Markdown previewer is a tool that allows you to write and preview 
    Markdown-formatted text in real-time. It allows you to format text using 
    simple syntax, such as adding asterisks around words to make them bold, 
    or adding hash marks to create headings.`,
    technologies: ['React', 'HTML', 'CSS'],
    skills: ['javascript', 'ruby on rails', 'postgres', 'html'],
    skillsImg: 'images/icon-languages.png',
    desktopPopUpClose: 'images/desktop-popup-close.png',
    mobilePopUpClose: 'images/close-detail.png',
    seeLiveIcon: 'images/see-live.png',
    seeSourceIcon: 'images/see-source.png',
  },
  {
    id: 7,
    detailUrl: '#_rails',
    liveUrl: 'https://becuda.netlify.app/#/',
    sourseUrl: 'https://github.com/ernestmusong/Cultural-website',
    img: 'images/works-images/becuda.png',
    name: 'Cultural website',
    desc: `Cultural website enables users to signup, login, contribute, keep
    track of their contributions and see records of all contributions of my 
    cultural association.`,
    technologies: ['React', 'HTML', 'CSS'],
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

// SCROLL TO SPECIFIC SPOT

const navbar = document.getElementById("nav");
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

//Type-writer

    const text = "Hi, I’m Musong";
    const text2 = "A software engineer";
    const delay = 100; // milliseconds
    let index = 0;
    let index2 = 0;

    function typeWriter() {
      const name = document.getElementById("my-name");
      name.textContent += text.charAt(index);
      name.style.visibility = "visible";
      index++;
      
      if (index < text.length) {
        setTimeout(typeWriter, delay);
      }
    }
typeWriter()

function typeWriterTwo() {
  const profession = document.getElementById("title-green");
  profession.textContent += text2.charAt(index2);
  profession.style.visibility = "visible";
  index2++;

  if (index2 < text2.length) {
    setTimeout(typeWriterTwo, delay);
  }
}

window.onload = function() {
  setTimeout(typeWriterTwo, 1500);
}




