import imagesupport1 from '../images/support1.png'
import imagesupport2 from '../images/support2.png'
import imagesupport3 from '../images/support3.png'
import imagesupport4 from '../images/support4.png'
import imagesupport5 from '../images/support5.png'
import imagesupport6 from '../images/support6.png'
import imagesupport7 from '../images/support7.png'
import imagesupport8 from '../images/support8.png'
import imagesupport9 from '../images/support9.png'
import imagesupport1_2x from '../images/support1-2x.png'
import imagesupport2_2x from '../images/support2-2x.png'
import imagesupport3_2x from '../images/support3-2x.png'
import imagesupport4_2x from '../images/support4-2x.png'
import imagesupport5_2x from '../images/support5-2x.png'
import imagesupport6_2x from '../images/support6-2x.png'
import imagesupport7_2x from '../images/support7-2x.png'
import imagesupport8_2x from '../images/support8-2x.png'
import imagesupport9_2x from '../images/support9-2x.png'

const supportItems = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: imagesupport1,
    img2x: imagesupport1_2x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: imagesupport2,
    img2x: imagesupport2_2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: imagesupport3,
    img2x: imagesupport3_2x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: imagesupport4,
    img2x: imagesupport4_2x,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: imagesupport5,
    img2x: imagesupport5_2x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: imagesupport6,
    img2x: imagesupport6_2x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: imagesupport7,
    img2x: imagesupport7_2x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: imagesupport8,
    img2x: imagesupport8_2x,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: imagesupport9,
    img2x: imagesupport9_2x,
  },
];

let orgList = document.querySelector('.donation-organisation-list')
let scrollBtn = document.querySelector('.scroll-btn')

function createSupportListMarkup(supportItems) {
  return supportItems
    .map(
      ({ img2x, img, url, title },index) => `
      <li class="support-item">
      <span class='support-item-number'>0${index+1}</span>
        <a class="support_link" target='blank' href="${url}">
          <img
            class="support-image"
            src="${img}"
            srcset="${img2x} 2x"
            alt="${title}"
          />
        </a>
      </li>`
    )
    .join("");
}

let scrollBtnDown = document.querySelector('.scroll-img-down')
let scrollBtnUp = document.querySelector('.scroll-img-up')

function scrollTo() {
  
  if (scrollBtn.classList.contains('top')) {
    scrollBtn.classList.remove('top')
    scrollBtnUp.style.display = 'none'
    scrollBtnDown.style.display = 'block';
    scrollTop()
  } else {
    scrollBottom()
    scrollBtn.classList.add('top')
    scrollBtnDown.style.display = 'none';
    scrollBtnUp.style.display = 'block'
  }
}


function scrollBottom() {
  orgList.scrollTop = orgList.scrollHeight;
}

function scrollTop() {
  orgList.scrollTop = 0;
}

orgList.innerHTML = createSupportListMarkup(supportItems);
scrollBtn.addEventListener('click', scrollTo);


