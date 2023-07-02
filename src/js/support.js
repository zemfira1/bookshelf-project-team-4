import imagesupport1 from '../images/support1.png'
import imagesupport2 from '../images/support2.png'
import imagesupport3 from '../images/support3.png'
import imagesupport4 from '../images/support4.png'
import imagesupport5 from '../images/support5.png'
import imagesupport6 from '../images/support6.png'
import imagesupport7 from '../images/support7.png'
import imagesupport8 from '../images/support8.png'
import imagesupport9 from '../images/support9.png'

const supportItems = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: imagesupport1,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: imagesupport2,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: imagesupport3,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: imagesupport4,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: imagesupport5,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: imagesupport6,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: imagesupport7,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: imagesupport8,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: imagesupport9,
  },
];

let orgList = document.querySelector('.donation-organisation-list')
let scrollBtn = document.querySelector('.scroll-btn')

function createSupportListMarkup(supportItems) {
  return supportItems
    .map(
      ({ img, url, title },index) => `
      <li class="support-item">
      <span class='support-item-number'>0${index+1}</span>
        <a class="support_link" target='blank' href="${url}">
          <img
            class="support-image"
            src="${img}"
            alt="${title}"
          />
        </a>
      </li>`
    )
    .join("");
}

function scrollTo() {
  
  if (scrollBtn.classList.contains('top')) {
    scrollBtn.classList.remove('top')
    scrollTop()
  } else {
    scrollBottom()
    scrollBtn.classList.add('top')
    scrollBtn.classList.add('hidden-scroll-support')
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


