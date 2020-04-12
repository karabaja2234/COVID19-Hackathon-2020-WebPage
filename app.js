const hamburger_menu = document.querySelector(".hamburger i");
const nav_bar = document.querySelector(".nav-bar");
const links = document.querySelectorAll(".nav-bar li");

$(hamburger_menu).click(function () {
    nav_bar.classList.toggle("open");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
});

/*navigacija mijenja boju pozadine kada scrolamo stranicu
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
});
*/
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $(hamburger_menu).addClass("color_black");
    } else {
        $(hamburger_menu).removeClass("color_black");
    }
});
