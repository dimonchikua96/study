class Task {
    constructor(title = 'default task') {
        this.title = title;
        this._done = false;
        console.log('Новая задача: '+ this.title);
        //статическое свойство
        Task.count += 1;
    }

    //метод
    complete() {
        this._done = true;
        console.log(`Задача "${this.title}" выполнена!`);
    }

    //static method
    static getDefaultTitle() {
        return 'default task';
    }

    //геттер сеттер, функции но ведут себя как свойства
    get done() {
        return this._done === true ? 'Задача выполнена' : 'Задача не выполнена';
    }

    set done(value) {
        this._done = value;
    }
}

let task = new Task('Купить продукты');

//геттер сеттер
console.log(task.done);

task.complete();

//геттер сеттер
console.log(task.done);

//статическое свойство
console.log(Task.count);


console.log(Task.getDefaultTitle());
console.log(typeof task);
console.log(task instanceof Task);