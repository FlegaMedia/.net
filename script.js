/*የሴቲንግ*/

const toggleBtn = document.getElementById('menu-toggle-btn');
const sidebarMenu = document.getElementById('sidebarMenu');

// አሁን ከሳይድባር ውስጥ ያለው "Profile" ሊንክ የሚቀመጥበት መነሻ
const profileTrigger = document.getElementById('profile-trigger');
const profileDropdown = document.getElementById('profileDropdown');

// የሜኑ አዶውን ሲጫኑ ሳይድባር ሜኑው እንዲመጣ/እንዲጠፋ
toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebarMenu.classList.toggle('hidden');
  // የፕሮፋይል ሜኑ ክፍት ከሆነ እንዲዘጋ
  if (!profileDropdown.classList.contains('hidden')) {
    profileDropdown.classList.add('hidden');
  }
});

// በሳይድባር ውስጥ ያለውን "Profile" ሲጫኑ የድሮፕዳውን ሜኑ እንዲመጣ/እንዲጠፋ
profileTrigger.addEventListener('click', (e) => {
  e.preventDefault(); // ሊንኩ ወደሌላ ቦታ እንዳይወስድ ይከላከላል
  e.stopPropagation();
  profileDropdown.classList.toggle('hidden');
  
  // የሳይድባር ሜኑ ክፍት ከሆነ እንዲዘጋ (አስፈላጊ ሆኖ ከታየ)
  // if (!sidebarMenu.classList.contains('hidden')) {
  //   sidebarMenu.classList.add('hidden');
  // }
});

// ከሜኑዎቹ ውጭ ሌላ ቦታ ሲጫን ሁለቱም እንዲዘጉ
window.addEventListener('click', () => {
  if (!sidebarMenu.classList.contains('hidden')) {
    sidebarMenu.classList.add('hidden');
  }
  if (!profileDropdown.classList.contains('hidden')) {
    profileDropdown.classList.add('hidden');
  }
});


// 1. የኢትዮጵያ ዲጂታል ሰዓት እና ቀን ማስኬጃ (ከትክክለኛ መነሻ ጋር)
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

    // የኢትዮጵያ ቀን ቆጠራ መነሻ
    const startDate = new Date('2026-10-05'); 
    const startEthDay = 25;
    const startEthMonth = "መስከረም";
    const startEthYear = 2019;

    let timeDiff = now.getTime() - startDate.getTime();
    let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    let currentDay = startEthDay + dayDiff;
    let currentMonthName = startEthMonth;
    let currentYear = startEthYear;

    if (currentDay > 30) {
        currentDay = currentDay - 30;
        currentMonthName = "ጥቅምት";
    }

    document.getElementById("eth-date").innerText = `${currentMonthName} ${currentDay} - ${currentYear} ዓ.ም`;
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
