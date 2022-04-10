const d = document;

export default function darkMode() {
  const $dataDark = d.querySelector(`[data-dark]`);
  const $btnDarkmodeIcon = d.querySelector('.btn__darkmode-icon');
  const $dynamicIcons = d.querySelectorAll('.dynamic-icon');

  const localConfig = localStorage.getItem('theme');

  const changeColorIcons = () => {
    $dynamicIcons.forEach((element) => {
      element.classList.toggle('filter-invert');
    });
  };

  const lightMode = () => {
    $dataDark.classList.remove('dark-mode');
    $btnDarkmodeIcon.src = '/assets/icons/moon.svg';
    localStorage.setItem('theme', 'light');
    changeColorIcons();
  };

  const darkMode = () => {
    $dataDark.classList.add('dark-mode');
    $btnDarkmodeIcon.src = '/assets/icons/sun.svg';
    localStorage.setItem('theme', 'dark');
    changeColorIcons();
  };

  d.addEventListener('DOMContentLoaded', (e) => {
    if (localConfig === null) localStorage.setItem('theme', 'light');
    if (localConfig === 'light') lightMode();
    if (localConfig === 'dark') darkMode();
  });

  d.addEventListener('click', (e) => {
    if (e.target.matches('.btn__darkmode *')) {
      $dataDark.classList.contains('dark-mode') ? lightMode() : darkMode();
    }
  });
}
