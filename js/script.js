import { content } from './data.js';

function changeLanguage(len) {
  console.log(content.header_head[len]);
  for (let i in content) {
    document.querySelector(`.${i}`).textContent = content[i][len];
  }
}
document.querySelector('.leng').addEventListener('change', e => {
  document.querySelector('.leng').classList.toggle('flag_uk');
  changeLanguage(e.target.value);
});

document
  .querySelector("[name='fist']")
  .addEventListener('input', e =>
    document.documentElement.style.setProperty('--dark', e.target.value)
  );
document
  .querySelector("[name='second']")
  .addEventListener('input', e =>
    document.documentElement.style.setProperty('--light', e.target.value)
  );
document.querySelector('.palitra').addEventListener('click', () => {
  document.querySelector('.color-menu').classList.toggle('move');
  document.querySelector('.palitra').classList.toggle('rotate');
});

