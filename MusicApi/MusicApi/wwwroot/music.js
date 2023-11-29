const uri = 'api/musicitems';
let musicItems = [];

function getItems() {
    alert('here');
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addMusicItem() {
    const addSongNameTextbox = document.getElementById('add-song-name');
    const addArtistNameTextbox = document.getElementById('add-artist-name');
    const addRatingTextbox = document.getElementById('add-rating');

    const musicItem = {
        songName: addSongNameTextbox.value.trim(),
        artistName: addArtistNameTextbox.value.trim(),
        rating: parseInt(addRatingTextbox.value)
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musicItem)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addSongNameTextbox.value = '';
            addArtistNameTextbox.value = '';
            addRatingTextbox.value = '';
        })
        .catch(error => console.error('Unable to add music item.', error));
}

function deleteMusicItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete music item.', error));
}

function displayEditForm(id) {
    const musicItem = musicItems.find(item => item.id === id);

    document.getElementById('edit-song-name').value = musicItem.songName;
    document.getElementById('edit-artist-name').value = musicItem.artistName;
    document.getElementById('edit-rating').value = musicItem.rating;
    document.getElementById('edit-id').value = musicItem.id;
    document.getElementById('editForm').style.display = 'block';
}

function updateMusicItem() {
    const itemId = document.getElementById('edit-id').value;
    const musicItem = {
        id: parseInt(itemId, 10),
        songName: document.getElementById('edit-song-name').value.trim(),
        artistName: document.getElementById('edit-artist-name').value.trim(),
        rating: parseInt(document.getElementById('edit-rating').value)
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(musicItem)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update music item.', error));

    closeInput();

    return false;
}
function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'music item' : 'music items';
    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('musicItems');
    tBody.innerHTML = '';
    alert('here');
    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode1 = document.createTextNode(item.songName);
        td1.appendChild(textNode1);

        let td2 = tr.insertCell(1);
        let textNode2 = document.createTextNode(item.artistName);
        td2.appendChild(textNode2);

        let td3 = tr.insertCell(2);
        let textNode3 = document.createTextNode(item.rating);
        td3.appendChild(textNode3);

        let td4 = tr.insertCell(3);
        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);
        td4.appendChild(editButton);

        let td5 = tr.insertCell(4);
        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteMusicItem(${item.id})`);
        td5.appendChild(deleteButton);
    });
    musicItems = data;
}
