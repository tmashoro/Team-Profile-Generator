// need our employee js file

const Employee = require('./Employee');

// extends creates a child class of Employee
class Engineer extends Employee {
    // Engineer Constructor
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;