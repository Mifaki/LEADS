let resizeTimer;

document.getElementById("username").innerHTML = localStorage.getItem("username").split(" ")[0] ?? "Budi";
document.getElementById("full-username").innerHTML = localStorage.getItem("username") ?? "Budi Setiawan";
document.getElementById("email").innerHTML = localStorage.getItem("email") ?? "budistwn@gmail.com";


const gear = document.getElementById("gear");

gear.addEventListener("click", function() {
  window.location.href = "user-data.html";
});

function toggleExperienceSubtitle() {
  clearTimeout(resizeTimer);
  const experienceSubtitles = document.querySelectorAll(".experience-subtitle");
  experienceSubtitles.forEach((subtitle) => {
    const subtitleText = subtitle.textContent;
    if (subtitleText.length > 90) {
      const truncatedText = subtitleText.substring(0, 90);
      subtitle.innerHTML = `${truncatedText}<span class="ellipsis">...</span>`;
      subtitle.dataset.fullText = subtitleText;
      subtitle.insertAdjacentHTML(
        "afterend",
        '<button class="read-more-button">Read More</button>'
      );
    }
  });

  const readMoreButtons = document.querySelectorAll(".read-more-button");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const subtitle = button.previousElementSibling;
      const fullText = subtitle.dataset.fullText;
      if (subtitle.classList.contains("expanded")) {
        subtitle.innerHTML = `${fullText}<span class="ellipsis">...</span>`;
        button.textContent = "Read More";
      } else {
        subtitle.innerHTML = fullText;
        button.textContent = "Read Less";
      }
      subtitle.classList.toggle("expanded");
    });
  }, 200);
}

if (window.innerWidth <= 600) {
  toggleExperienceSubtitle();
}
