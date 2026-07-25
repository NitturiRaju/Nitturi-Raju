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
  { cls: "youtube",  x: 290, y: 1198 },
  { cls: "facebook", x: 512, y: 1198 },
  { cls: "instagram", x: 736, y: 1198 },
  { cls: "whatsapp", x: 290, y: 1398 },
  { cls: "x", x: 512, y: 1398 },
  { cls: "threads", x: 736, y: 1398 }
];

function positionButtons() {
  const rect = poster.getBoundingClientRect();

  const scaleX = rect.width / 1023;
  const scaleY = rect.height / 1537;

  const buttonSize = 62;

  icons.forEach(icon => {
    const btn = document.querySelector("." + icon.cls);

    btn.style.width = buttonSize + "px";
    btn.style.height = buttonSize + "px";

    btn.style.left =
      (rect.left + icon.x * scaleX - buttonSize / 2) + "px";

    btn.style.top =
      (rect.top + icon.y * scaleY - buttonSize / 2) + "px";
  });
}

window.addEventListener("load", positionButtons);
window.addEventListener("resize", positionButtons);

document.querySelectorAll(".hotspot").forEach(btn => {

  btn.addEventListener("click", function (e) {

    e.stopPropagation();

    if (navigator.vibrate) {
      navigator.vibrate(20);
    }

    this.querySelectorAll(".ripple").forEach(r => r.remove());

    const rect = this.getBoundingClientRect();

    const ripple = document.createElement("span");

    ripple.className = "ripple";

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = size + "px";
    ripple.style.height = size + "px";

    ripple.style.left =
      (e.clientX - rect.left - size / 2) + "px";

    ripple.style.top =
      (e.clientY - rect.top - size / 2) + "px";

    this.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

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
