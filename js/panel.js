// start: Panel
document.querySelector('.panel-sidebar-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    this.parentElement.classList.toggle('active')
})
// end: Panel