'Use Strict';

const shareBtn = document.querySelector('.share-btn');
const shareDiv = document.querySelector('.share');
const author = document.querySelector('.author');

let width = document.documentElement.clientWidth || window.innerWidth;

shareBtn.addEventListener('click', () => {
  if (width > 780) {
    shareDiv.style.display == 'none'
      ? (shareDiv.style.display = 'flex')
      : (shareDiv.style.display = 'none');
  } else {
    // author.style.display = 'none';
    author.innerHTML = `
    <div class="share-mobile">
    <p class="share-text">SHARE</p>
    <a class="fb-link" href="#"><img class="share-fb" src="images/icon-facebook.svg" alt="Facebook Logo"></a>
    <a class="tw-link" href="#"><img class="share-tw" src="images/icon-twitter.svg" alt="Twitter Logo"></a>
    <a class="pi-link" href="#"><img class="share-pi" src="images/icon-pinterest.svg" alt="Pinterest Logo"></a>
  </div>
    `;
  }
});
