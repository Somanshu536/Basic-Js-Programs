function fact(num)
{
    let fact=1
    for (i=1;i<=num;i++)
    {
        fact=fact*i
    }
    console.log(fact);
}
fact(4)