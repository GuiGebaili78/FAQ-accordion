function toggleAccordion(index) {
    var content = document.querySelectorAll('.accordion-content');

    content.forEach(function (item, i) {
        if (i + 1 === index) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active');
        }
    });
}
