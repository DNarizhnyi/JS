let isEven=false;

while (!isEven){
    let number = prompt('You will forever enter uneven numbers');
    if (number%2==0){
        isEven=true;
        alert ("You are free!");
    }
}
