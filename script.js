// 1. Modal Logic
const modal = document.getElementById("loginModal");
const openBtn = document.getElementById("openLogin");
const closeBtn = document.querySelector(".close-btn");

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// 2. Countdown Timer (Target: Jan 15, 2026)
function updateCountdown() {
    const targetDate = new Date("January 15, 2026 08:00:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
}
setInterval(updateCountdown, 1000);

// 3. Form Submission Simulation
document.getElementById("admissionForm").onsubmit = (e) => {
    e.preventDefault();
    alert("Application sent to Dr. Godwin Hungwe's office!");
};

// 4. Back to Top Button
const btt = document.getElementById("backToTop");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) btt.style.display = "block";
    else btt.style.display = "none";
};
btt.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});