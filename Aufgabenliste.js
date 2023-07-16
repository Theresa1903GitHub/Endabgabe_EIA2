"use strict";
var L06_Aufgabenliste_Dataserver;
(function (L06_Aufgabenliste_Dataserver) {
    /*
        Aufgabe: 05_Aufgabenliste_Client
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 29.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */
    window.addEventListener("load", handleLoad);
    async function handleLoad() {
        let button = document.getElementById("btn");
        button.addEventListener("click", newTask);
        let response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Tasks");
        let task = await response.text();
        let data = JSON.parse(task);
        L06_Aufgabenliste_Dataserver.generateContent(data);
    }
    async function newTask() {
        let Title = document.querySelector("#inputText");
        let Comment = document.querySelector("#comment");
        let Name = document.querySelector("#AddName");
        let Date = document.querySelector("#date");
        let Time = document.querySelector("#time");
        let newTaskInput = { title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false };
        console.log(newTaskInput);
        let query = JSON.stringify(newTaskInput);
        await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=insert&collection=Tasks&data=" + query);
        Title.value = "";
        Comment.value = "";
        Name.value = "Lisa";
        Date.value = "2023-04-30";
        Time.value = "10:00";
    }
    ;
})(L06_Aufgabenliste_Dataserver || (L06_Aufgabenliste_Dataserver = {}));
//# sourceMappingURL=Aufgabenliste.js.map