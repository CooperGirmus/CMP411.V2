export{}
async function searchBooks() {
    var bookInfo = (document.getElementById('bookInfo') as HTMLInputElement).value;

    var includeAuthor = (document.getElementById('authorCheckbox') as HTMLInputElement).checked;
    var includeLength = (document.getElementById('lengthCheckbox') as HTMLInputElement).checked;
    var includeYear = (document.getElementById('yearCheckbox') as HTMLInputElement).checked;

    var apiUrl = `https://openlibrary.org/search.json?q=${bookInfo}`;
    alert(apiUrl);

    try {
        var response = await fetch(apiUrl);
        var data = await response.json();

        var resultDiv = document.getElementById('result');

        if (resultDiv) { // Check if resultDiv is not null or undefined
            var resultHtml = '';

            if (data.docs && data.docs.length > 0) {
                var book = data.docs[0];

                if (includeAuthor) {
                    resultHtml += `<p>Author: ${book.author_name ? book.author_name.join(', ') : 'N/A'}</p>`;
                }

                if (includeLength) {
                    resultHtml += `<p>Number of Pages: ${book.edition_count ? book.edition_count : 'N/A'}</p>`;
                }

                if (includeYear) {
                    resultHtml += `<p>Release Year: ${book.first_publish_year ? book.first_publish_year : 'N/A'}</p>`;
                }
            } else {
                resultHtml = 'No results found.';
            }

            resultDiv.innerHTML = resultHtml;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
