 function goToLogin() {
    window.location.href = "login.html";
  }
  
  const profiles = [
    {
      name: "Aisha Sharma",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      offered: "Graphic Design, UI/UX",
      wanted: "Web Development",
      rating: 4
    },
    {
      name: "Rohit Mehra",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      offered: "JavaScript, React",
      wanted: "Public Speaking",
      rating: 5
    },
    {
      name: "Simran Kaur",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
      offered: "Photography",
      wanted: "Video Editing",
      rating: 4
    },
    {
      name: "Aditya Jain",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
      offered: "Content Writing",
      wanted: "SEO Marketing",
      rating: 3
    },
    {
      name: "Harshit Verma",
      photo: "https://randomuser.me/api/portraits/men/5.jpg",
      offered: "Python, ML",
      wanted: "Graphic Design",
      rating: 5
    },
    {
      name: "Priya Sinha",
      photo: "https://randomuser.me/api/portraits/women/6.jpg",
      offered: "Data Science",
      wanted: "Animation",
      rating: 5
    },
    {
      name: "Kunal Batra",
      photo: "https://randomuser.me/api/portraits/men/7.jpg",
      offered: "Android Development",
      wanted: "UI/UX",
      rating: 4
    }
  ];

  let currentPage = 1;
  const perPage = 5;

  function renderCards() {
    const list = document.getElementById("card-list");
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const visibleProfiles = profiles.slice(start, end);

    list.innerHTML = visibleProfiles.map(p => `
  <div class="profile-card">
    <img src="${p.photo}" alt="Profile Photo">
    <div class="card-details">
      <h3>${p.name}</h3>
      <p><strong>Skills Offered:</strong> ${p.offered}</p>
      <p><strong>Skills Wanted:</strong> ${p.wanted}</p>
    </div>
    <div class="right-column">
      <button class="request-btn">Request Swap</button>
      <div class="rating">${'⭐'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)}</div>
    </div>
  </div>
`).join("");

          
         

    document.getElementById("page-number").textContent = `Page ${currentPage}`;
  }

  function nextPage() {
    if (currentPage * perPage < profiles.length) {
      currentPage++;
      renderCards();
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      renderCards();
    }
  }
function goToProfile() {
    window.location.href = "profile.html";
  }
  // Initial render
  renderCards();

