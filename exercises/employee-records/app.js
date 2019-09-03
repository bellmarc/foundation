
employees = [];

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function(){
    console.log( this )
}
//push each object into Employees Array
const rosalia = new Employee("Rosalia", "Chief of IT systems", "$120/hour")

const maxine = new Employee("Maxine", "Systems Engineer", "$80/hour" )

const marie = new Employee("Marie", "Chief of Finance", "$90/hour")
marie.status = "Contractor"
// console.log(marie);
employees.push(rosalia, maxine, marie)

for(let i = 0; i < employees.length; i++ ){
    employees[i].printEmployeeForm();
}

// marie.printEmployeeForm(); alternate ay to call array