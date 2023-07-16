namespace Endabgabe {

    export async function generateContent(_data: menu): Promise<void> {
        let Tasklist: any[] = [];

        for (let x in _data.data) {
            Tasklist.push(x);
        }

        for (let i of Tasklist) {
            let newTaskDiv: HTMLFormElement = document.createElement("form");   
            newTaskDiv.classList.add("newTask");
            let toDoList: HTMLElement = <HTMLElement> document.getElementById("toDoList");
            toDoList.appendChild(newTaskDiv);
    
            let Subgroup : HTMLDivElement = document.createElement("div");
            Subgroup.classList.add("subgroup");
            newTaskDiv.appendChild(Subgroup);
    
            let Title : HTMLInputElement = document.createElement("input");
            Title.type = "text";
            Title.value = _data.data[i].name;
            Title.classList.add("taskText");
            Subgroup.appendChild(Title);  
    
            let Space: HTMLDivElement = document.createElement("div");
            Space.classList.add("space");
            Subgroup.appendChild(Space);
    
            let DateTime: HTMLDivElement  = document.createElement("div");
            DateTime.classList.add("dateUndone");
            DateTime.id = "DateTime";
            Subgroup.appendChild(DateTime);
    
            let Date: HTMLInputElement = document.createElement("input");
            Date.type = "date";
            Date.classList.add("dates");
            Date.value = _data.data[i].flavor;
            DateTime.appendChild(Date);
    
            let Time: HTMLInputElement = document.createElement("input"); 
            Time.type = "time";
            Time.classList.add("dates");
            Time.value = _data.data[i].iceballs;
            DateTime.appendChild(Time);   
            
            let Group1 : HTMLDivElement = document.createElement("div");
            Group1.classList.add("group1");
            newTaskDiv.appendChild(Group1);
                
            let Comment : HTMLTextAreaElement = document.createElement("textarea");
            Comment.classList.add("comments");
            Comment.value = _data.data[i].comment;
            newTaskDiv.appendChild(Comment);
            
            let Name: HTMLInputElement = document.createElement("input");
            Name.type = "text";
            Name.classList.add("mediumbold", "name")
            Name.value = _data.data[i].name;
            newTaskDiv.appendChild(Name);
           
            let Subgroup1 : HTMLDivElement = document.createElement("div");
            Subgroup1.classList.add("subgroup1")
            newTaskDiv.appendChild(Subgroup1);
           
            let inProgress: HTMLInputElement = document.createElement("input");
            inProgress.type = "radio";
            inProgress.id = _data.data[i].title  + "Progress";
            inProgress.value = _data.data[i].name;
            inProgress.name = "radio" + i;
            
            let LabelProgress : HTMLLabelElement = document.createElement("label");
            LabelProgress.textContent = "in progress";
            LabelProgress.classList.add("medium");
            LabelProgress.classList.add("label");
            LabelProgress.htmlFor = _data.data[i].title + "Progress";
    
            Subgroup1.appendChild(inProgress);
            Subgroup1.appendChild(LabelProgress);
    
            let done: HTMLInputElement = document.createElement("input");
            done.type = "radio";
            done.id = _data.data[i].title + "Done";
            done.value = _data.data[i].name;
            done.name = "radio" + i;
            
            let LabelDone : HTMLLabelElement = document.createElement("label");
            LabelDone.textContent = "done";
            LabelDone.classList.add("medium");
            LabelDone.classList.add("label");
            LabelDone.htmlFor = _data.title + "Done";
    
            Subgroup1.appendChild(done);
            Subgroup1.appendChild(LabelDone);
    
            let Trash : HTMLImageElement = document.createElement("img");
            Trash.setAttribute("src", "./images/u8.svg");
            Trash.classList.add("trash");
            
            Trash.addEventListener("click", async function (){
                await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=delete&collection=Recipes&id=" + i);
                deleteTask(newTaskDiv, Space);                
            });

            newTaskDiv.addEventListener("change", function (): void{
                editTask ();
                
            });        
            
    async function editTask(){
        let changedTitle = Title.value;
        let changedComment = Comment.value;
        let changedName = Name.value;
        let changedDate = Date.value;
        let changedTime = Time.value;
        let changedDone = done.checked;

        let changedTaskInput: Sundae = {
            title: changedTitle, 
            comment: changedComment, 
            name: changedName, 
            date: changedDate, 
            time: changedTime, 
            done: changedDone
            }
        
        let query = JSON.stringify(changedTaskInput); 
        
        await fetch("https://webuser.hs-furtwangen.de/~hauserth/Database/?command=update&collection=Recipes&id=" + i + "&data=" + query);        
        };
        
        Subgroup1.appendChild(Trash);
        toDoList.appendChild(Space);
        };

    async function deleteTask(_data: HTMLFormElement, _data2: HTMLDivElement){        
        let toDoList: HTMLElement = <HTMLElement> document.getElementById("toDoList");
        toDoList.removeChild(_data);
        toDoList.removeChild(_data2);
        };
    };
}
