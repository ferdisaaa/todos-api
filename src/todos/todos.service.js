"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = class TodosService {
    todos = [];
    idCounter = 1;
    create(createTodoDto) {
        const newTodo = {
            id: this.idCounter++,
            ...createTodoDto,
            isCompleted: false,
        };
        this.todos.push(newTodo);
        return newTodo;
    }
    findAll() {
        return this.todos;
    }
    findOne(id) {
        const todo = this.todos.find((item) => item.id === id);
        if (!todo)
            throw new common_1.NotFoundException(`Todo dengan ID ${id} nggak ditemukan`);
        return todo;
    }
    update(id, updateTodoDto) {
        const todo = this.findOne(id);
        Object.assign(todo, updateTodoDto);
        return todo;
    }
    remove(id) {
        const index = this.todos.findIndex((item) => item.id === id);
        if (index === -1)
            throw new common_1.NotFoundException(`Todo dengan ID ${id} nggak ditemukan`);
        this.todos.splice(index, 1);
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map