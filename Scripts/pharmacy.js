const stockBody = document.getElementById('stockBody');
const searchBar = document.querySelector('.search-bar');


searchBar.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    const rows = stockBody.querySelectorAll('tr');

    rows.forEach(row => {
        const medicineName = row.cells[0].textContent.toLowerCase();
        row.style.display = medicineName.includes(searchText) ? '' : 'none';
    });
});


const dosageSelects = document.querySelectorAll('.dosage-select');
const quantityInputs = document.querySelectorAll('.quantity-input');

dosageSelects.forEach(select => {
    select.addEventListener('change', (event) => {
        const selectedDosage = event.target.value;
        const row = event.target.closest('tr');
        const availableStock = row.querySelector('.available-stock');

        
        const stockData = availableStock.dataset;
        availableStock.textContent = stockData[selectedDosage.replace(' ', '')] || '0';
    });
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const row = event.target.closest('tr');
        const medicineName = row.cells[0].textContent;
        const quantity = row.querySelector('.quantity-input').value;
        const price = row.cells[3].textContent;

        // Logic to add to cart (example)
        alert(`Added ${quantity} of ${medicineName} to cart for ${price} each!`);
        
        
    });
});

const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
   
    alert('You have been logged out.');
    window.location.href = 'index.html'; 
});


