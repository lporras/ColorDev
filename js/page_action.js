var app = (function() {

    var sel = document.getElementById("themes"),

        loadTheme = function (nameFile) {
            chrome.tabs.insertCSS(null, {file: "css/themes/" + nameFile + ".css"});
        },

        saveOptions = function(options) {
            localStorage["theme"] = options.name;
        },

        restoreOption = function(options) {
            var theme = localStorage["theme"];
            if (!theme) {
                return;
            }

            for (var i = 0, lenght = sel.children.length; i < lenght; i++) {
                var child = sel.children[i];
                if (child.value == theme) {
                    child.selected = true;
                    break;
                }
            }
        };

    sel.addEventListener("click", function() {
        var themeSelected = sel.options[sel.selectedIndex].value;
        var options = {"name": themeSelected};
        loadTheme(themeSelected);
        saveOptions(options);

    });

    document.addEventListener('DOMContentLoaded', restoreOption);

})();