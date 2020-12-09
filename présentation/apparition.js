const degrade = document.querySelectorAll('.apparition');

const appOptions = {};

const apparition = new IntersectionObserver(function(entries, apparition) {
    entries.forEach(entry => {
        if (!entry.isIntersecting)
    })
}, appOptions);