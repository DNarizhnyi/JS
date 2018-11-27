const names = ['Ann', 'Bradley', 'Mark', 'Stuart'];

names.filter(nameLength).forEach(greeting);

function nameLength (name){
return name.length > 4;
}

function greeting (name) {
    console.log(name + ', you have a long name');
}