
const tabsBtn = document.querySelectorAll(".tabs__item");
const tabsItem = document.querySelectorAll(".tabs__block");
tabsBtn.forEach(onTabClick);
function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains("active")) {
            tabsBtn.forEach(function (item) {
                item.classList.remove("active");
            });
            tabsItem.forEach(function (item) {
                item.classList.remove("active");
            });
            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
}

const menuIcon = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".header__text");
if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        menuIcon.classList.toggle("active");
        menuBody.classList.toggle("active");
    });
}


const menuLinks = document.querySelectorAll(".nav__item[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToBlock = document.querySelector(menuLink.dataset.goto);
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset;
            if (menuIcon.classList.contains("active")) {
                document.body.classList.remove("lock");
                menuIcon.classList.remove("active");
                menuBody.classList.remove("active");
            }
            window.scrollTo({
                top: goToBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

const lgContainer = document.getElementById('gallery-container');
if (lgContainer) {
    const lg = lightGallery(lgContainer, {
        speed: 500,
        container: lgContainer,
        // Do not allow users to close the gallery
        closable: false,
        // Add maximize icon to enlarge the gallery
        showMaximizeIcon: true,
        plugins: [lgZoom, lgThumbnail],
        autoWidth: false,
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
        closeOnTap: true,
        controls: true,
        counter: false,
    });

    lg.openGallery(0);
}