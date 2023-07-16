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
            newSundaeDiv.classList.add("newSundae");
            let menu = document.getElementById("menu");
            menu.classList.add("menu");
            menu.classList.add("wrapper");
            menu.appendChild(newSundaeDiv);
            // let Subgroup : HTMLDivElement = document.createElement("div");
            // Subgroup.classList.add("subgroup");
            // newSundaeDiv.appendChild(Subgroup);
            let Title = document.createElement("input");
            Title.type = "text";
            Title.value = _data.data[i].title;
            Title.classList.add("recipeTitle", "MenuInput");
            newSundaeDiv.appendChild(Title);
            recipeTitle = Title.value;
            Endabgabe.MenuList.push(recipeTitle);
            // let Break: HTMLBRElement = document.createElement("br");
            // newSundaeDiv.appendChild(Break);
            let Space = document.createElement("div");
            Space.classList.add("space");
            // Subgroup.appendChild(Space);
            let Flavor = document.createElement("input");
            Flavor.classList.add("flavorInput", "MenuInput");
            Flavor.type = "text";
            Flavor.value = _data.data[i].flavor;
            // Flavor.id = "DateTime";
            newSundaeDiv.appendChild(Flavor);
            let Iceballs = document.createElement("input");
            Iceballs.type = "number";
            Iceballs.classList.add("iceballsInput", "MenuInput");
            Iceballs.value = _data.data[i].iceballs;
            newSundaeDiv.appendChild(Iceballs);
            let Cream = document.createElement("input");
            Cream.type = "checkbox";
            // Cream.labels;
            // Cream.classList.add("dates");
            Cream.checked = _data.data[i].cream;
            newSundaeDiv.appendChild(Cream);
            let CreamText = document.createElement("p");
            CreamText.innerText = "Sahne";
            newSundaeDiv.appendChild(CreamText);
            // let Group1 : HTMLDivElement = document.createElement("div");
            // Group1.classList.add("group1");
            // newSundaeDiv.appendChild(Group1);
            let Sauce = document.createElement("input");
            Sauce.classList.add("sauceInput", "MenuInput");
            Sauce.type = "text";
            Sauce.value = _data.data[i].sauce;
            newSundaeDiv.appendChild(Sauce);
            let Sprinkles = document.createElement("input");
            Sprinkles.type = "checkbox";
            // Sprinkles.classList.add("mediumbold", "name")
            Sprinkles.checked = _data.data[i].sprinkles;
            newSundaeDiv.appendChild(Sprinkles);
            let SprinklesText = document.createElement("p");
            SprinklesText.innerText = "Streusel";
            newSundaeDiv.appendChild(SprinklesText);
            // let Subgroup1 : HTMLDivElement = document.createElement("div");
            // Subgroup1.classList.add("subgroup1")
            // newSundaeDiv.appendChild(Subgroup1);
            // let inProgress: HTMLInputElement = document.createElement("input");
            // inProgress.type = "radio";
            // inProgress.id = _data.data[i].title  + "Progress";
            // inProgress.value = _data.data[i].name;
            // inProgress.name = "radio" + i;
            // let LabelProgress : HTMLLabelElement = document.createElement("label");
            // LabelProgress.textContent = "in progress";
            // LabelProgress.classList.add("medium");
            // LabelProgress.classList.add("label");
            // LabelProgress.htmlFor = _data.data[i].title + "Progress";
            // Subgroup1.appendChild(inProgress);
            // Subgroup1.appendChild(LabelProgress);
            // let done: HTMLInputElement = document.createElement("input");
            // done.type = "radio";
            // done.id = _data.data[i].title + "Done";
            // done.value = _data.data[i].name;
            // done.name = "radio" + i;
            // let LabelDone : HTMLLabelElement = document.createElement("label");
            // LabelDone.textContent = "done";
            // LabelDone.classList.add("medium");
            // LabelDone.classList.add("label");
            // LabelDone.htmlFor = _data.title + "Done";
            // Subgroup1.appendChild(done);
            // Subgroup1.appendChild(LabelDone);
            let Price = document.createElement("input");
            Price.type = "number";
            Price.classList.add("iceballsInput");
            Price.value = _data.data[i].price;
            newSundaeDiv.appendChild(Price);
            let Trash = document.createElement("img");
            Trash.setAttribute("src", "./images/u8.svg");
            // Trash.classList.add("trash");
            menu.appendChild(Space);
            Trash.addEventListener("click", async function () {
                await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=delete&collection=Recipes&id=" + i);
                deleteTask(newSundaeDiv, Space);
            });
            newSundaeDiv.addEventListener("change", function () {
                editTask();
            });
            async function editTask() {
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
            // menu.appendChild(Space);
        }
        ;
        async function deleteTask(_data, _data2) {
            let menu = document.getElementById("menu");
            menu.removeChild(_data);
            menu.removeChild(_data2);
        }
        ;
    }
    Endabgabe.generateNewSundae = generateNewSundae;
})(Endabgabe || (Endabgabe = {}));
// _data2: HTMLDivElement
//# sourceMappingURL=generateNewSundae.js.map