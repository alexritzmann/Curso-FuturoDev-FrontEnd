

const dropdown = document.getElementById('dropdown');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdown.addEventListener('click', () => {
  const isOpen = dropdownMenu.style.display === 'block';
  dropdownMenu.style.display = isOpen ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
  const isClickInsideDropdown = event.target.closest('.dropdown');
  if (!isClickInsideDropdown) {
    dropdownMenu.style.display = 'none';
  }
});
