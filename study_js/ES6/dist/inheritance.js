'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by patriot on 22.05.2017.
 */
var Task = function () {
    function Task(title) {
        _classCallCheck(this, Task);

        console.log('Создание задачи!');
        this.title = title;
        this.done = false;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('\u0417\u0430\u0434\u0430\u0447\u0430 "' + this.title + '" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430!');
        }
    }]);

    return Task;
}();

var SubTask = function (_Task) {
    _inherits(SubTask, _Task);

    function SubTask(title) {
        _classCallCheck(this, SubTask);

        console.log('Создание подзадачи!');

        var _this = _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this));

        _this.title = title;

        return _this;
    }

    _createClass(SubTask, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('\u041F\u043E\u0434\u0437\u0430\u0434\u0430\u0447\u0430 "' + this.title + '" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430!');
        }
    }]);

    return SubTask;
}(Task);

var task = new Task('JS');
var subTask = new SubTask('ES6');

subTask.complete();

console.dir(task);
console.dir(subTask);

console.log();
console.log();

console.info(subTask instanceof SubTask);
console.dir(subTask instanceof Task);