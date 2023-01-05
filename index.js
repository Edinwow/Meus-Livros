function insertBook() {
    var releaseText = document.createTextNode('2012');
    var titleText = document.createTextNode('Título');
    var authorText = document.createTextNode('Autor');

    var div = document.createElement("div");
    div.classList.add('book');

    var cover = document.createElement("img");
    cover.classList.add('cover');
    div.appendChild(cover);

    var release = document.createElement("p");
    release.classList.add('release');
    release.appendChild(releaseText);
    div.appendChild(release);

    var title = document.createElement("h");
    title.classList.add('title');
    title.appendChild(titleText);
    div.appendChild(title);

    var author = document.createElement("p");
    author.classList.add('author');
    author.appendChild(authorText);
    div.appendChild(author);

    var body = document.querySelector('body');
    body.appendChild(div);

}