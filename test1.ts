const fahheittocelcius = (fah: number) => {
    let celval:number = (fah-32)*5/9;
    console.log(fah+" fahrenheit is " + celval+" Celsius");
}

const celtofahheit = (cel: number) => {
    let fahval:number = (cel*9/5)+32;
    console.log(cel+ " celsius is "+ fahval+" Fahrenheit");
}

fahheittocelcius(500);
celtofahheit(500);