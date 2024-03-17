const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const bookTitle = books.querySelectorAll('a');
const adv = document.querySelector('.adv');
const content = document.querySelectorAll('.book ul');
const chapterBook2 = content[0].querySelectorAll('li');
const chapterBook5 = content[5].querySelectorAll('li');
const chapterBook6 = content[2].querySelectorAll('li');

books.prepend(book[1]);
books.append(book[2]);
book[3].before(book[4]);

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

bookTitle[4].innerText='Книга 3. this и Прототипы Объектов';

adv.style.display = 'none';

chapterBook2[4].before(chapterBook2[6]);
chapterBook2[4].before(chapterBook2[8]);
chapterBook2[10].before(chapterBook2[2]);

chapterBook5[1].after(chapterBook5[9]);
chapterBook5[4].after(chapterBook5[2]);
chapterBook5[7].after(chapterBook5[5]);

chapterBook6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');



