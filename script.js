  document.getElementById("fullscreenBtn").addEventListener("click", function() {
            let browser = document.getElementById("browserWindow");
            if (!document.fullscreenElement) {
                browser.requestFullscreen().catch(err => {
                    console.log(`Error: ${err.message}`);
                });
                browser.style.backgroundColor = "white"; // Ensures white background in fullscreen
            } else {
                document.exitFullscreen();
                browser.style.backgroundColor = "white"; // Reset background after exiting fullscreen
            }
        });