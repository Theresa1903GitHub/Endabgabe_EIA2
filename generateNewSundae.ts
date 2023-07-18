namespace Endabgabe {
    export let Menu: any[] = [];
    export let MenuList: string [] = [];
    let recipeTitle : string;

    export async function generateNewSundae(_data: menu): Promise<void> {
        
        for (let x in _data.data) {
            Menu.push(x);
        }

        for (let i of Menu) {
            let newSundaeDiv: HTMLFormElement = document.createElement("form")
            newSundaeDiv.id = "Sundae";
            newSundaeDiv.classList.add("newSundae");
            let menu: HTMLElement = <HTMLElement>document.getElementById("menu");
            menu.classList.add("menu");
            menu.classList.add("wrapper");
            menu.appendChild(newSundaeDiv);

            let Title: HTMLInputElement = document.createElement("input");
            Title.type = "text";
            Title.value = _data.data[i].title;
            Title.classList.add("recipeTitle", "MenuInput");
            newSundaeDiv.appendChild(Title);
            recipeTitle = Title.value;
            MenuList.push(recipeTitle);

            let Space: HTMLDivElement = document.createElement("div");
            Space.classList.add("space");

            let Iceballs: HTMLInputElement = document.createElement("input");
            Iceballs.type = "number";
            Iceballs.classList.add("iceballsInput", "MenuInput");
            Iceballs.value = _data.data[i].iceballs;
            newSundaeDiv.appendChild(Iceballs);

            let Flavor: HTMLInputElement = document.createElement("input");
            Flavor.classList.add("flavorInput", "MenuInput");
            Flavor.type = "text";
            Flavor.value = _data.data[i].flavor;
            // Flavor.id = "DateTime";
            newSundaeDiv.appendChild(Flavor);

            let Cream: HTMLInputElement = document.createElement("input");
            Cream.type = "checkbox";
            Cream.id = _data.data[i].title  + "Cream";
            Cream.checked = _data.data[i].cream;
            newSundaeDiv.appendChild(Cream);

            let CreamText: HTMLLabelElement = document.createElement("label");
            CreamText.textContent = "Sahne";
            CreamText.classList.add("p")
            CreamText.htmlFor = _data.data[i].title + "Cream"
            newSundaeDiv.appendChild(CreamText);

            let Space1: HTMLDivElement = document.createElement("div");
            Space1.classList.add("space");

            let Sauce: HTMLInputElement = document.createElement("input");
            Sauce.classList.add("sauceInput", "MenuInput");
            Sauce.type = "text";
            Sauce.value = _data.data[i].sauce;
            newSundaeDiv.appendChild(Sauce);

            let Sprinkles: HTMLInputElement = document.createElement("input");
            Sprinkles.type = "checkbox";
            Sprinkles.checked = _data.data[i].sprinkles;
            Sprinkles.id = _data.data[i].title  + "Sprinkles";
            newSundaeDiv.appendChild(Sprinkles);

            let SprinklesText: HTMLLabelElement = document.createElement("label");
            SprinklesText.textContent = "Streusel";
            SprinklesText.classList.add("p")
            SprinklesText.htmlFor = _data.data[i].title + "Sprinkles"
            newSundaeDiv.appendChild(SprinklesText);

            let Price: HTMLInputElement = document.createElement("input");
            Price.type = "number";
            Price.classList.add("iceballsInput", "MenuInput");
            Price.value = _data.data[i].price;
            newSundaeDiv.appendChild(Price);

            let Trash: HTMLImageElement = document.createElement("img");
            Trash.setAttribute("src", "./images/u8.svg");
            Trash.classList.add("trash");
            menu.appendChild(Space);

            Trash.addEventListener("click", async function () {
                await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=delete&collection=Recipes&id=" + i);
                deleteRecipe(newSundaeDiv, Space);                         
            });

            newSundaeDiv.addEventListener("change", function (): void {
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

                let changedRecipeInput: Sundae = {
                    title: changedName,
                    flavor: changedFlavor,
                    iceballs: changedIceballs,
                    cream: changedCream,
                    sauce: changedSauce,
                    sprinkles: changedSprinkles,
                    price: changedPrice
                }

                let query = JSON.stringify(changedRecipeInput);

                await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=update&collection=Recipes&id=" + i + "&data=" + query);
            };

            newSundaeDiv.appendChild(Trash);
            menu.appendChild(Space);
        };

        async function deleteRecipe(_data: HTMLFormElement, _data2: HTMLDivElement) {
            let menu: HTMLElement = <HTMLElement>document.getElementById("menu");
            menu.removeChild(_data);
            menu.removeChild(_data2);
        };       
    };
}
