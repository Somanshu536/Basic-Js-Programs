function prime_num(n)
{
    if (n<=1)
    {
        return false;
    }
    for (let i =2;i<=Math.sqrt(n);i++)
    {
        if (n%i===0)
        {
            return false;
        }
    }
    return true;
}
console.log(prime_num(4))