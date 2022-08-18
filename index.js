// Write your solution in this file!
const employee = {
    name : "sam",
    streetAddress :"",
};
function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key,value){
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    deleteFromEmployeeByKey
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    const newEmployee = employee
    employee[key] = value
    deleteFromEmployeeByKey
    return newEmployee;
}