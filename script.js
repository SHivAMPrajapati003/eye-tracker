document.body.addEventListener("mousemove", function (event) {
  const eyes = document.querySelectorAll(".eyes");

  eyes.forEach(function (eye) {
    const pupil = eye.querySelector(".pupil");

    let rect = eye.getBoundingClientRect();
    let eyeCenterX = rect.left + rect.width / 2;
    let eyeCenterY = rect.top + rect.height / 2;

    let deltaX = event.pageX - eyeCenterX;
    let deltaY = event.pageY - eyeCenterY;

    let angle = Math.atan2(deltaY, deltaX);
    let radius = 15; // how far the pupil can move

    let pupilX = radius * Math.cos(angle);
    let pupilY = radius * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
