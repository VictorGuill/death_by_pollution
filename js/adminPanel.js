const toggleElements = document.querySelectorAll('.btn-delete');
const deleteUserBtn = document.getElementById("deleteUserBtn");
let editing = false;

toggleElements.forEach(e => {
  e.addEventListener('click', function() {
    deleteUserBtn.value = e.classList[4].substring(3, 4);
  });
});

const editModal = document.getElementById('editModal');

editModal.addEventListener('show.bs.modal', (e)=>{
  let editUserBtn = e.relatedTarget;
  let userId = editUserBtn.dataset.userId;
})

if (editing) {
  editModal.classList.toggle("show");
  editModal.style.display = "block";
}