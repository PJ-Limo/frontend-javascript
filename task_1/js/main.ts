interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; //optional
  location: string;
  contract: Boolean;
  
}

const teacher1: Teacher = {
  firstName: 'Peter',
  lastName: 'Rock',
  fullTimeEmployee: true,
  location: 'Kampala',
  contract: true // Additional property
};

const teacher2: Teacher = {
  firstName: 'Jenifer',
  lastName: 'Kijani',
  fullTimeEmployee: false,
  location: 'Cape Town',
  contract: true
};

const teacher3: Teacher = {
  firstName: 'Manjano',
  lastName: 'Daudi',
  fullTimeEmployee: false,
  location: 'Moshi',
  contract: false
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

//--------------------EXTENSION OF TEACHER CLASS------------------------------//

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  contract: Boolean
  
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Hakuna',
  lastName: 'Jina',
  location: 'Eldoret',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract: true
};

console.log(director1);

//-----------------------------------------------Priniting Teachers-----------------//

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

const result = printTeacher("firstName", "lastName");
console.log(result); 


//-------------------------------------------WRITING A CLASS---------------------//

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass('Peter', 'Jenifer');
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName()); // Output: Alice


