document.addEventListener('DOMContentLoaded', function () {
    const sections = Array.from(document.querySelectorAll('.target'));
    const navLinks = document.querySelectorAll('[data-target]');

    function getNavOffset() {
        const mobileNav = document.querySelector('.navbar-mobile');
        if (mobileNav && getComputedStyle(mobileNav).display !== 'none') {
            return mobileNav.getBoundingClientRect().height;
        }
        return 0;
    }

    function getActiveSection() {
        let active = sections[0].id;
        let closestDist = Infinity;
        const offset = getNavOffset();

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top - offset;
            const dist = Math.abs(top);
            if (top <= 0 && dist < closestDist) {
                closestDist = dist;
                active = section.id;
            }
        });

        return active;
    }

    function updateNav() {
        const activeId = getActiveSection();
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.target === activeId);
        });
    }

    function setActive(id) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.target === id);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setActive(link.dataset.target);
        });
    });

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
});