const videoPreview = document.getElementById("videoPreview");

        function playVideo() {
            videoPreview.style.display = "block";
            videoPreview.currentTime = 0; // Reset the video playback position
            videoPreview.play();
        }

        function resetVideo() {
            videoPreview.style.display = "none";
            videoPreview.pause();
        }