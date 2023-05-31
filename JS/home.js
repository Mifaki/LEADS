const events = [
  {
    id: "1",
    img: "../../Assets/Home/event-1.png",
    tags: ["Lomba", "Mahasiswa", "Nasional"],
    title: "UI/UX Design Find It",
  },
  {
    id: "2",
    img: "../../Assets/Home/event-2.png",
    tags: ["Lomba", "SMA/SMK", "Mahasiswa", "Nasional"],
    title: "Hackathon Find It",
  },
  {
    id: "3",
    img: "../../Assets/Home/event-3.png",
    tags: ["Beasiswa", "SD", "Internasional"],
    title: "Scholarship for Elementary Students",
  },
  {
    id: "4",
    img: "../../Assets/Home/event-4.png",
    tags: ["Event", "SMP", "SMA/SMK", "Nasional"],
    title: "Science Fair Bahasa",
  },
  {
    id: "5",
    img: "../../Assets/Home/event-5.png",
    tags: ["Lomba", "Event", "SMA/SMK", "Mahasiswa", "Internasional"],
    title: "Math Olympiad English",
  },
  {
    id: "6",
    img: "../../Assets/Home/event-6.png",
    tags: ["Beasiswa", "Mahasiswa", "Nasional"],
    title: "Scholarship for College Students",
  },
  {
    id: "7",
    img: "../../Assets/Home/event-7.png",
    tags: ["Lomba", "Umum", "Provinsi"],
    title: "Photography Contest",
  },
  {
    id: "8",
    img: "../../Assets/Home/event-3.png",
    tags: ["Beasiswa", "SD", "Nasional"],
    title: "National Scholarship for Elementary Students",
  },
  {
    id: "9",
    img: "../../Assets/Home/event-9.png",
    tags: ["Event", "SMA/SMK", "Mahasiwa", "Internasional"],
    title: "Art Exhibition English",
  },
  {
    id: "10",
    img: "../../Assets/Home/event-10.png",
    tags: ["Lomba", "SMP", "SMA/SMK", "Mahasiswa", "Provinsi"],
    title: "Coding Competition",
  },
  {
    id: "11",
    img: "../../Assets/Home/event-11.png",
    tags: ["Event", "Mahasiswa", "Internasional"],
    title: "Science Fair at Harvard University",
  },
  {
    id: "12",
    img: "../../Assets/Home/event-12.png",
    tags: ["Lomba", "SMA/SMK", "Mahasiswa", "Umum", "Nasional"],
    title: "Programming Contest Indonesia",
  },
];

document.getElementById("username").innerHTML = localStorage.getItem("username").split(" ")[0] ?? "Budi";

const eventContainer = document.getElementById("event-container");
const searchInput = document.getElementById("search-input");
const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", searchEvents);
});

function searchEvents() {
  const searchTerm = searchInput.value.toLowerCase();
  const checkedTags = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);

  const filteredEvents = events.filter((event) => {
    const eventTags = event.tags.map((tag) => tag.toLowerCase());
    return (
      (event.title.toLowerCase().includes(searchTerm) ||
        eventTags.some((tag) => tag.includes(searchTerm))) &&
      checkedTags.every((tag) => eventTags.includes(tag))
    );
  });

  displayEvents(filteredEvents);
}

function displayEvents(events) {
  eventContainer.innerHTML = "";

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.addEventListener("click", function() {
      window.location.href = "../Detail/detail.html";
    });

    const eventImage = document.createElement("img");
    eventImage.className = "event-image";
    eventImage.src = event.img;
    eventImage.alt = "event-image";

    const tagsContainer = document.createElement("div");
    tagsContainer.className = "tags";

    event.tags.forEach((tag) => {
      const tagElement = document.createElement("div");
      tagElement.className = "tag";
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    const eventTitle = document.createElement("p");
    eventTitle.textContent = event.title;

    eventCard.appendChild(eventImage);
    eventCard.appendChild(tagsContainer);
    eventCard.appendChild(eventTitle);

    eventContainer.appendChild(eventCard);
  });
}

displayEvents(events);

function openFilter() {
  const filter = document.querySelector(".left-content");
  if (filter.style.right === "0px") {
    filter.style.right = "-100%";
  } else {
    filter.style.right = "0px";
  }
}
