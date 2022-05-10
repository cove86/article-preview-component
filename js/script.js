'Use Strict';

const shareBtn = document.querySelector('.share-btn');
const shareDiv = document.querySelector('.share');
const author = document.querySelector('.author-div');
const card = document.querySelector('.card');
const text = document.querySelector('.card-text');
const html = `
  <div class="share-mobile">
    <p class="share-text">SHARE</p>
    <a class="fb-link" href="#"><img class="share-fb" src="images/icon-facebook.svg" alt="Facebook Logo"></a>
    <a class="tw-link" href="#"><img class="share-tw" src="images/icon-twitter.svg" alt="Twitter Logo"></a>
    <a class="pi-link" href="#"><img class="share-pi" src="images/icon-pinterest.svg" alt="Pinterest Logo"></a>
    <a class="share-btn share-btn-mobile"><img class="share-icon" src="images/icon-share.svg" /></a>
  </div>
  `;

let width = document.documentElement.clientWidth || window.innerWidth;

shareBtn.addEventListener('click', () => {
  if (width > 780) {
    shareDesktop();
  } else {
    shareMobile();
  }
});

const shareDesktop = () =>
  shareDiv.style.display == 'none'
    ? (shareDiv.style.display = 'flex')
    : (shareDiv.style.display = 'none');

const shareMobile = () => {
  author.style.display = 'none';
  shareBtn.style.display = 'none';
  text.style.paddingBottom = '0rem';
  card.insertAdjacentHTML('beforeend', html);
};
