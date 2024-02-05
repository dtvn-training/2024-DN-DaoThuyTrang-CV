document.addEventListener("DOMContentLoaded", function () {
    var headerItems = document.querySelectorAll(".header-item");

    headerItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.querySelector("a").getAttribute("href");
            var targetElement = document.querySelector(targetId);

            if (targetElement) {
                var offset = 80;
                var targetOffsetTop = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});