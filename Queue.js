let queue = [];
let currentSize = queue.length;
let max = 6;

function enqueue(newVal){
    if(currentSize>=max)
    {
        console.log("Queue is full!!");
    }
    else{
        queue[currentSize] = newVal;
        currentSize+=1;
    }
}

function dequeue(){
    if(currentSize > 0)
    {
        for(let i=0;i<queue.length;i++){
            queue[i]=queue[i+1];
        }
        currentSize--;
        queue.length = currentSize;
    }
    else
    {
        console.log("Queue is already empty!!!");
    }
}


enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
dequeue()
dequeue()
dequeue()
dequeue()
dequeue()

console.log(queue);


