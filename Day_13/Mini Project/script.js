// Base Class
class LibraryItem {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = true; // All items are available by default
    }

    // Shared methods for all library items
    borrowItem() {
        if (this.isAvailable) {
            this.isAvailable = false;
        }
    }

    returnItem() {
        this.isAvailable = true;
    }
}

// SubClass
class Book extends LibraryItem {
    constructor(id, title, author, genre) {
        // super() calls the constructor of the parent class (LibraryItem)
        super(id, title, author);
        this.genre = genre; // Book-specific property
        this.type = 'book';
    }
}

class Magazine extends LibraryItem {
    constructor(id, title, author, issueNumber) {
        super(id, title, author);
        this.issueNumber = issueNumber; // Magazine-specific property
        this.type = 'magazine';
    }
}

// Management Class
class Library {
    constructor() {
        this.items = []; // Array to hold our OOP objects
    }

    addItem(item) {
        this.items.push(item);
        this.renderCatalog();
    }

    toggleStatus(id) {
        // Find the specific object by ID
        const item = this.items.find(i => i.id === id);

        if (item) {
            // Utilize the inherited methods
            if (item.isAvailable) {
                item.borrowItem();
            } else {
                item.returnItem();
            }
            this.renderCatalog(); // Re-render UI
        }
    }

    renderCatalog() {
        const container = document.getElementById('libraryContainer');
        container.innerHTML = ''; // Clear previous render

        this.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';

            // Determine specific extra info based on item type
            const extraInfo = item.type === 'book'
                ? `<strong>Genre:</strong> ${item.genre}`
                : `<strong>Issue:</strong> ${item.issueNumber}`;

            card.innerHTML = `
                <span class="badge ${item.type}">${item.type}</span>
                <h3>${item.title}</h3>
                <p><strong>Author:</strong> ${item.author}</p>
                <p>${extraInfo}</p>
                <p class="status ${item.isAvailable ? 'available' : 'borrowed'}">
                    ${item.isAvailable ? '🟢 Available' : '🔴 Borrowed'}
                </p>
                <button class="action-btn ${item.isAvailable ? '' : 'return'}" 
                        onclick="myLibrary.toggleStatus(${item.id})">
                    ${item.isAvailable ? 'Borrow Item' : 'Return Item'}
                </button>
            `;

            container.appendChild(card);
        });
    }
}


const myLibrary = new Library(); // Instantiate the management system

// Pre-load some items for demonstration
myLibrary.addItem(new Book(1, "The Hobbit", "J.R.R. Tolkien", "Fantasy"));
myLibrary.addItem(new Magazine(2, "National Geographic", "NatGeo", "Vol 102"));

// Handle Form Submission
const form = document.getElementById('addItemForm');
const typeInput = document.getElementById('typeInput');
const extraInput = document.getElementById('extraInput');

// Change placeholder text dynamically based on dropdown selection
typeInput.addEventListener('change', (e) => {
    if (e.target.value === 'book') {
        extraInput.placeholder = "Genre";
    } else {
        extraInput.placeholder = "Issue Number";
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const type = typeInput.value;
    const extra = extraInput.value;
    const newId = Date.now(); // Simple unique ID generator

    // Use conditional logic to instantiate the correct Subclass
    if (type === 'book') {
        const newBook = new Book(newId, title, author, extra);
        myLibrary.addItem(newBook);
    } else {
        const newMagazine = new Magazine(newId, title, author, extra);
        myLibrary.addItem(newMagazine);
    }

    form.reset(); // Clear form after adding
});