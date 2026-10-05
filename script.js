// 1. የኢትዮጵያ ዲጂታል ሰዓት እና ቀን ማስኬጃ
function updateEthiopianClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ethHours = hours - 6;
    if (ethHours <= 0) {
        ethHours += 12;
    }

    let displayHours = ethHours < 10 ? "0" + ethHours : ethHours;
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    let timeStr = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    document.getElementById("eth-time").innerText = timeStr;

    let day = now.getDate();
    let currentMonthName = "መስከረም";
    let currentYear = 2019;

    document.getElementById("eth-date").innerText = `${currentMonthName} ${day}፣ ${currentYear} ዓ.ም`;
}

// ሰዓቱን በየ 1 ሰከንድ ማደስ
setInterval(updateEthiopianClock, 1000);
updateEthiopianClock();


// 2. የሰርች ማጣሪያ (Search Filter)
const searchInput = document.querySelector('.search-container input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const text = card.querySelector('p').textContent.toLowerCase();
    if (title.includes(searchTerm) || text.includes(searchTerm)) {
      card.style.display = 'block';
        card.scrollIntoView({ behavior: 'smooth' });
    } else {
      card.style.display = 'none';
    }
  });
});

// 3. የጨለማ ሁነታን ለመቀያየር (Dark Mode Toggle)
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// 4. የማህበራዊ ሚዲያ ማጋሪያ (Social Share)
function share(platform) {
  const currentUrl = encodeURIComponent(window.location.href);
  if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank');
  } else if (platform === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?url=${currentUrl}`, '_blank');
  }
}

// 5. የካታጎሪ ማጣሪያ (Category Filter)
function filterContent(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}
