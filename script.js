document.addEventListener("DOMContentLoaded", () => {

    // Resize image map for all devices
    if (window.imageMapResize) {
        imageMapResize();
    }

    // Google Analytics event tracking
    document.querySelectorAll("area").forEach(area => {

        area.addEventListener("click", () => {

            const social = area.dataset.social;

            if (typeof gtag === "function") {
                gtag("event", "social_click", {
                    social_platform: social
                });
            }

        });

    });

});
