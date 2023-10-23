// Get all project elements with videos
const projectElements = document.querySelectorAll('.project');

projectElements.forEach((project) => {
    const video = project.querySelector('.project-video');
    const image = project.querySelector('.hover-image');

    project.addEventListener('mouseenter', () => {
        const videoSrc = image.getAttribute('data-video-src');
        video.src = videoSrc; // Set the video source from data attribute
        video.style.display = 'block'; // Display the video container on hover
        video.play(); // Play the video on hover
        image.style.opacity = 0; // Hide the image on hover
    });

    project.addEventListener('mouseleave', () => {
        video.style.display = 'none'; // Hide the video container when the cursor moves away
        video.pause(); // Pause the video
        image.style.opacity = 1; // Display the image when the cursor moves away
    });

    
});
