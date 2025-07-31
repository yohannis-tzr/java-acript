const num = 0

if (num % 2 ==0){
    console.log("even")
} else if(num % 2 !== 0){
    console.log("odd")
} else{
    console.log("neither")
}

const color = 'cyan'

switch(color){
    case 'blue' :
        console.log('blue it is')
        break
    case 'white' :
        console.log('white')
        break
    default:
        console.log('not a valid color')
}