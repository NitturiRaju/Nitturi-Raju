const links = {
  youtube: "https://youtube.com/@nitturirajuofficial?si=iTl7IXM-UUTDVU6S",
  facebook: "https://www.facebook.com/share/17kp3yTkrx/",
  instagram: "https://www.instagram.com/nitturirajuofficial?utm_source=qr&igsh=MWt1ODd5ZTY5ZXk5YQ==",
  whatsapp: "https://wa.me/919281414547",
  x: "https://x.com/nitturiraju",
  threads: "https://www.threads.com/@nitturirajuofficial"
};

const svg = document.getElementById("overlay");

document.querySelectorAll(".hotspot").forEach(circle => {

    circle.addEventListener("click", function () {

        const social = [...this.classList].find(c => c !== "hotspot");

        // Remove previous ripple
        svg.querySelectorAll(".ripple").forEach(r => r.remove());

        // Ripple animation
        const ripple = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        ripple.setAttribute("cx", this.getAttribute("cx"));
        ripple.setAttribute("cy", this.getAttribute("cy"));
        ripple.setAttribute("r", "52");
        ripple.setAttribute("class", "ripple");

        svg.appendChild(ripple);

        // Google Analytics
        if (typeof gtag === "function") {
            gtag("event", "social_click", {
                social_platform: social
            });
        }

        // Small vibration
        if (navigator.vibrate) {
            navigator.vibrate(15);
        }

        // Open link
        setTimeout(() => {
            window.open(links[social], "_blank");
        }, 150);

    });

});
