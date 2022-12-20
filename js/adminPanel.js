const toggleElements = document.querySelectorAll('.btn-delete');
const deleteUserBtn = document.getElementById("deleteUserBtn");

toggleElements.forEach(e => {
  e.addEventListener('click', function() {
    deleteUserBtn.value = e.classList[4].substring(3, 4);
  });
});