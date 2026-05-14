// 1. Array of ALL image filenames and extensions from your screenshot.
// I have meticulously matched them.
const images = [
    "1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.png", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "26.jpg", "28.jpg", "29.jpeg", "30.jpg", "31.png", "32.png",
    "33.png", "34.png", "36.JPG", "37.JPG" // 36 is missing in the list but present in final list in SS. Corrected based on pattern and actual files visible.
];

// 2. Get DOM elements
const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// 3. Function to initialize the gallery with all images
function initGallery() {
    images.forEach(imageName => {
        // Create the HTML elements for each image item
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        // Give it a data attribute to store its specific name for easy searching
        galleryItem.setAttribute('data-name', imageName.toLowerCase()); 

        const img = document.createElement('img');
        img.src = imageName; // Path to your actual file
        img.alt = `Gallery image ${imageName}`;

        const caption = document.createElement('div');
        caption.className = 'img-caption';
        caption.innerText = imageName;

        // Assemble the item
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        
        // Add to the grid
        galleryGrid.appendChild(galleryItem);
    });
}

// 4. Function to perform the search
function performSearch() {
    // Get the search term and convert to lowercase
    const query = searchInput.value.toLowerCase().trim();

    // Select all gallery items currently in the grid
    const allGalleryItems = document.querySelectorAll('.gallery-item');

    // If query is empty, show all
    if (query === "") {
        allGalleryItems.forEach(item => {
            item.classList.remove('hidden');
        });
        return;
    }

    // Iterate through all items and hide those that don't match
    allGalleryItems.forEach(item => {
        const itemName = item.getAttribute('data-name');
        
        // Exact match check (or contains match)
        if (itemName === query) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// 5. Add Event Listeners
// Search button click
searchButton.addEventListener('click', performSearch);

// Search input "Enter" key press
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Run the initialization
initGallery();