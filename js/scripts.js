
function toggleText() {
        var text = document.getElementById("displayText");
        if (text.style.display === "none") {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
}

window.addEventListener('scroll', function() {
            const toggler = document.querySelector('.navbar-toggler');
            const navbarBrand = document.querySelector('.navbar-brand');

            if (window.scrollY > 0) {
                toggler.style.position = 'fixed';
                toggler.style.top = '10px';
                toggler.style.right = '10px';
                navbarBrand.style.position = 'fixed';
                navbarBrand.style.top = '10px';
                navbarBrand.style.left = '10px';
            } else {
                toggler.style.position = 'absolute';
                toggler.style.top = '10px';
                toggler.style.right = '10px';
                navbarBrand.style.position = 'absolute';
                navbarBrand.style.top = '10px';
                navbarBrand.style.left = '10px';
            }
});

let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('mainNav');
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                navbar.style.top = '-100px';
            } else {
                // Scrolling up
                navbar.style.top = '0';
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener('DOMContentLoaded', function () {
        const videoLinks = document.querySelectorAll('.video-link');

        videoLinks.forEach(videoLink => {
            const video = videoLink.querySelector('video');
            const canvas = videoLink.querySelector('canvas');
            const context = canvas.getContext('2d');

            video.addEventListener('loadeddata', function () {
                // Capture the first frame of the video
                video.currentTime = 0;
                video.addEventListener('seeked', function () {
                    // Draw the first frame onto the canvas
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    // Hide the video element
                    video.style.display = 'none';
                }, { once: true });
            });
        });
    });