document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("quick-menu");
    const closeButton = document.getElementById("menu-close");
    const mobileApp = document.querySelector(".mobile-app");

    if (!modal) return;


    /* ========================================
       팝업 열기
    ======================================== */

    function openQuickMenu() {

        modal.classList.add("show");

        document.body.classList.add("popup-open");

    }

    

    /* ========================================
       팝업 닫기
    ======================================== */

    function closeQuickMenu() {

        modal.classList.remove("show");

        document.body.classList.remove("popup-open");

    }


    /* ========================================
       ① 페이지 처음 들어오면 팝업 바로 열기
    ======================================== */

    openQuickMenu();


    /* ========================================
       ② X 버튼
    ======================================== */

    if (closeButton) {

        closeButton.addEventListener("click", function (event) {

            event.stopPropagation();

            closeQuickMenu();

        });

    }


    /* ========================================
       ③ 어두운 배경을 누르면 닫기
    ======================================== */

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            closeQuickMenu();

        }

    });


    /* ========================================
       ④ 햄버거 메뉴를 누르면 다시 열기
    ======================================== */

    const menuButton = document.querySelector(
        ".header-icons img[alt='메뉴']"
    );


    if (menuButton) {

        menuButton.addEventListener("click", function (event) {

            event.preventDefault();

            openQuickMenu();

        });

    }


    /* ========================================
       ⑤ 팝업이 닫힌 상태에서
          빈 공간을 누르면 다시 열기
    ======================================== */

    mobileApp.addEventListener("click", function (event) {

        /* 팝업이 이미 열려 있으면 무시 */
        if (modal.classList.contains("show")) {
            return;
        }


        /* 아래 요소를 누른 경우에는 팝업을 열지 않음 */

        if (
            event.target.closest("a") ||
            event.target.closest("button") ||
            event.target.closest(".header-icons") ||
            event.target.closest(".card-box") ||
            event.target.closest(".stat-card") ||
            event.target.closest(".btn-primary")
        ) {
            return;
        }


        /* 빈 공간이면 팝업 열기 */

        openQuickMenu();

    });

});