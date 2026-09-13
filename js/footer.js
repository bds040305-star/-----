document.addEventListener("DOMContentLoaded", function () {

    const footerContainer = document.getElementById("footer");

    if (!footerContainer) {
        return;
    }


    fetch("./footer.html")
        .then(response => {

            if (!response.ok) {
                throw new Error("footer.html을 불러올 수 없습니다.");
            }

            return response.text();

        })

        .then(data => {

            footerContainer.innerHTML = data;


            /* 현재 페이지 확인 */

            const currentPage =
                window.location.pathname
                    .split("/")
                    .pop()
                    .replace(".html", "");


            /* 현재 페이지 네비 활성화 */

            const navItems =
                footerContainer.querySelectorAll(".nav-item");


            navItems.forEach(function (item) {

                const page =
                    item.getAttribute("data-page");


                if (page === currentPage) {

                    item.classList.add("active");

                }

            });

        })

        .catch(error => {

            console.error("Footer Error:", error);

        });

});