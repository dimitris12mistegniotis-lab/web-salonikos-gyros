document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggleBtn = document.getElementById("dropdownToggleBtn");
    const topDropdownMenu = document.getElementById("topDropdownMenu");
    const drawerOpenBtn = document.getElementById("drawerOpenBtn");
    const drawerCloseBtn = document.getElementById("drawerCloseBtn");
    const sideDrawer = document.getElementById("sideDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    const searchToggleBtn = document.getElementById("searchToggleBtn");
    const searchBarContainer = document.getElementById("searchBarContainer");
    const menuSearchInput = document.getElementById("menuSearchInput");

    function switchPage(pageKey) {
        document.querySelectorAll(".page-section").forEach(function (sec) {
            sec.classList.remove("active");
        });
        const target = document.getElementById("page-" + pageKey);
        if (target) {
            target.classList.add("active");
        }

        document.querySelectorAll("[data-page]").forEach(function (link) {
            if (link.getAttribute("data-page") === pageKey) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        topDropdownMenu.classList.remove("open");
        sideDrawer.classList.remove("open");
        drawerOverlay.classList.remove("open");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    dropdownToggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        topDropdownMenu.classList.toggle("open");
    });

    document.addEventListener("click", function () {
        topDropdownMenu.classList.remove("open");
    });

    drawerOpenBtn.addEventListener("click", function () {
        sideDrawer.classList.add("open");
        drawerOverlay.classList.add("open");
    });

    drawerCloseBtn.addEventListener("click", function () {
        sideDrawer.classList.remove("open");
        drawerOverlay.classList.remove("open");
    });

    drawerOverlay.addEventListener("click", function () {
        sideDrawer.classList.remove("open");
        drawerOverlay.classList.remove("open");
    });

    document.querySelectorAll("[data-page]").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const pageKey = item.getAttribute("data-page");
            switchPage(pageKey);
        });
    });

    document.querySelectorAll("[data-goto]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const pageKey = btn.getAttribute("data-goto");
            switchPage(pageKey);
        });
    });

    searchToggleBtn.addEventListener("click", function () {
        searchBarContainer.classList.toggle("open");
        if (searchBarContainer.classList.contains("open")) {
            menuSearchInput.focus();
        }
    });

    menuSearchInput.addEventListener("input", function () {
        const query = menuSearchInput.value.trim().toLowerCase();
        if (query.length > 0) {
            switchPage("menu");
        }
        document.querySelectorAll(".menu-card").forEach(function (card) {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(query) ? "block" : "none";
        });
    });
});
