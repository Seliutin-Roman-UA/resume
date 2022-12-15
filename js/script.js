import { content } from './data.js';

function changeLanguage(len) {
  console.log(content.header_head[len]);
  for (let i in content) {
    document.querySelector(`.${i}`).textContent = content[i][len];
  }
}

const ref = {
  language: document.querySelector('.leng'),
  darkColor: document.querySelector("[name='fist']"),
  lightColor: document.querySelector("[name='second']"),
  palitra: document.querySelector('.palitra'),
  colorMenu: document.querySelector('.color-menu'),
  printer: document.querySelector('.printer_wraper'),
}

ref.language.addEventListener('change', e => {
  ref.language.classList.toggle('flag_uk');
  changeLanguage(e.target.value);
});
ref.darkColor.addEventListener('input', e =>
    document.documentElement.style.setProperty('--dark', e.target.value)
  );
ref.lightColor.addEventListener('input', e =>
    document.documentElement.style.setProperty('--light', e.target.value)
  );
ref.palitra.addEventListener('click', () => {
  ref.colorMenu.classList.toggle('move');
  ref.palitra.classList.toggle('rotate');
});
ref.printer.addEventListener('click', () => {
  window.print()
});
