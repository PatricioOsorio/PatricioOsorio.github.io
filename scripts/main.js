import darkMode from './dark_mode.js';
import apiGithub from './api_github.js';

const d = document;

darkMode();

d.addEventListener('DOMContentLoaded', (e) => {
  apiGithub();
});
