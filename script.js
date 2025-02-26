const photos = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'nature'
    },
    {
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'city'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
    {
        url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'animals',
    },
];

console.log('test commit');

let numberOfPhotosShown = 6;
const galleryElement = document.getElementById('gallery');
const buttons = document.querySelectorAll('.filter-buttons button');
console.log(buttons);

const loadMoreButton = document.querySelector('#load-more');

// create and appending photoes elements to #gallery container
photos.forEach(function (photo) {
    const photoElement = document.createElement('img');
    photoElement.classList.add('photo');
    photoElement.src = photo.url;
    photoElement.setAttribute('data-type', photo.type);
    photoElement.style.display = 'none';

    galleryElement.appendChild(photoElement);
});

showPhotos(numberOfPhotosShown);
//const photoElements = document.querySelectorAll('.photo');
//for{let i=0; i < 6; i++} {
//  photoElements[i].style.display = 'block';
 // }
    
// add click event listener to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');
        filterPhotos(filter);
    });
}

// hide loadMore button If no more photos to show
if (numberOfPhotosShown >= photoElements.length) {
    loadMoreButton.style.display = 'none';
} else {
    loadMoreButton.style.display = 'block';
}

function filterPhotos(filter) {
    const photoElements = document.querySelectorAll('.photo');
    photoElements.forEach(function (photo) {
        if (filter === 'all' || photo.getAttribute('data-type') === filter) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
}

function showPhotos(numOfPhotosShown) {
const photoElements = document.querySelectorAll('.photo');
for (let i = 0; i < numOfPhotosShown; i++) {
    if (photoElements[i]) {
    photoElements[i].style.display = 'block';
    }
}
}

loadMoreButton.addEventListener('click', () => {
    console.log('show 6 more photos');
    numberOfPhotosShown += 6;
    console.log('number of photos shown:', numberOfPhotosShown);
    showPhotos(numberOfPhotosShown);
});

if (numberOfPhotosShown >= photoElements.length) {
    loadMoreButton.style.display = 'none';
} else {
    loadMoreButton.style.display = 'block';
}
