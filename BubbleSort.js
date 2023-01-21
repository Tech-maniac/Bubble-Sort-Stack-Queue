//Bubble Sort : 
//let data = [50,10,20,40,30];
let data = [50,40,30,20,10];
let num=0;
// Asc : 10,20,30,40,50
// Desc : 50,40,30,20,10
for(i=0;i<data.length;i++)
{

    for(j=0;j<data.length;j++)
    {
         num=num+1;
        // console.log(num);
        if(data[j]>data[j+1])
        {
            let temp=data[j];
            data[j]=data[j+1];
            data[j+1]=temp;
        }
    }
}
console.log(data);
console.log("Number of iterations : "+num);









