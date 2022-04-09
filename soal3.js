let names = [
    {firstName : "Hesam", lastName: "Jalili"}
];

function convertName(person) {
    let obj = {fullName : `${person.firstName}  ${person.lastName}`};
    return obj;
}

console.log(convertName(names[0]));

