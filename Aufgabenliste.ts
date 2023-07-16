namespace L06_Aufgabenliste_Dataserver {
    /*
        Aufgabe: 05_Aufgabenliste_Client
        Name: Theresa Hauser
        Matrikel: 272983
        Datum: 29.04.23
        Zusammenarbeit mit Pia Schwer, Marie Eckl
        Quellen: Stack Overflow, Developer Mozilla, Inverted Classroom Jirka, Tasks aus EIA1
        */

    window.addEventListener("load", handleLoad);

    export interface Task {
        title: string;
        comment: string;
        name: string;
        date: string;
        time: string;
        done: boolean;
    }

    export interface toDoList {
        [name: string]: Task[];
    }

    async function handleLoad(): Promise<void> {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btn");
        button.addEventListener("click", newTask);
        
        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=find&collection=Tasks");
        let task: string = await response.text();
        let data: toDoList = JSON.parse(task);
        
        generateContent(data);
    }

    async function newTask(): Promise<void> {
        let Title: HTMLInputElement = <HTMLInputElement>document.querySelector("#inputText");
        let Comment: HTMLInputElement = <HTMLInputElement>document.querySelector("#comment");
        let Name: HTMLInputElement = <HTMLInputElement>document.querySelector("#AddName");
        let Date: HTMLInputElement = <HTMLInputElement>document.querySelector("#date");
        let Time: HTMLInputElement = <HTMLInputElement>document.querySelector("#time");
        
        let newTaskInput: Task = {title: Title.value, comment: Comment.value, name: Name.value, date: Date.value, time: Time.value, done: false }
        console.log(newTaskInput);

        let query = JSON.stringify(newTaskInput); 
        
        await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=insert&collection=Tasks&data=" + query);

        Title.value = "";
        Comment.value = "";
        Name.value = "Lisa";
        Date.value = "2023-04-30";
        Time.value = "10:00";
    };
}