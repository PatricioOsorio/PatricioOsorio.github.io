const d = document;

export default function apiGithub() {
  async function repositories() {
    try {
      let res = await fetch(
        'https://api.github.com/users/PatricioOsorio/repos'
      );
      let json = await (res.ok ? res.json() : Promise.reject(res));
      
      console.log(json);

      const $template = d.querySelector('.card__template').content;
      const $fragment = d.createDocumentFragment();
      const $repositoriesHTML = d.querySelector('.repositores');

      json.forEach((el) => {
        $template.querySelector('.card__title').textContent = el.name;
        $template.querySelector(
          '.card__website'
        ).href = `https://patricioosorio.github.io/${el.name}`;

        $template.querySelector('.card__repository').href = el.html_url;
        $template.querySelector('.card__created').textContent = new Date(el.created_at).toLocaleDateString("es-MX");
        $template.querySelector('.card__updated').textContent = new Date(el.updated_at).toLocaleDateString("es-MX");
        $template.querySelector('.card__language').textContent = el.language;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $repositoriesHTML.appendChild($fragment);
    } catch (error) {
      let message = error.statusText || 'Ocurrio un error';
      console.error(`Failed Connection : ${error.status}: ${message}`);
    }
  }
  repositories();
}
