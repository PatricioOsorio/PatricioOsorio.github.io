const d = document;

export default function apiGithub() {
  async function repositories() {
    try {
      let res = await fetch(
        'https://api.github.com/users/PatricioOsorio/repos'
      );
      let json = await (res.ok ? res.json() : Promise.reject(res));

      const $template = d.querySelector('.card__template').content;
      const $fragment = d.createDocumentFragment();
      const $repositoriesHTML = d.querySelector('.repositores');

      const cantRepositories = json.length;
      console.log(cantRepositories);

      json.forEach((el) => {
        $template.querySelector('.card__title').textContent = el.name;
        $template.querySelector(
          '.card__website'
        ).href = `https://patricioosorio.github.io/${el.name}`;

        $template.querySelector('.card__repository').href = el.html_url;
        $template.querySelector('.card__created').textContent = el.created_at;
        $template.querySelector('.card__updated').textContent = el.updated_at;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $repositoriesHTML.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || 'Ocurrio un error';
      console.error(`Failed Connection : ${err.status}: ${message}`);
    }
  }
  repositories();
}
