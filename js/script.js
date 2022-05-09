'Use Strict';

const shareBtn = document.querySelector('.share-btn');
const shareDiv = document.querySelector('.share');

shareBtn.addEventListener('click', () =>
  shareDiv.style.display == 'none'
    ? (shareDiv.style.display = 'flex')
    : (shareDiv.style.display = 'none')
);
