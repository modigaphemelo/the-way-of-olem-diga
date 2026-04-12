/**
 * The Way of Olem Diga – Minimal Client Scripts
 * - Mobile sidebar toggle
 * - Scroll progress bar
 */

(function() {
    'use strict';

    // ----- Sidebar Toggle (Mobile) -----
    const navToggle = document.getElementById('navToggle');
    const sidenav = document.getElementById('sidenav');

    if (navToggle && sidenav) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            sidenav.classList.toggle('open');
        });

        // Close sidebar when clicking outside (optional, but good for UX)
        document.addEventListener('click', function(e) {
            if (sidenav.classList.contains('open') && 
                !sidenav.contains(e.target) && 
                e.target !== navToggle &&
                !navToggle.contains(e.target)) {
                sidenav.classList.remove('open');
            }
        });

        // Prevent clicks inside sidebar from closing it
        sidenav.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // ----- Progress Bar (Scroll) -----
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        window.addEventListener('scroll', function() {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            progressFill.style.width = scrolled + '%';
        });
    }

})();
