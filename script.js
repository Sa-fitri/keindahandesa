function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("show");

}


/* Tutup menu setelah link diklik */

document
    .querySelectorAll(".nav-menu a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                const menu =
                    document.getElementById("navMenu");

                menu.classList.remove("show");

            }
        );

    });
