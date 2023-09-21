const deleteB=document.querySelectorAll('.delete')

deleteB.forEach(blog => {
  blog.addEventListener('click', e => {
    e.preventDefault()
    e.currentTarget.parentElement.parentElement.remove()
    const id=e.currentTarget.dataset.id
    fetch(`delete/${id}`,{      
  method: 'DELETE'
  })
  })
})


// const deleteB=document.querySelectorAll('.delete');

// deleteB.forEach(blog => {
//   blog.addEventListener("click", (e) => {
//     e.preventDefault();
//     
//     fetch(, { method: "Delete" })
//       .then(() => {
//         window.location.reload();
//       })
//       .catch((err) => console.log(err));
//   });
// });
