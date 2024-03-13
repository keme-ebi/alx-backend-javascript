// A Teacher interface task 1
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);
// end of task 1

// interface that extends Teacher task 2
interface Directors extends Teacher {
    numberOfReports: number;
}

// director example
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}

console.log(director1);
// end of task 2

// task 3
// a printTeacher function
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}
// an interface for the function
interface printTeacher {
    (firstName: string, lastName: string): string;
}

console.log(printTeacher("John", "Doe"));

// end of task 3