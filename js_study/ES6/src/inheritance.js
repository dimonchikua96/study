/**
 * Created by patriot on 22.05.2017.
 */
class Task {
    constructor(title){
        console.log('Создание задачи!');
        this._title = title;
        this.done = false;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTask(){
        return 'Default task!'
    }

    complete(){
        this.done = true;
        console.log(`Задача "${this.title}" выполнена!`)
    }
}

class SubTask extends Task{
    constructor(title){
        console.log('Создание подзадачи!');
        super();
        this.title = title;

    }

    complete(){
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена!`)
    }

}


//новый экземпляр
let task = new Task('JS');
let subTask = new SubTask('ES6');

subTask.complete();

//вызов статических методов
Task.getDefaultTask();


console.dir(task);
console.dir(subTask);

console.info(subTask instanceof SubTask);
console.dir(subTask instanceof Task);

