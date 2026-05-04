let n=1234
let rev=""
for(var i=n;i>0;i=Math.floor(i/10)){
    rev+=i%10
}
console.log(rev);