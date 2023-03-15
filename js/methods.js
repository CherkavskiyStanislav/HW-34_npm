export {totalSalary, departmentQuantity, departmentSalary}

function totalSalary(employees) {
    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    return total;
}

function departmentQuantity(employees) {
    const departments = [];

    for (let i = 0; i < employees.length; i++) {
        const department = employees[i].department;
        if (!departments.includes(department)) {
            departments.push(department);
        }
    }
    return departments.length;
}

function departmentSalary(employees) {
    const result = {};

    for (let i = 0; i < employees.length; i++) {
        const department = employees[i].department;
        if (!result.hasOwnProperty(department)) {
            result[department] = 0;
        }
        result[department] += employees[i].salary;
    }
    return result;
}



