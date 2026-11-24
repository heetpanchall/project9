
/* CommerceVerse: Shared JavaScript */

(function () {
  "use strict";

  const STORAGE_KEY = "commerceverse-progress";

  const CommerceVerse = {
    progress: {
      count(id) {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        return Array.isArray(data[id]) ? data[id].length : 0;
      },

      mark(id, item) {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        if (!Array.isArray(data[id])) data[id] = [];

        if (!data[id].includes(item)) {
          data[id].push(item);
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      },

      reset(id) {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        delete data[id];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
    },

    renderProgress(element, count, total) {
      if (!element) return;

      const percentage = total > 0
        ? Math.min(100, (count / total) * 100)
        : 0;

      element.style.setProperty("--progress", percentage + "%");

      const fill = element.querySelector("i");
      if (fill) fill.style.width = percentage + "%";
    },

    openDialog(dialog) {
      if (dialog && !dialog.open) {
        dialog.showModal();
      }
    },

    closeDialog(dialog) {
      if (dialog && dialog.open) {
        dialog.close();
      }
    }
  };

  window.CommerceVerse = CommerceVerse;

  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
      menuButton.addEventListener("click", function () {
        const isOpen = mobileMenu.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
      });
    }

    document.querySelectorAll("[data-print]").forEach(function (button) {
      button.addEventListener("click", function () {
        window.print();
      });
    });
  });

})();
