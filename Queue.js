class Queue {

constructor(){
	this.items = []; //Array used to implement queue
	}

	//Functions to be implement
	// enqueue()
	// dequeue()
	//front()
	//isEmpty()
	//printQueue()

	//Adds an element to the queue
	enqueue(element){
		this.items.push(element);
	}

	//deltes an element from queue
	dequeue(){
		if(this.isEmpty())
			return 'Underflow';
		return this.items.shift();
	}

	//returns the front element of the queue
	front(){
		if(this.isEmpty())
			return 'No elements in queue';
		return this.items[0];
	}

	isEmpty(){
		return this.items.length == 0;
	}

	printQueue(){
		var str = '';
		for (var i = 0; i < this.items.length; i++) {
			str += this.items[i] + " ";
		}
		return str;
	}
}

// print binaries from 1 to n;

function generatePrintBinary(n){
	var q = new Queue();
	q.enqueue("1");
	while(n >= 0){
		n--;
		var s1  = q.front();
		q.dequeue();
		console.log(s1);

		var s2 = s1;
		q.enqueue(s1+"0");
		q.enqueue(s2+"1");
	}
}