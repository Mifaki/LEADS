const awards = [
  {
    id: 1,
    name: "Juara 1 Gemastik Kategori Desain Antarmuka Pengguna",
    organization:
      "Pusat Prestasi Nasional, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    location: "Universitas Brawijaya, Malang, Jawa Timur, Indonesia",
    startMonth: "Mei",
    startYear: "2023",
    endMonth: "Agustus",
    endYear: "2023",
    desc: "Saya melakukan penelitian mendalam tentang preferensi pengguna, menganalisis tren terkini, dan menggabungkan elemen-elemen desain yang efektif. Saya fokus pada keselarasan visual, kegunaan, dan pengalaman pengguna yang optimal. Melalui perjuangan dan kerja keras, saya berhasil menciptakan antarmuka yang memenangkan persaingan sengit. Pengalaman ini memperkuat keyakinan saya dalam menjadi seorang desainer yang kreatif, terampil, dan berprestasi di masa depan.",
  },
];

const historys = [
  {
    id: 1,
    name: "Peserta Webinar #ProductSeries Workshop “Intro to UI Design",
    organization: "Google Developer Student Club University of Brawijaya",
    location: "Online",
    startMonth: "November",
    startYear: "2023",
    endMonth: "November",
    endYear: "2023",
    desc: "Saya belajar tentang prinsip-prinsip desain yang efektif, teknik pemilihan warna yang tepat, dan bagaimana menyusun elemen-elemen desain dengan baik. Saya juga mendapatkan wawasan berharga tentang pengalaman pengguna yang memikat dan cara membuat prototipe interaktif yang menarik.",
  },
  {
    id: 2,
    name: "Semifinalist 4C Kategori UI/UX Competition",
    organization: "Fakultas Ilmu Komputer Universitas Brawijaya",
    location: "Universitas Brawijaya, Malang, Jawa Timur, Indonesia",
    startMonth: "September",
    startYear: "2023",
    endMonth: "November",
    endYear: "2023",
    desc: "-",
  },
];

const academics = [
  {
    id: 1,
    name: "University of Brawijaya",
    degree: "Bachelor of information Technology, Information Technology",
    location: "Malang, Jawa Timur, Indonesia",
    startMonth: "Agustus",
    startYear: "2022",
    endMonth: "Agustus",
    endYear: "2023",
    desc: "-",
  },
  {
    id: 2,
    name: "SMAN 1 Cikarang Pusat",
    degree: "Natural Sciences",
    location: "Bekasi, Jawa Barat, Indonesia",
    startMonth: "Juli",
    startYear: "2019",
    endMonth: "Juli",
    endYear: "2022",
    desc: "-",
  },
];

document.getElementById("logoutButton").addEventListener("click", logOut);

function logOut() {
  localStorage.removeItem("password");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  window.location.href = "index.html";
}


function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function displayAwards(awards) {
  const awardsContainer = document.getElementById("penghargaan");

  awards.forEach((award) => {
    const expandableDetail = document.createElement("div");
    expandableDetail.classList.add("expandable-detail");

    const expandableIcon = document.createElement("div");
    expandableIcon.classList.add("expandable-icon");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "Assets/UserData/delete.svg";
    deleteIcon.alt = "delete icon";
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", function () {
      awardsContainer.removeChild(expandableDetail);
    });

    const arrowIcon = document.createElement("img");
    arrowIcon.src = "Assets/UserData/arrow.svg";
    arrowIcon.alt = "arrow icon";
    arrowIcon.classList.add("arrow-icon");
    arrowIcon.addEventListener("click", function () {
      expandableDetail.classList.toggle("expanded");
    });

    expandableIcon.appendChild(deleteIcon);
    expandableIcon.appendChild(arrowIcon);
    expandableDetail.appendChild(expandableIcon);

    const expandableBetween = document.createElement("div");
    expandableBetween.classList.add("expandable-between");

    const nameAcaraLabel = document.createElement("label");
    nameAcaraLabel.classList.add("input_half");

    const nameAcaraInput = document.createElement("input");
    nameAcaraInput.classList.add("input__field");
    nameAcaraInput.type = "text";
    nameAcaraInput.placeholder = " ";
    nameAcaraInput.value = award.name;

    const nameAcaraInputLabel = document.createElement("span");
    nameAcaraInputLabel.classList.add("input__label");
    nameAcaraInputLabel.textContent = "Nama Acara";

    nameAcaraLabel.appendChild(nameAcaraInput);
    nameAcaraLabel.appendChild(nameAcaraInputLabel);
    expandableBetween.appendChild(nameAcaraLabel);

    const penyelenggaraLabel = document.createElement("label");
    penyelenggaraLabel.classList.add("input_half");

    const penyelenggaraInput = document.createElement("input");
    penyelenggaraInput.classList.add("input__field");
    penyelenggaraInput.type = "text";
    penyelenggaraInput.placeholder = " ";
    penyelenggaraInput.value = award.organization;

    const penyelenggaraInputLabel = document.createElement("span");
    penyelenggaraInputLabel.classList.add("input__label");
    penyelenggaraInputLabel.textContent = "Penyelenggara";

    penyelenggaraLabel.appendChild(penyelenggaraInput);
    penyelenggaraLabel.appendChild(penyelenggaraInputLabel);
    expandableBetween.appendChild(penyelenggaraLabel);

    expandableDetail.appendChild(expandableBetween);

    const lokasiLabel = document.createElement("label");
    lokasiLabel.classList.add("input");

    const lokasiInput = document.createElement("input");
    lokasiInput.classList.add("input__field");
    lokasiInput.type = "text";
    lokasiInput.placeholder = " ";
    lokasiInput.value = award.location;

    const lokasiInputLabel = document.createElement("span");
    lokasiInputLabel.classList.add("input__label");
    lokasiInputLabel.textContent = "Lokasi";

    lokasiLabel.appendChild(lokasiInput);
    lokasiLabel.appendChild(lokasiInputLabel);
    expandableDetail.appendChild(lokasiLabel);

    const expandableBetween2 = document.createElement("div");
    expandableBetween2.classList.add("expandable-between");

    const startMonthLabel = document.createElement("label");
    startMonthLabel.classList.add("input_half");

    const startMonthInput = document.createElement("input");
    startMonthInput.classList.add("input__field");
    startMonthInput.type = "text";
    startMonthInput.placeholder = " ";
    startMonthInput.value = award.startMonth;

    const startMonthInputLabel = document.createElement("span");
    startMonthInputLabel.classList.add("input__label");
    startMonthInputLabel.textContent = "Bulan Mulai";

    startMonthLabel.appendChild(startMonthInput);
    startMonthLabel.appendChild(startMonthInputLabel);
    expandableBetween2.appendChild(startMonthLabel);

    const startYearLabel = document.createElement("label");
    startYearLabel.classList.add("input_half");

    const startYearInput = document.createElement("input");
    startYearInput.classList.add("input__field");
    startYearInput.type = "text";
    startYearInput.placeholder = " ";
    startYearInput.value = award.startYear;

    const startYearInputLabel = document.createElement("span");
    startYearInputLabel.classList.add("input__label");
    startYearInputLabel.textContent = "Tahun Mulai";

    startYearLabel.appendChild(startYearInput);
    startYearLabel.appendChild(startYearInputLabel);
    expandableBetween2.appendChild(startYearLabel);

    expandableDetail.appendChild(expandableBetween2);

    const expandableBetween3 = document.createElement("div");
    expandableBetween3.classList.add("expandable-between");

    const endMonthLabel = document.createElement("label");
    endMonthLabel.classList.add("input_half");

    const endMonthInput = document.createElement("input");
    endMonthInput.classList.add("input__field");
    endMonthInput.type = "text";
    endMonthInput.placeholder = " ";
    endMonthInput.value = award.endMonth;

    const endMonthInputLabel = document.createElement("span");
    endMonthInputLabel.classList.add("input__label");
    endMonthInputLabel.textContent = "Bulan Selesai";

    endMonthLabel.appendChild(endMonthInput);
    endMonthLabel.appendChild(endMonthInputLabel);
    expandableBetween3.appendChild(endMonthLabel);

    const endYearLabel = document.createElement("label");
    endYearLabel.classList.add("input_half");

    const endYearInput = document.createElement("input");
    endYearInput.classList.add("input__field");
    endYearInput.type = "text";
    endYearInput.placeholder = " ";
    endYearInput.value = award.endYear;

    const endYearInputLabel = document.createElement("span");
    endYearInputLabel.classList.add("input__label");
    endYearInputLabel.textContent = "Tahun Selesai";

    endYearLabel.appendChild(endYearInput);
    endYearLabel.appendChild(endYearInputLabel);
    expandableBetween3.appendChild(endYearLabel);

    expandableDetail.appendChild(expandableBetween3);

    const descDiv = document.createElement("div");
    const descActionText = document.createElement("p");
    descActionText.classList.add("action-text");
    descActionText.textContent = "Deskripsi";

    descDiv.appendChild(descActionText);

    const descTextArea = document.createElement("textarea");
    descTextArea.classList.add("txt-area");
    descTextArea.textContent = award.desc;
    descTextArea.oninput = function() {
      adjustTextareaHeight(this);
    };

    descDiv.appendChild(descTextArea);
    expandableDetail.appendChild(descDiv);

    awardsContainer.appendChild(expandableDetail);
  });
}

function newAwards() {
  const awardsContainer = document.getElementById("penghargaan");

  const expandableDetail = document.createElement("div");
  expandableDetail.classList.add("expandable-detail");

  const expandableIcon = document.createElement("div");
  expandableIcon.classList.add("expandable-icon");

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "Assets/UserData/delete.svg";
  deleteIcon.alt = "delete icon";
  deleteIcon.classList.add("delete-icon");
  deleteIcon.addEventListener("click", function () {
    awardsContainer.removeChild(expandableDetail);
  });

  const arrowIcon = document.createElement("img");
  arrowIcon.src = "Assets/UserData/arrow.svg";
  arrowIcon.alt = "arrow icon";
  arrowIcon.classList.add("arrow-icon");
  arrowIcon.addEventListener("click", function () {
    expandableDetail.classList.toggle("expanded");
  });

  expandableIcon.appendChild(deleteIcon);
  expandableIcon.appendChild(arrowIcon);
  expandableDetail.appendChild(expandableIcon);

  const expandableBetween = document.createElement("div");
  expandableBetween.classList.add("expandable-between");

  const nameAcaraLabel = document.createElement("label");
  nameAcaraLabel.classList.add("input_half");

  const nameAcaraInput = document.createElement("input");
  nameAcaraInput.classList.add("input__field");
  nameAcaraInput.type = "text";
  nameAcaraInput.placeholder = " ";

  const nameAcaraInputLabel = document.createElement("span");
  nameAcaraInputLabel.classList.add("input__label");
  nameAcaraInputLabel.textContent = "Nama Acara";

  nameAcaraLabel.appendChild(nameAcaraInput);
  nameAcaraLabel.appendChild(nameAcaraInputLabel);
  expandableBetween.appendChild(nameAcaraLabel);

  const penyelenggaraLabel = document.createElement("label");
  penyelenggaraLabel.classList.add("input_half");

  const penyelenggaraInput = document.createElement("input");
  penyelenggaraInput.classList.add("input__field");
  penyelenggaraInput.type = "text";
  penyelenggaraInput.placeholder = " ";

  const penyelenggaraInputLabel = document.createElement("span");
  penyelenggaraInputLabel.classList.add("input__label");
  penyelenggaraInputLabel.textContent = "Penyelenggara";

  penyelenggaraLabel.appendChild(penyelenggaraInput);
  penyelenggaraLabel.appendChild(penyelenggaraInputLabel);
  expandableBetween.appendChild(penyelenggaraLabel);

  expandableDetail.appendChild(expandableBetween);

  const lokasiLabel = document.createElement("label");
  lokasiLabel.classList.add("input");

  const lokasiInput = document.createElement("input");
  lokasiInput.classList.add("input__field");
  lokasiInput.type = "text";
  lokasiInput.placeholder = " ";

  const lokasiInputLabel = document.createElement("span");
  lokasiInputLabel.classList.add("input__label");
  lokasiInputLabel.textContent = "Lokasi";

  lokasiLabel.appendChild(lokasiInput);
  lokasiLabel.appendChild(lokasiInputLabel);
  expandableDetail.appendChild(lokasiLabel);

  const expandableBetween2 = document.createElement("div");
  expandableBetween2.classList.add("expandable-between");

  const startMonthLabel = document.createElement("label");
  startMonthLabel.classList.add("input_half");

  const startMonthInput = document.createElement("input");
  startMonthInput.classList.add("input__field");
  startMonthInput.type = "text";
  startMonthInput.placeholder = " ";

  const startMonthInputLabel = document.createElement("span");
  startMonthInputLabel.classList.add("input__label");
  startMonthInputLabel.textContent = "Bulan Mulai";

  startMonthLabel.appendChild(startMonthInput);
  startMonthLabel.appendChild(startMonthInputLabel);
  expandableBetween2.appendChild(startMonthLabel);

  const startYearLabel = document.createElement("label");
  startYearLabel.classList.add("input_half");

  const startYearInput = document.createElement("input");
  startYearInput.classList.add("input__field");
  startYearInput.type = "text";
  startYearInput.placeholder = " ";

  const startYearInputLabel = document.createElement("span");
  startYearInputLabel.classList.add("input__label");
  startYearInputLabel.textContent = "Tahun Mulai";

  startYearLabel.appendChild(startYearInput);
  startYearLabel.appendChild(startYearInputLabel);
  expandableBetween2.appendChild(startYearLabel);

  expandableDetail.appendChild(expandableBetween2);

  const expandableBetween3 = document.createElement("div");
  expandableBetween3.classList.add("expandable-between");

  const endMonthLabel = document.createElement("label");
  endMonthLabel.classList.add("input_half");

  const endMonthInput = document.createElement("input");
  endMonthInput.classList.add("input__field");
  endMonthInput.type = "text";
  endMonthInput.placeholder = " ";

  const endMonthInputLabel = document.createElement("span");
  endMonthInputLabel.classList.add("input__label");
  endMonthInputLabel.textContent = "Bulan Selesai";

  endMonthLabel.appendChild(endMonthInput);
  endMonthLabel.appendChild(endMonthInputLabel);
  expandableBetween3.appendChild(endMonthLabel);

  const endYearLabel = document.createElement("label");
  endYearLabel.classList.add("input_half");

  const endYearInput = document.createElement("input");
  endYearInput.classList.add("input__field");
  endYearInput.type = "text";
  endYearInput.placeholder = " ";

  const endYearInputLabel = document.createElement("span");
  endYearInputLabel.classList.add("input__label");
  endYearInputLabel.textContent = "Tahun Selesai";

  endYearLabel.appendChild(endYearInput);
  endYearLabel.appendChild(endYearInputLabel);
  expandableBetween3.appendChild(endYearLabel);

  expandableDetail.appendChild(expandableBetween3);

  const descDiv = document.createElement("div");
  const descActionText = document.createElement("p");
  descActionText.classList.add("action-text");
  descActionText.textContent = "Deskripsi";

  descDiv.appendChild(descActionText);

  const descTextArea = document.createElement("textarea");
  descTextArea.classList.add("txt-area");
  descTextArea.oninput = function() {
    adjustTextareaHeight(this);
  };

  descDiv.appendChild(descTextArea);
  expandableDetail.appendChild(descDiv);

  awardsContainer.insertBefore(expandableDetail, awardsContainer.lastChild);
}

function displayHistorys(historys) {
  const awardsContainer = document.getElementById("riwayat");

  historys.forEach((history) => {
    const expandableDetail = document.createElement("div");
    expandableDetail.classList.add("expandable-detail");

    const expandableIcon = document.createElement("div");
    expandableIcon.classList.add("expandable-icon");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "Assets/UserData/delete.svg";
    deleteIcon.alt = "delete icon";
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", function () {
      awardsContainer.removeChild(expandableDetail);
    });

    const arrowIcon = document.createElement("img");
    arrowIcon.src = "Assets/UserData/arrow.svg";
    arrowIcon.alt = "arrow icon";
    arrowIcon.classList.add("arrow-icon");
    arrowIcon.addEventListener("click", function () {
      expandableDetail.classList.toggle("expanded");
    });

    expandableIcon.appendChild(deleteIcon);
    expandableIcon.appendChild(arrowIcon);
    expandableDetail.appendChild(expandableIcon);

    const expandableBetween = document.createElement("div");
    expandableBetween.classList.add("expandable-between");

    const nameAcaraLabel = document.createElement("label");
    nameAcaraLabel.classList.add("input_half");

    const nameAcaraInput = document.createElement("input");
    nameAcaraInput.classList.add("input__field");
    nameAcaraInput.type = "text";
    nameAcaraInput.placeholder = " ";
    nameAcaraInput.value = history.name;

    const nameAcaraInputLabel = document.createElement("span");
    nameAcaraInputLabel.classList.add("input__label");
    nameAcaraInputLabel.textContent = "Nama Acara";

    nameAcaraLabel.appendChild(nameAcaraInput);
    nameAcaraLabel.appendChild(nameAcaraInputLabel);
    expandableBetween.appendChild(nameAcaraLabel);

    const penyelenggaraLabel = document.createElement("label");
    penyelenggaraLabel.classList.add("input_half");

    const penyelenggaraInput = document.createElement("input");
    penyelenggaraInput.classList.add("input__field");
    penyelenggaraInput.type = "text";
    penyelenggaraInput.placeholder = " ";
    penyelenggaraInput.value = history.organization;

    const penyelenggaraInputLabel = document.createElement("span");
    penyelenggaraInputLabel.classList.add("input__label");
    penyelenggaraInputLabel.textContent = "Penyelenggara";

    penyelenggaraLabel.appendChild(penyelenggaraInput);
    penyelenggaraLabel.appendChild(penyelenggaraInputLabel);
    expandableBetween.appendChild(penyelenggaraLabel);

    expandableDetail.appendChild(expandableBetween);

    const lokasiLabel = document.createElement("label");
    lokasiLabel.classList.add("input");

    const lokasiInput = document.createElement("input");
    lokasiInput.classList.add("input__field");
    lokasiInput.type = "text";
    lokasiInput.placeholder = " ";
    lokasiInput.value = history.location;

    const lokasiInputLabel = document.createElement("span");
    lokasiInputLabel.classList.add("input__label");
    lokasiInputLabel.textContent = "Lokasi";

    lokasiLabel.appendChild(lokasiInput);
    lokasiLabel.appendChild(lokasiInputLabel);
    expandableDetail.appendChild(lokasiLabel);

    const expandableBetween2 = document.createElement("div");
    expandableBetween2.classList.add("expandable-between");

    const startMonthLabel = document.createElement("label");
    startMonthLabel.classList.add("input_half");

    const startMonthInput = document.createElement("input");
    startMonthInput.classList.add("input__field");
    startMonthInput.type = "text";
    startMonthInput.placeholder = " ";
    startMonthInput.value = history.startMonth;

    const startMonthInputLabel = document.createElement("span");
    startMonthInputLabel.classList.add("input__label");
    startMonthInputLabel.textContent = "Bulan Mulai";

    startMonthLabel.appendChild(startMonthInput);
    startMonthLabel.appendChild(startMonthInputLabel);
    expandableBetween2.appendChild(startMonthLabel);

    const startYearLabel = document.createElement("label");
    startYearLabel.classList.add("input_half");

    const startYearInput = document.createElement("input");
    startYearInput.classList.add("input__field");
    startYearInput.type = "text";
    startYearInput.placeholder = " ";
    startYearInput.value = history.startYear;

    const startYearInputLabel = document.createElement("span");
    startYearInputLabel.classList.add("input__label");
    startYearInputLabel.textContent = "Tahun Mulai";

    startYearLabel.appendChild(startYearInput);
    startYearLabel.appendChild(startYearInputLabel);
    expandableBetween2.appendChild(startYearLabel);

    expandableDetail.appendChild(expandableBetween2);

    const expandableBetween3 = document.createElement("div");
    expandableBetween3.classList.add("expandable-between");

    const endMonthLabel = document.createElement("label");
    endMonthLabel.classList.add("input_half");

    const endMonthInput = document.createElement("input");
    endMonthInput.classList.add("input__field");
    endMonthInput.type = "text";
    endMonthInput.placeholder = " ";
    endMonthInput.value = history.endMonth;

    const endMonthInputLabel = document.createElement("span");
    endMonthInputLabel.classList.add("input__label");
    endMonthInputLabel.textContent = "Bulan Selesai";

    endMonthLabel.appendChild(endMonthInput);
    endMonthLabel.appendChild(endMonthInputLabel);
    expandableBetween3.appendChild(endMonthLabel);

    const endYearLabel = document.createElement("label");
    endYearLabel.classList.add("input_half");

    const endYearInput = document.createElement("input");
    endYearInput.classList.add("input__field");
    endYearInput.type = "text";
    endYearInput.placeholder = " ";
    endYearInput.value = history.endYear;

    const endYearInputLabel = document.createElement("span");
    endYearInputLabel.classList.add("input__label");
    endYearInputLabel.textContent = "Tahun Selesai";

    endYearLabel.appendChild(endYearInput);
    endYearLabel.appendChild(endYearInputLabel);
    expandableBetween3.appendChild(endYearLabel);

    expandableDetail.appendChild(expandableBetween3);

    const descDiv = document.createElement("div");
    const descActionText = document.createElement("p");
    descActionText.classList.add("action-text");
    descActionText.textContent = "Deskripsi";

    descDiv.appendChild(descActionText);

    const descTextArea = document.createElement("textarea");
    descTextArea.classList.add("txt-area");
    descTextArea.textContent = history.desc;
    descTextArea.oninput = function() {
      adjustTextareaHeight(this);
    };

    descDiv.appendChild(descTextArea);
    expandableDetail.appendChild(descDiv);

    awardsContainer.appendChild(expandableDetail);
  });
}

function newHistory() {
  const awardsContainer = document.getElementById("riwayat");

  const expandableDetail = document.createElement("div");
  expandableDetail.classList.add("expandable-detail");

  const expandableIcon = document.createElement("div");
  expandableIcon.classList.add("expandable-icon");

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "Assets/UserData/delete.svg";
  deleteIcon.alt = "delete icon";
  deleteIcon.classList.add("delete-icon");
  deleteIcon.addEventListener("click", function () {
    awardsContainer.removeChild(expandableDetail);
  });

  const arrowIcon = document.createElement("img");
  arrowIcon.src = "Assets/UserData/arrow.svg";
  arrowIcon.alt = "arrow icon";
  arrowIcon.classList.add("arrow-icon");
  arrowIcon.addEventListener("click", function () {
    expandableDetail.classList.toggle("expanded");
  });

  expandableIcon.appendChild(deleteIcon);
  expandableIcon.appendChild(arrowIcon);
  expandableDetail.appendChild(expandableIcon);

  const expandableBetween = document.createElement("div");
  expandableBetween.classList.add("expandable-between");

  const nameAcaraLabel = document.createElement("label");
  nameAcaraLabel.classList.add("input_half");

  const nameAcaraInput = document.createElement("input");
  nameAcaraInput.classList.add("input__field");
  nameAcaraInput.type = "text";
  nameAcaraInput.placeholder = " ";

  const nameAcaraInputLabel = document.createElement("span");
  nameAcaraInputLabel.classList.add("input__label");
  nameAcaraInputLabel.textContent = "Nama Acara";

  nameAcaraLabel.appendChild(nameAcaraInput);
  nameAcaraLabel.appendChild(nameAcaraInputLabel);
  expandableBetween.appendChild(nameAcaraLabel);

  const penyelenggaraLabel = document.createElement("label");
  penyelenggaraLabel.classList.add("input_half");

  const penyelenggaraInput = document.createElement("input");
  penyelenggaraInput.classList.add("input__field");
  penyelenggaraInput.type = "text";
  penyelenggaraInput.placeholder = " ";

  const penyelenggaraInputLabel = document.createElement("span");
  penyelenggaraInputLabel.classList.add("input__label");
  penyelenggaraInputLabel.textContent = "Penyelenggara";

  penyelenggaraLabel.appendChild(penyelenggaraInput);
  penyelenggaraLabel.appendChild(penyelenggaraInputLabel);
  expandableBetween.appendChild(penyelenggaraLabel);

  expandableDetail.appendChild(expandableBetween);

  const lokasiLabel = document.createElement("label");
  lokasiLabel.classList.add("input");

  const lokasiInput = document.createElement("input");
  lokasiInput.classList.add("input__field");
  lokasiInput.type = "text";
  lokasiInput.placeholder = " ";

  const lokasiInputLabel = document.createElement("span");
  lokasiInputLabel.classList.add("input__label");
  lokasiInputLabel.textContent = "Lokasi";

  lokasiLabel.appendChild(lokasiInput);
  lokasiLabel.appendChild(lokasiInputLabel);
  expandableDetail.appendChild(lokasiLabel);

  const expandableBetween2 = document.createElement("div");
  expandableBetween2.classList.add("expandable-between");

  const startMonthLabel = document.createElement("label");
  startMonthLabel.classList.add("input_half");

  const startMonthInput = document.createElement("input");
  startMonthInput.classList.add("input__field");
  startMonthInput.type = "text";
  startMonthInput.placeholder = " ";

  const startMonthInputLabel = document.createElement("span");
  startMonthInputLabel.classList.add("input__label");
  startMonthInputLabel.textContent = "Bulan Mulai";

  startMonthLabel.appendChild(startMonthInput);
  startMonthLabel.appendChild(startMonthInputLabel);
  expandableBetween2.appendChild(startMonthLabel);

  const startYearLabel = document.createElement("label");
  startYearLabel.classList.add("input_half");

  const startYearInput = document.createElement("input");
  startYearInput.classList.add("input__field");
  startYearInput.type = "text";
  startYearInput.placeholder = " ";

  const startYearInputLabel = document.createElement("span");
  startYearInputLabel.classList.add("input__label");
  startYearInputLabel.textContent = "Tahun Mulai";

  startYearLabel.appendChild(startYearInput);
  startYearLabel.appendChild(startYearInputLabel);
  expandableBetween2.appendChild(startYearLabel);

  expandableDetail.appendChild(expandableBetween2);

  const expandableBetween3 = document.createElement("div");
  expandableBetween3.classList.add("expandable-between");

  const endMonthLabel = document.createElement("label");
  endMonthLabel.classList.add("input_half");

  const endMonthInput = document.createElement("input");
  endMonthInput.classList.add("input__field");
  endMonthInput.type = "text";
  endMonthInput.placeholder = " ";

  const endMonthInputLabel = document.createElement("span");
  endMonthInputLabel.classList.add("input__label");
  endMonthInputLabel.textContent = "Bulan Selesai";

  endMonthLabel.appendChild(endMonthInput);
  endMonthLabel.appendChild(endMonthInputLabel);
  expandableBetween3.appendChild(endMonthLabel);

  const endYearLabel = document.createElement("label");
  endYearLabel.classList.add("input_half");

  const endYearInput = document.createElement("input");
  endYearInput.classList.add("input__field");
  endYearInput.type = "text";
  endYearInput.placeholder = " ";

  const endYearInputLabel = document.createElement("span");
  endYearInputLabel.classList.add("input__label");
  endYearInputLabel.textContent = "Tahun Selesai";

  endYearLabel.appendChild(endYearInput);
  endYearLabel.appendChild(endYearInputLabel);
  expandableBetween3.appendChild(endYearLabel);

  expandableDetail.appendChild(expandableBetween3);

  const descDiv = document.createElement("div");
  const descActionText = document.createElement("p");
  descActionText.classList.add("action-text");
  descActionText.textContent = "Deskripsi";

  descDiv.appendChild(descActionText);

  const descTextArea = document.createElement("textarea");
  descTextArea.classList.add("txt-area");
  descTextArea.oninput = function() {
    adjustTextareaHeight(this);
  };

  descDiv.appendChild(descTextArea);
  expandableDetail.appendChild(descDiv);

  awardsContainer.insertBefore(expandableDetail, awardsContainer.lastChild);
}

function displayAcademic(academics) {
  const awardsContainer = document.getElementById("akademik");

  academics.forEach((academic) => {
    const expandableDetail = document.createElement("div");
    expandableDetail.classList.add("expandable-detail");

    const expandableIcon = document.createElement("div");
    expandableIcon.classList.add("expandable-icon");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "Assets/UserData/delete.svg";
    deleteIcon.alt = "delete icon";
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", function () {
      awardsContainer.removeChild(expandableDetail);
    });

    const arrowIcon = document.createElement("img");
    arrowIcon.src = "Assets/UserData/arrow.svg";
    arrowIcon.alt = "arrow icon";
    arrowIcon.classList.add("arrow-icon");
    arrowIcon.addEventListener("click", function () {
      expandableDetail.classList.toggle("expanded");
    });

    expandableIcon.appendChild(deleteIcon);
    expandableIcon.appendChild(arrowIcon);
    expandableDetail.appendChild(expandableIcon);

    const expandableBetween = document.createElement("div");
    expandableBetween.classList.add("expandable-between");

    const nameAcaraLabel = document.createElement("label");
    nameAcaraLabel.classList.add("input_half");

    const nameAcaraInput = document.createElement("input");
    nameAcaraInput.classList.add("input__field");
    nameAcaraInput.type = "text";
    nameAcaraInput.placeholder = " ";
    nameAcaraInput.value = academic.name;

    const nameAcaraInputLabel = document.createElement("span");
    nameAcaraInputLabel.classList.add("input__label");
    nameAcaraInputLabel.textContent = "Nama Instansi";

    nameAcaraLabel.appendChild(nameAcaraInput);
    nameAcaraLabel.appendChild(nameAcaraInputLabel);
    expandableBetween.appendChild(nameAcaraLabel);

    const penyelenggaraLabel = document.createElement("label");
    penyelenggaraLabel.classList.add("input_half");

    const penyelenggaraInput = document.createElement("input");
    penyelenggaraInput.classList.add("input__field");
    penyelenggaraInput.type = "text";
    penyelenggaraInput.placeholder = " ";
    penyelenggaraInput.value = academic.degree;

    const penyelenggaraInputLabel = document.createElement("span");
    penyelenggaraInputLabel.classList.add("input__label");
    penyelenggaraInputLabel.textContent = "Gelar";

    penyelenggaraLabel.appendChild(penyelenggaraInput);
    penyelenggaraLabel.appendChild(penyelenggaraInputLabel);
    expandableBetween.appendChild(penyelenggaraLabel);

    expandableDetail.appendChild(expandableBetween);

    const lokasiLabel = document.createElement("label");
    lokasiLabel.classList.add("input");

    const lokasiInput = document.createElement("input");
    lokasiInput.classList.add("input__field");
    lokasiInput.type = "text";
    lokasiInput.placeholder = " ";
    lokasiInput.value = academic.location;

    const lokasiInputLabel = document.createElement("span");
    lokasiInputLabel.classList.add("input__label");
    lokasiInputLabel.textContent = "Lokasi";

    lokasiLabel.appendChild(lokasiInput);
    lokasiLabel.appendChild(lokasiInputLabel);
    expandableDetail.appendChild(lokasiLabel);

    const expandableBetween2 = document.createElement("div");
    expandableBetween2.classList.add("expandable-between");

    const startMonthLabel = document.createElement("label");
    startMonthLabel.classList.add("input_half");

    const startMonthInput = document.createElement("input");
    startMonthInput.classList.add("input__field");
    startMonthInput.type = "text";
    startMonthInput.placeholder = " ";
    startMonthInput.value = academic.startMonth;

    const startMonthInputLabel = document.createElement("span");
    startMonthInputLabel.classList.add("input__label");
    startMonthInputLabel.textContent = "Bulan Mulai";

    startMonthLabel.appendChild(startMonthInput);
    startMonthLabel.appendChild(startMonthInputLabel);
    expandableBetween2.appendChild(startMonthLabel);

    const startYearLabel = document.createElement("label");
    startYearLabel.classList.add("input_half");

    const startYearInput = document.createElement("input");
    startYearInput.classList.add("input__field");
    startYearInput.type = "text";
    startYearInput.placeholder = " ";
    startYearInput.value = academic.startYear;

    const startYearInputLabel = document.createElement("span");
    startYearInputLabel.classList.add("input__label");
    startYearInputLabel.textContent = "Tahun Mulai";

    startYearLabel.appendChild(startYearInput);
    startYearLabel.appendChild(startYearInputLabel);
    expandableBetween2.appendChild(startYearLabel);

    expandableDetail.appendChild(expandableBetween2);

    const expandableBetween3 = document.createElement("div");
    expandableBetween3.classList.add("expandable-between");

    const endMonthLabel = document.createElement("label");
    endMonthLabel.classList.add("input_half");

    const endMonthInput = document.createElement("input");
    endMonthInput.classList.add("input__field");
    endMonthInput.type = "text";
    endMonthInput.placeholder = " ";
    endMonthInput.value = academic.endMonth;

    const endMonthInputLabel = document.createElement("span");
    endMonthInputLabel.classList.add("input__label");
    endMonthInputLabel.textContent = "Bulan Selesai";

    endMonthLabel.appendChild(endMonthInput);
    endMonthLabel.appendChild(endMonthInputLabel);
    expandableBetween3.appendChild(endMonthLabel);

    const endYearLabel = document.createElement("label");
    endYearLabel.classList.add("input_half");

    const endYearInput = document.createElement("input");
    endYearInput.classList.add("input__field");
    endYearInput.type = "text";
    endYearInput.placeholder = " ";
    endYearInput.value = academic.endYear;

    const endYearInputLabel = document.createElement("span");
    endYearInputLabel.classList.add("input__label");
    endYearInputLabel.textContent = "Tahun Selesai";

    endYearLabel.appendChild(endYearInput);
    endYearLabel.appendChild(endYearInputLabel);
    expandableBetween3.appendChild(endYearLabel);

    expandableDetail.appendChild(expandableBetween3);

    const descDiv = document.createElement("div");
    const descActionText = document.createElement("p");
    descActionText.classList.add("action-text");
    descActionText.textContent = "Deskripsi";

    descDiv.appendChild(descActionText);

    const descTextArea = document.createElement("textarea");
    descTextArea.classList.add("txt-area");
    descTextArea.textContent = academic.desc;
    descTextArea.oninput = function() {
      adjustTextareaHeight(this);
    };

    descDiv.appendChild(descTextArea);
    expandableDetail.appendChild(descDiv);

    awardsContainer.appendChild(expandableDetail);
  });
}

function newAcademic() {
  const awardsContainer = document.getElementById("akademik");

  const expandableDetail = document.createElement("div");
  expandableDetail.classList.add("expandable-detail");

  const expandableIcon = document.createElement("div");
  expandableIcon.classList.add("expandable-icon");

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "Assets/UserData/delete.svg";
  deleteIcon.alt = "delete icon";
  deleteIcon.classList.add("delete-icon");
  deleteIcon.addEventListener("click", function () {
    awardsContainer.removeChild(expandableDetail);
  });

  const arrowIcon = document.createElement("img");
  arrowIcon.src = "Assets/UserData/arrow.svg";
  arrowIcon.alt = "arrow icon";
  arrowIcon.classList.add("arrow-icon");
  arrowIcon.addEventListener("click", function () {
    expandableDetail.classList.toggle("expanded");
  });

  expandableIcon.appendChild(deleteIcon);
  expandableIcon.appendChild(arrowIcon);
  expandableDetail.appendChild(expandableIcon);

  const expandableBetween = document.createElement("div");
  expandableBetween.classList.add("expandable-between");

  const nameAcaraLabel = document.createElement("label");
  nameAcaraLabel.classList.add("input_half");

  const nameAcaraInput = document.createElement("input");
  nameAcaraInput.classList.add("input__field");
  nameAcaraInput.type = "text";
  nameAcaraInput.placeholder = " ";

  const nameAcaraInputLabel = document.createElement("span");
  nameAcaraInputLabel.classList.add("input__label");
  nameAcaraInputLabel.textContent = "Nama Instansi";

  nameAcaraLabel.appendChild(nameAcaraInput);
  nameAcaraLabel.appendChild(nameAcaraInputLabel);
  expandableBetween.appendChild(nameAcaraLabel);

  const penyelenggaraLabel = document.createElement("label");
  penyelenggaraLabel.classList.add("input_half");

  const penyelenggaraInput = document.createElement("input");
  penyelenggaraInput.classList.add("input__field");
  penyelenggaraInput.type = "text";
  penyelenggaraInput.placeholder = " ";

  const penyelenggaraInputLabel = document.createElement("span");
  penyelenggaraInputLabel.classList.add("input__label");
  penyelenggaraInputLabel.textContent = "Gelar";

  penyelenggaraLabel.appendChild(penyelenggaraInput);
  penyelenggaraLabel.appendChild(penyelenggaraInputLabel);
  expandableBetween.appendChild(penyelenggaraLabel);

  expandableDetail.appendChild(expandableBetween);

  const lokasiLabel = document.createElement("label");
  lokasiLabel.classList.add("input");

  const lokasiInput = document.createElement("input");
  lokasiInput.classList.add("input__field");
  lokasiInput.type = "text";
  lokasiInput.placeholder = " ";

  const lokasiInputLabel = document.createElement("span");
  lokasiInputLabel.classList.add("input__label");
  lokasiInputLabel.textContent = "Lokasi";

  lokasiLabel.appendChild(lokasiInput);
  lokasiLabel.appendChild(lokasiInputLabel);
  expandableDetail.appendChild(lokasiLabel);

  const expandableBetween2 = document.createElement("div");
  expandableBetween2.classList.add("expandable-between");

  const startMonthLabel = document.createElement("label");
  startMonthLabel.classList.add("input_half");

  const startMonthInput = document.createElement("input");
  startMonthInput.classList.add("input__field");
  startMonthInput.type = "text";
  startMonthInput.placeholder = " ";

  const startMonthInputLabel = document.createElement("span");
  startMonthInputLabel.classList.add("input__label");
  startMonthInputLabel.textContent = "Bulan Mulai";

  startMonthLabel.appendChild(startMonthInput);
  startMonthLabel.appendChild(startMonthInputLabel);
  expandableBetween2.appendChild(startMonthLabel);

  const startYearLabel = document.createElement("label");
  startYearLabel.classList.add("input_half");

  const startYearInput = document.createElement("input");
  startYearInput.classList.add("input__field");
  startYearInput.type = "text";
  startYearInput.placeholder = " ";

  const startYearInputLabel = document.createElement("span");
  startYearInputLabel.classList.add("input__label");
  startYearInputLabel.textContent = "Tahun Mulai";

  startYearLabel.appendChild(startYearInput);
  startYearLabel.appendChild(startYearInputLabel);
  expandableBetween2.appendChild(startYearLabel);

  expandableDetail.appendChild(expandableBetween2);

  const expandableBetween3 = document.createElement("div");
  expandableBetween3.classList.add("expandable-between");

  const endMonthLabel = document.createElement("label");
  endMonthLabel.classList.add("input_half");

  const endMonthInput = document.createElement("input");
  endMonthInput.classList.add("input__field");
  endMonthInput.type = "text";
  endMonthInput.placeholder = " ";

  const endMonthInputLabel = document.createElement("span");
  endMonthInputLabel.classList.add("input__label");
  endMonthInputLabel.textContent = "Bulan Selesai";

  endMonthLabel.appendChild(endMonthInput);
  endMonthLabel.appendChild(endMonthInputLabel);
  expandableBetween3.appendChild(endMonthLabel);

  const endYearLabel = document.createElement("label");
  endYearLabel.classList.add("input_half");

  const endYearInput = document.createElement("input");
  endYearInput.classList.add("input__field");
  endYearInput.type = "text";
  endYearInput.placeholder = " ";

  const endYearInputLabel = document.createElement("span");
  endYearInputLabel.classList.add("input__label");
  endYearInputLabel.textContent = "Tahun Selesai";

  endYearLabel.appendChild(endYearInput);
  endYearLabel.appendChild(endYearInputLabel);
  expandableBetween3.appendChild(endYearLabel);

  expandableDetail.appendChild(expandableBetween3);

  const descDiv = document.createElement("div");
  const descActionText = document.createElement("p");
  descActionText.classList.add("action-text");
  descActionText.textContent = "Deskripsi";

  descDiv.appendChild(descActionText);

  const descTextArea = document.createElement("textarea");
  descTextArea.classList.add("txt-area");
  descTextArea.oninput = function() {
    adjustTextareaHeight(this);
  };

  descDiv.appendChild(descTextArea);
  expandableDetail.appendChild(descDiv);

  awardsContainer.insertBefore(expandableDetail, awardsContainer.lastChild);
}

document.addEventListener("DOMContentLoaded", function () {
  const iconTextDivs = document.querySelectorAll(".icon-text");

  iconTextDivs.forEach((div) => {
    const span = div.querySelector("span");
    const sectionId = span.textContent.toLowerCase().replace(/\s/g, "-");
    const section = document.getElementById(sectionId);

    div.addEventListener("click", function() {
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  displayAwards(awards);
  displayHistorys(historys);
  displayAcademic(academics)

  const moreAwards = document.createElement("button");
  moreAwards.classList.add("add-more-button");
  moreAwards.textContent = "Tambah Penghargaan";
  moreAwards.addEventListener("click", newAwards);

  const awardsContainer = document.getElementById("penghargaan");
  awardsContainer.appendChild(moreAwards);

  const moreHistory = document.createElement("button");
  moreHistory.classList.add("add-more-button");
  moreHistory.textContent = "Tambah Riwayat";
  moreHistory.addEventListener("click", newHistory);

  const historyContainer = document.getElementById("riwayat");
  historyContainer.appendChild(moreHistory);

  const moreAcademic = document.createElement("button");
  moreAcademic.classList.add("add-more-button");
  moreAcademic.textContent = "Tambah Akademik";
  moreAcademic.addEventListener("click", newAcademic);

  const academicContainer = document.getElementById("akademik");
  academicContainer.appendChild(moreAcademic);
});
