const params = new URLSearchParams(window.location.search);
        const section = params.get("section");
        const page = params.get("page");

        if (section === "menu") {
            const menu = document.querySelector(".menu-view");
            menu.style.display = "flex";

            if (page) {
                const currentLink = document.querySelector(`[data-page="${page}"]`);
                if (currentLink) {
                    currentLink.setAttribute("aria-current", "page");
                }
            }
        }

        if (section === "footer") {
            const footer = document.querySelector(".footer-view");
            footer.style.display = "grid";
        }