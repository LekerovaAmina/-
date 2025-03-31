document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            init: function () {
                addButtonListeners();
            },
            slideChange: function () {
                addButtonListeners();
            }
        }
    });

    function addButtonListeners() {
        document.querySelectorAll(".more-btn").forEach((btn) => {
            btn.onclick = function () {
                const text = this.previousElementSibling;
                if (text) {
                    text.classList.toggle("hidden");
                    this.textContent = text.classList.contains("hidden") ? "Подробнее" : "Скрыть";
                }
            };
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".info-button");
    const tooltip = document.querySelector(".tooltip");

    button.addEventListener("mouseenter", function () {
        tooltip.style.display = "block";
    });

    button.addEventListener("mouseleave", function () {
        tooltip.style.display = "none";
    });
});
