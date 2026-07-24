document.querySelectorAll(".touch").forEach(button => {

  button.addEventListener("click", function () {

    /* Android vibration (supported browsers) */
    if (navigator.vibrate) {
      navigator.vibrate(15);
    }

    /* Press animation */
    this.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.92)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 180,
        easing: "ease-out"
      }
    );

  });

});
