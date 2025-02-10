
//     function updateCountdown() {
//         const countdownDate = new Date("March 31, 2025 23:59:59").getTime();
//         const now = new Date().getTime();
//         const distance = countdownDate - now;

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         document.querySelector(".countdown-days").innerText = days.toString().padStart(2, '0');
//         document.querySelector(".countdown-hours").innerText = hours.toString().padStart(2, '0');
//         document.querySelector(".countdown-minutes").innerText = minutes.toString().padStart(2, '0');
//         document.querySelector(".countdown-seconds").innerText = seconds.toString().padStart(2, '0');

//         if (distance < 0) {
//             clearInterval(interval);
//             document.querySelector(".countdown-timer").innerText = "EXPIRED";
//         }
//     }

//     const interval = setInterval(updateCountdown, 1000);
//   updateCountdown();

  function updateCountdown() {
    const countdownDate = new Date("March 31, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(interval);
        const timerElement = document.querySelector(".countdown-timer");
        if (timerElement) timerElement.innerText = "EXPIRED";
        return;
    }

    const timeUnits = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };

    Object.entries(timeUnits).forEach(([unit, value]) => {
        const element = document.querySelector(`.countdown-${unit}`);
        if (element) element.innerText = value.toString().padStart(2, '0');
    });
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();