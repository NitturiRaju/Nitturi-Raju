const links = {
  youtube: "https://youtube.com/@nitturirajuofficial?si=iTl7IXM-UUTDVU6S",
  facebook: "https://www.facebook.com/share/17kp3yTkrx/",
  instagram: "https://www.instagram.com/nitturirajuofficial?utm_source=qr&igsh=MWt1ODd5ZTY5ZXk5YQ==",
  whatsapp: "https://wa.me/919281414547",
  x: "https://x.com/nitturiraju",
  threads: "https://www.threads.com/@nitturirajuofficial"
};

const svg = document.getElementById("overlay");
const tapCircle = document.getElementById("tapCircle");
const tapRect = document.getElementById("tapRect");
const tapText = document.getElementById("tapText");

document.querySelectorAll(".hotspot").forEach(circle => {

  circle.addEventListener("click", function () {

    const social = [...this.classList].find(c => c !== "hotspot");

    const cx = Number(this.getAttribute("cx"));
    const cy = Number(this.getAttribute("cy"));
    const r = Number(this.getAttribute("r"));

    // ===== Circle =====
    tapCircle.setAttribute("cx", cx);
    tapCircle.setAttribute("cy", cy);
    tapCircle.setAttribute("r", r);
    tapCircle.setAttribute("opacity", "1");

    // ===== Text =====
    const title =
      social === "youtube" ? "YouTube" :
      social === "facebook" ? "Facebook" :
      social === "instagram" ? "Instagram" :
      social === "whatsapp" ? "WhatsApp" :
      social === "threads" ? "Threads" :
      "X";

    tapText.textContent = title;

    tapText.setAttribute("x", cx);
    tapText.setAttribute("y", cy + 92);
    tapText.setAttribute("opacity", "1");

    // Wait for text width
    requestAnimationFrame(() => {

      const box = tapText.getBBox();
      const pad = 16;

      tapRect.setAttribute("x", box.x - pad);
      tapRect.setAttribute("y", box.y - 8);
      tapRect.setAttribute("width", box.width + pad * 2);
      tapRect.setAttribute("height", box.height + 16);

      tapRect.setAttribute("opacity", "1");

    });

    // Google Analytics
    if (typeof gtag === "function") {
      gtag("event", "social_click", {
        social_platform: social
      });
    }

    // Vibration
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }

    // Hide animation
    setTimeout(() => {
      tapCircle.setAttribute("opacity", "0");
      tapRect.setAttribute("opacity", "0");
      tapText.setAttribute("opacity", "0");
    }, 220);

    // Open link
    setTimeout(() => {
      location.assign(links[social]);
    }, 80);

  });

});
