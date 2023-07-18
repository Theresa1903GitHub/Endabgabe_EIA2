"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.Menu = [];
    Endabgabe.MenuList = [];
    let recipeTitle;
    async function generateNewSundae(_data) {
        for (let x in _data.data) {
            Endabgabe.Menu.push(x);
        }
        for (let i of Endabgabe.Menu) {
            let newSundaeDiv = document.createElement("form");
            newSundaeDiv.id = "Sundae";
            newSundaeDiv.classList.add("newSundae");
            let menu = document.getElementById("menu");
            menu.classList.add("menu");
            menu.classList.add("wrapper");
            menu.appendChild(newSundaeDiv);
            let Title = document.createElement("input");
            Title.type = "text";
            Title.value = _data.data[i].title;
            Title.classList.add("recipeTitle", "MenuInput");
            newSundaeDiv.appendChild(Title);
            recipeTitle = Title.value;
            Endabgabe.MenuList.push(recipeTitle);
            let Space = document.createElement("div");
            Space.classList.add("space");
            let Iceballs = document.createElement("input");
            Iceballs.type = "number";
            Iceballs.classList.add("iceballsInput", "MenuInput");
            Iceballs.value = _data.data[i].iceballs;
            newSundaeDiv.appendChild(Iceballs);
            let Flavor = document.createElement("input");
            Flavor.classList.add("flavorInput", "MenuInput");
            Flavor.type = "text";
            Flavor.value = _data.data[i].flavor;
            // Flavor.id = "DateTime";
            newSundaeDiv.appendChild(Flavor);
            let Cream = document.createElement("input");
            Cream.type = "checkbox";
            Cream.id = _data.data[i].title + "Cream";
            Cream.checked = _data.data[i].cream;
            newSundaeDiv.appendChild(Cream);
            let CreamText = document.createElement("label");
            CreamText.textContent = "Sahne";
            CreamText.classList.add("p");
            CreamText.htmlFor = _data.data[i].title + "Cream";
            newSundaeDiv.appendChild(CreamText);
            let Space1 = document.createElement("div");
            Space1.classList.add("space");
            let Sauce = document.createElement("input");
            Sauce.classList.add("sauceInput", "MenuInput");
            Sauce.type = "text";
            Sauce.value = _data.data[i].sauce;
            newSundaeDiv.appendChild(Sauce);
            let Sprinkles = document.createElement("input");
            Sprinkles.type = "checkbox";
            Sprinkles.checked = _data.data[i].sprinkles;
            Sprinkles.id = _data.data[i].title + "Sprinkles";
            newSundaeDiv.appendChild(Sprinkles);
            let SprinklesText = document.createElement("label");
            SprinklesText.textContent = "Streusel";
            SprinklesText.classList.add("p");
            SprinklesText.htmlFor = _data.data[i].title + "Sprinkles";
            newSundaeDiv.appendChild(SprinklesText);
            let Price = document.createElement("input");
            Price.type = "number";
            Price.classList.add("iceballsInput", "MenuInput");
            Price.value = _data.data[i].price;
            newSundaeDiv.appendChild(Price);
            let Trash = document.createElement("img");
            Trash.setAttribute("src", "./images/u8.svg");
            Trash.classList.add("trash");
            menu.appendChild(Space);
            Trash.addEventListener("click", async function () {
                await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=delete&collection=Recipes&id=" + i);
                deleteRecipe(newSundaeDiv, Space);
            });
            newSundaeDiv.addEventListener("change", function () {
                editRecipe();
            });
            async function editRecipe() {
                let changedName = Title.value;
                let changedFlavor = Flavor.value;
                let changedIceballs = Iceballs.value;
                let changedCream = Cream.checked;
                let changedSauce = Sauce.value;
                let changedSprinkles = Sprinkles.checked;
                let changedPrice = Price.value;
                let changedRecipeInput = {
                    title: changedName,
                    flavor: changedFlavor,
                    iceballs: changedIceballs,
                    cream: changedCream,
                    sauce: changedSauce,
                    sprinkles: changedSprinkles,
                    price: changedPrice
                };
                let query = JSON.stringify(changedRecipeInput);
                await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=update&collection=Recipes&id=" + i + "&data=" + query);
            }
            ;
            newSundaeDiv.appendChild(Trash);
            menu.appendChild(Space);
        }
        ;
        async function deleteRecipe(_data, _data2) {
            let menu = document.getElementById("menu");
            menu.removeChild(_data);
            menu.removeChild(_data2);
        }
        ;
    }
    Endabgabe.generateNewSundae = generateNewSundae;
    ;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=generateNewSundae.js.map