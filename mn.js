function openNav() {
    if (window.innerWidth < 768) {
        document.getElementById("mySidebar ").style.width = "250px ";
    }
}

function closeNav() {
    document.getElementById("mySidebar ").style.width = "0 ";
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        document.getElementById("mySidebar ").style.width = "0 ";
    }
});
$(document).ready(function() {
    $('[data-toggle="tooltip "]').tooltip();
});

//from gpt
document.addEventListener('DOMContentLoaded', function() {
    var watchVideoLinks = document.querySelectorAll('.watch-video');


    function openFullscreen(event) {
        event.preventDefault();
        var videoUrl = this.href;
        var videoElement = document.createElement('video');
        videoElement.src = videoUrl;
        videoElement.setAttribute('controls', true);
        videoElement.setAttribute('autoplay', true);


        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) { /* Firefox */
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
            videoElement.msRequestFullscreen();
        } else {
            // Full-screen not supported, fallback to normal playback
            console.log('Fullscreen not supported.');
            videoElement.style.width = '100%'; // Fallback to inline playback
            this.parentNode.replaceChild(videoElement, this);
        }
    }
    watchVideoLinks.forEach(function(link) {
        link.addEventListener('click', openFullscreen);
    });
});