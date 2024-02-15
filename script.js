const navItems = document.querySelectorAll("#navbarMain.navbar-nav .nav-item");

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        const navItemActive = document.querySelector("#navbarMain.navbar-nav .nav-item.active");
        if (navItemActive) {
            navItemActive.classList.remove("active");
        }
        navItem.classList.add("active")
    })
});
