// task 5
// DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// a Director class that implements DirectorInterface
class Director {
    workFromHome(): string {
        return 'Working from home';
    }

    getToWork(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// a Teacher class that will implement TeacherInterface
class Teacher {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: string | number): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// end of task 5

// task 6
// type predicate for if the employee is a director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// function to execute work
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// tests
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
// end of task 6

// task 7
// a string literal type allowing a variable to have Math or History as value
type Subjects = 'Math' | 'History';

// a teachClass function that returns string depending on todayClass
function teachClass(todayClass: Subjects): string{
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

// test
console.log(teachClass('Math'));
console.log(teachClass('History'));
// end of task 7