  const toggleButtons = document.querySelectorAll("[data-toggle]");
        toggleButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const targetId = button.getAttribute("data-toggle");
                const target = document.getElementById(targetId);
                if (!target) {
                    return;
                }
                const isOpen = target.classList.toggle("open");
                button.textContent = isOpen ? "Ocultar detalhes" : "Ver detalhes";
            });
        });

        const revealCards = document.querySelectorAll(".project-card.reveal");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, { threshold: 0.2 });
        revealCards.forEach((card) => observer.observe(card));

        const carousels = document.querySelectorAll("[data-carousel]");
        carousels.forEach((carousel) => {
            const items = carousel.querySelectorAll(".carousel-item");
            const indexLabel = carousel.querySelector(".carousel-index");
            const prevButton = carousel.querySelector("[data-carousel-prev]");
            const nextButton = carousel.querySelector("[data-carousel-next]");
            let index = 0;

            const updateCarousel = () => {
                items.forEach((item, itemIndex) => {
                    item.classList.toggle("active", itemIndex === index);
                });
                indexLabel.textContent = `${index + 1} / ${items.length}`;
            };

            prevButton.addEventListener("click", () => {
                index = (index - 1 + items.length) % items.length;
                updateCarousel();
            });

            nextButton.addEventListener("click", () => {
                index = (index + 1) % items.length;
                updateCarousel();
            });

            updateCarousel();
        });