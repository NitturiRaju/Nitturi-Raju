const links = {
  youtube: "https://youtube.com/@nitturirajuofficial?si=iTl7IXM-UUTDVU6S",
  facebook: "https://www.facebook.com/share/17kp3yTkrx/",
  instagram: "https://www.instagram.com/nitturirajuofficial?utm_source=qr&igsh=MWt1ODd5ZTY5ZXk5YQ==",
  whatsapp: "https://wa.me/919281414547",
  x: "https://x.com/nitturiraju",
  threads: "https://www.threads.com/@nitturirajuofficial"
};

const poster = document.getElementById("poster");

const icons = [
  { cls: "youtube", x: 278, y: 1174 },
  { cls: "facebook", x: 511, y: 1174 },
  { cls: "instagram", x: 744, y: 1174 },
  { cls: "whatsapp", x: 278, y: 1377 },
  { cls: "x", x: 511, y: 1377 },
  { cls: "threads", x: 744, y: 1377 }
];

function positionButtons() {
  const rect = poster.getBoundingClientRect();

  const scaleX = rect.width / 1023;
  const scaleY = rect.height / 1537;

  icons.forEach(icon => {
    const btn = document.querySelector("." + icon.cls);

    const size = 72;

    btn.style.left = (rect.left + icon.x * scaleX - size / 2) + "px";
    btn.style.top = (rect.top + icon.y * scaleY - size / 2) + "px";
  });
}

window.addEventListener("load", positionButtons);
window.addEventListener("resize", positionButtons);

document.querySelectorAll(".hotspot").forEach(btn => {

  btn.addEventListener("click", function (e) {

    if (navigator.vibrate) {
      navigator.vibrate(20);
    }

    const ripple = document.createElement("span");

    const rect = this.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    ripple.className = "ripple";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 500);

    const social = this.classList[1];

    if (typeof gtag === "function") {
      gtag("event", "social_click", {
        social_platform: social
      });
    }

    setTimeout(() => {
      window.open(links[social], "_blank");
    }, 150);

  });

});
