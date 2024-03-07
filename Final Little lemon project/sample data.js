// Sample data
const items = [
    { name: "Spaghetti Carbonara", category: "main", price: 12.99 },
    { name: "Tiramisu", category: "dessert", price: 6.99 },
    { name: "Lemonade", category: "drink", price: 3.99 },
    // Add more items here
];

// Function to display items
function displayItems() {
    const itemsDiv = document.getElementById('items');
    itemsDiv.innerHTML = '';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `<h3>${item.name}</h3><p>Category: ${item.category}</p><p>Price: $${item.price}</p>`;
        itemsDiv.appendChild(itemDiv);
    });
}

// Function to filter items by category
function filterItems(category) {
    const filteredItems = items.filter(item => item.category === category);
    const itemsDiv = document.getElementById('items');
    itemsDiv.innerHTML = '';

    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `<h3>${item.name}</h3><p>Category: ${item.category}</p><p>Price: $${item.price}</p>`;
        itemsDiv.appendChild(itemDiv);
    });
}

// Initial display
displayItems();
