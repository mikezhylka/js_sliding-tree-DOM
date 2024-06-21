document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(t),t.addEventListener("click",function(){var t=e.querySelector("ul");t.style.display||(t.style.display="block"),"block"===t.style.display?t.style.display="none":t.style.display="block"})});
//# sourceMappingURL=index.c9216bb8.js.map
