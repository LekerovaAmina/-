document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "bar", // можно "line", "pie" и т. д.
        data: {
            labels: ["Январь", "Февраль", "Март", "Апрель", "Май"],
            datasets: [{
                label: "Продажи",
                data: [12, 19, 3, 5, 2],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");
    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const parent = this.parentNode;
            parent.classList.toggle("active");
        });
    });
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Astana&appid=YOUR_API_KEY&units=metric")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("weather").innerText = `Температура: ${data.main.temp}°C`;
  })
  .catch(error => console.error("Ошибка:", error));
