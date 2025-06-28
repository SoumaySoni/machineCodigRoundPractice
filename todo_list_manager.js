// 📜 Requirements:

// Design a simple in-memory task manager with these operations:

// addTask(title, description) – Add a new task

// completeTask(id) – Mark a task as completed

// deleteTask(id) – Delete a task by ID

// listTasks() – List all tasks (active and completed)

class TaskManager {
    constructor() {
        this.tasks = new Map();
        this.counter = 1; // auto-incrementing ID
    }

    addTask(title, description) {
        for (const task of this.tasks.values()) {
            if (task.title === title) {
                console.log("The title has already been set");
                return;
            }
        }

        const id = this.counter++;
        this.tasks.set(id, {
            id,
            title,
            description,
            completed: false
        });
    }

    completeTask(id) {
        const task = this.tasks.get(id);
        if (!task) {
            console.log("Task not found");
            return;
        }

        this.tasks.set(id, {
            ...task,
            completed: true
        });
    }

    deleteTask(id) {
        if (!this.tasks.has(id)) {
            console.log("Task not found");
            return;
        }
        this.tasks.delete(id);
    }

    listTasks() {
        const result = [];
        for (const [, task] of this.tasks) {
            result.push(task);
        }
        return result;
    }

}

// 🧪 Test Section

const manager = new TaskManager();

manager.addTask('Learn JavaScript', 'Practice daily');
manager.addTask('Build Project', 'Create a Todo app');

// console.log("All Tasks:", manager.listTasks());

manager.completeTask(1);
// console.log("After completing task 1:", manager.listTasks());

manager.deleteTask(2);
manager.deleteTask(2);
console.log("After deleting task", manager.listTasks());

