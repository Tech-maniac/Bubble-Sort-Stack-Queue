let data = [];
let currentSize = data.length;
let max = 6;

function push(newVal)
{
    if(currentSize>=max)
    {
        console.log("Stack is full!!");
    }
    else
    {
        data[currentSize] = newVal;
        currentSize+=1;
    }
}

function pop()
{
    if(currentSize > 0)
    {
        currentSize-=1;
        data.length = currentSize;
    }
    else
    {
        console.log("Stack is already empty!!!");
    }
    
}

// function display()
// {
//     data[i]
// }

push(10);
push(20);
push(30);
push(40);
push(50);
push(60);
// pop();
// pop();
// pop();
// pop();
// pop();
console.log(data);