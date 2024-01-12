function calculate_arithmetic (a,b,type,nextfx)
{
    const val = type(a,b);
    return val;
}

function sum(a,b){
    return a +b;
}

function subb(a,b){
    return a -b;
}


const value = calculate_arithmetic(1,2,sum,subb);
console.log(value);