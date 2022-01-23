async function getBooks() {
    await fetch('/api/books')
        .then(res => res.json())
        .then(data => {
            const Books = document.getElementById('books');
            Books.textContent = '';
            data.forEach(book => {
                const $ul = document.createElement('ul');
                const $li = document.createElement('li');
                $li.textContent = book.title + ' - ' + book.author;
                $li.classList.add('ml-3');
                $ul.appendChild($li);
                Books.appendChild($ul);
            });
        });
}
getBooks();

document.getElementById('add').addEventListener('click', postBook);
async function postBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    console.log('POST book', title, author);
    await fetch("/api/books", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            author: author
        })
    });
    getBooks();
}