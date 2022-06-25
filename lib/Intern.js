//Importing Employee file
const Employee = require('./Employee');


class Intern extends Employee {
    // Intern Constructor, want to add school to our constructer and not have to rewrite this for every argument
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;
