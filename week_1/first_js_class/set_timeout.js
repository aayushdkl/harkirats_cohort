function sum()
{
    console.log("This is a settimeout function");
}

// setTimeout(() => {
//     sum();
// }, 3000);

setTimeout(sum,3*1000);
setInterval(() => {
    sum();
}, 3*1000);