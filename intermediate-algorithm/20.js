class Person {
    constructor(firstAndLast) {
        let fullName = firstAndLast;

        this.getFirstName = function() {
            return fullName.split(" ")[0];
        };

        this.getLastName = function() {
            return fullName.split(" ")[1];
        };

        this.getFullName = function() {
            return fullName;
        };

        this.setFirstName = function(inp) {
            let newName = fullName.split(" ");
            newName[0] = inp;
            fullName = newName.join(" ");
        };

        this.setLastName = function(inp) {
            let newName = fullName.split(" ");
            newName[1] = inp;
            fullName = newName.join(" ");
        };

        this.setFullName = function(inp) {
            fullName = inp;
        };
    }
}
