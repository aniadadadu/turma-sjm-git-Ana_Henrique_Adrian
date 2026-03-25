const filterButtons = document.querySelectorAll("[data-filter]");
        const memberCards = document.querySelectorAll(".member-card");

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const filter = button.getAttribute("data-filter");

                filterButtons.forEach((item) => item.classList.remove("active"));
                button.classList.add("active");

                memberCards.forEach((card) => {
                    const area = card.getAttribute("data-area");
                    const visible = filter === "all" || filter === area;
                    card.classList.toggle("is-hidden", !visible);
                });
            });
        });

        const memberToggleButtons = document.querySelectorAll("[data-member-toggle]");
        memberToggleButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const targetId = button.getAttribute("data-member-toggle");
                const details = document.getElementById(targetId);
                if (!details) {
                    return;
                }
                const isOpen = details.classList.toggle("open");
                button.textContent = isOpen ? "Ocultar perfil" : "Ver perfil";
            });
        });