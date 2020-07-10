$(document).ready(function () {
    let mainElem = $(".main");
    let footerElem = $(".footer");
    let headerElem = $(".header");
    let bgElem = $(".bg-rect");

    let animDuration = 1100;
    let sunAmin = 700;

    mainElem.animate({
        opacity: 1
    }, animDuration);


    $(document).on("click", "a:not([href^='#'])", function (e) {
        e.preventDefault();
        let link = $(this).attr("href");
        $(".bg-rect").removeClass("bg-rect__work");
        $(".bg-rect").removeClass("bg-rect__contacts");
        console.log(link);

        if (link == "works.html") {
            $(".bg-rect").addClass("bg-rect__work");
        } else if (link == "contacts.html") {
            $(".bg-rect").addClass("bg-rect__contacts");
        } else if (link.includes("project")) {
            headerElem.animate({
                opacity: 0
            }, sunAmin)
            footerElem.animate({
                opacity: 0
            }, sunAmin)
            bgElem.animate({
                opacity: 0
            }, sunAmin / 2)

            setTimeout(function () {
                $(document.body).addClass("body_white");
            }, sunAmin);
        }

        mainElem.animate({
            opacity: 0
        }, sunAmin);

        let self = this;

        setTimeout(function () {
            window.location.href = $(self).attr("href");
        }, animDuration);
    });
});