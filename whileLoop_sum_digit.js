function sum_digit(n)
{
    let sum=0
    while(n>0)
    {
        let l_digit=n%10
        sum=sum+l_digit
        n=Math.floor(n/10)
    }
    return sum
}
console.log(sum_digit(12345))