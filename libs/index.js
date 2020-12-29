"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

function ready(handler) {
  if (
    /complete|loaded|interactive/.test(document.readyState) &&
    document.body
  ) {
    handler();
  } else {
    document.addEventListener("DOMContentLoaded", handler, false);
  }
}

const _clickEvents = ["click", "touchstart"];

ready(function () {
  bulmaCollapsible.attach();
  /*
  const burgers = document.querySelectorAll(".burger");
  [].forEach.call(burgers, function (burger) {
    _clickEvents.forEach(function (clickEvent) {
      burger.addEventListener(clickEvent, function (e) {
        e.preventDefault();

        const node = e.currentTarget;
        if (node) {
          node.classList.toggle("is-active");
          // Get the target from the "data-target" attribute
          const target = node.dataset.target;
          if (target) {
            const targetNode = document.querySelector(node.dataset.target);
            if (targetNode) {
              targetNode.classList.toggle("is-active");
            }
          }
        }
      });
    });
  });

  const menus = document.querySelectorAll(".menu");
  [].forEach.call(menus, function (menu) {
    // Open menu which contains the current active item
    const activeMenus = menu.querySelectorAll(
      ".menu-item:not(.has-dropdown).is-active"
    );
    [].forEach.call(activeMenus, function (activeMenu) {
      activeMenu = activeMenu.closest(".menu-item.has-dropdown");
      if (activeMenu) {
        activeMenu.classList.add("is-active");
      }
    });

    const dropdownMenus = menu.querySelectorAll(
      ".menu-item.has-dropdown > .menu-title"
    );
    [].forEach.call(dropdownMenus, function (dropdownMenu) {
      dropdownMenu.addEventListener("click", function (e) {
        e.preventDefault();
        const currentMenu = e.currentTarget;

        // Toggle current menu
        currentMenu
          .closest(".menu-item.has-dropdown")
          .classList.toggle("is-active");

        // Close all other active menus
        const otherActiveMenus = menu.querySelectorAll(
          ".menu-item.has-dropdown.is-active"
        );
        [].forEach.call(otherActiveMenus, function (otherActiveMenu) {
          if (
            !currentMenu.isEqualNode(
              otherActiveMenu.querySelector(".menu-title")
            )
          ) {
            otherActiveMenu.classList.remove("is-active");
          }
        });
      });
    });
  });

  const tabs = document.querySelectorAll(".tabs li a");
  [].forEach.call(tabs, function (tab) {
    if (window.location.hash) {
      const tabToShow = tab
        .closest(".tabs")
        .querySelector('[href="' + window.location.hash + '"]');
      const tabContentToShow = document.querySelector(window.location.hash);
      if (tabToShow && tabContentToShow) {
        const tabToHide = tab.closest(".tabs").querySelector("li.is-active");
        if (tabToHide) {
          const tabToHideLink = tabToHide.querySelector("a");
          const tabContentToHide = document.querySelector(
            tabToHideLink.getAttribute("href")
          );
          if (tabContentToHide) {
            tabContentToHide.classList.remove("is-active");
          }
          tabToHideLink.classList.remove("is-active");
          tabToHide.classList.remove("is-active");
        }
        tabToShow.closest("li").classList.add("is-active");
        tabContentToShow.classList.add("is-active");
      }
    }

    _clickEvents.forEach(function (clickEvent) {
      tab.addEventListener(clickEvent, function (event) {
        event.preventDefault();
        const tab = event.currentTarget;

        const tabToHide = tab.closest(".tabs").querySelector("li.is-active");
        if (tabToHide) {
          const _tabToHideLink = tabToHide.querySelector("a");
          const _tabContentToHide = document.querySelector(
            _tabToHideLink.getAttribute("href")
          );
          if (_tabContentToHide) {
            _tabContentToHide.classList.remove("is-active");
          }
          _tabToHideLink.classList.remove("is-active");

          tabToHide.classList.remove("is-active");
        }
        tab.closest("li").classList.add("is-active");

        const tabContentToShow = document.querySelector(
          tab.getAttribute("href")
        );
        if (tabContentToShow) {
          tabContentToShow.classList.add("is-active");
        }
      });
    });
  });
*/
  const anchors = document.querySelectorAll("a[data-action]");
  [].forEach.call(anchors, function (anchor) {
    _clickEvents.forEach(function (clickEvent) {
      anchor.addEventListener(clickEvent, function (event) {
        const anchorEvent = event.currentTarget;
        const childrenArrowElementClosed = anchorEvent.querySelector(
          "i.mdi-chevron-down"
        );
        const childrenArrowElementOpen = anchorEvent.querySelector(
          "i.mdi-chevron-up"
        );
        if (childrenArrowElementClosed) {
          childrenArrowElementClosed.classList.remove("mdi-chevron-down");
          childrenArrowElementClosed.classList.add("mdi-chevron-up");
        }
        if (childrenArrowElementOpen) {
          childrenArrowElementOpen.classList.remove("mdi-chevron-up");
          childrenArrowElementOpen.classList.add("mdi-chevron-down");
        }
      });
    });
  });
});
