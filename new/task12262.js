const companyStructure = {
    "company": {
        "departments": [
            {
                "name": "Engineering",
                "employees": [
                    { "id": 1, "name": "Alice", "role": "Engineer" },
                    { "id": 2, "name": "Bob", "role": "Senior Engineer" }
                ]
            },
            {
                "name": "HR",
                "employees": [
                    { "id": 3, "name": "Carol", "role": "HR Manager" }
                ]
            }
        ]
    }
};

function manageCompany(jsonObject, operation, departmentName, employee = null) {
    const departments = jsonObject.company.departments;

    const department = departments.find(dep => dep.name === departmentName);
    if (!department) {
        throw new Error(`Department ${departmentName} not found`);
    }

    switch (operation) {
        case 'add':
            department.employees.push(employee);
            break;
        
        case 'remove':
            if (!employee || !employee.id) {
                throw new Error('Employee object should have id with it');
            }

            const removeIndex = department.employees.findIndex(emp => emp.id === employee.id);
            
            if (removeIndex === -1) {
                throw new Error(`Employee with id ${employee.id} not found in ${departmentName}`);
            }

            department.employees.splice(removeIndex, 1);
            break;
        
        case 'update':
            if (!employee || !employee.id) {
                throw new Error('Employee object should have id with it.');
            }

            const updateIndex = department.employees.findIndex(emp => emp.id === employee.id);
            if (updateIndex === -1) {
                throw new Error(`Employee with id ${employee.id} not found in ${departmentName}`);
            }
            
            department.employees[updateIndex] = { ...department.employees[updateIndex], ...employee };
            break;
        
        case 'find':
            return department.employees;

        default:
            throw new Error(`Unknown operation: ${operation}`);
    }

    return jsonObject;
}



// Add a new employee
manageCompany(companyStructure, "add", "Engineering", { "id": 4, "name": "Eve", "role": "Intern" });

// Remove an employee from the HR department
manageCompany(companyStructure, "remove", "HR", { "id": 3 });

// Update employee
manageCompany(companyStructure, "update", "Engineering", { "id": 2, "name": "Robert", "role": "Lead Engineer" });

// Find all 
const employees = manageCompany(companyStructure, "find", "Engineering");
console.log(employees);