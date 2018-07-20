	class Stack {
		constructor(){
			this.items = []; // Array used to implement stack
		}
		//Functions to be implemented
		//push(item)
		//pop()
		//peek()
		//isEmpty()
		//printStack

		// Adds an element at the top of the stack
		push(element){
			this.items.push(element);
		}

		// returns top most element and delete it from Stack
		pop(){
			//check underflow
			if(this.items.length == 0)
				return 'Underflow';

			return this.items.pop();
		}

		// Return top most element of the stack but do not delete it.
		peek(){

			return this.items[this.items.length-1];
		}

		// return true if the Stack is empty
		isEmpty(){

			return this.items.length == 0;
		}

		// Returns String in which all items of stack is concatenated.
		printStack(){
			var str = '';
			for(var i = 0; i < this.items.length; i++){
				str += this.items[i] + " ";
			}
			return str;
		}
	} 

	function postFixEvaluation(exp){
		var stack = new Stack();
		for(var i = 0; i<exp.length; i++){
			var c = exp[i];
			if(!isNaN(c)){
				stack.push(c - '0');
			}
			else{
				var val1 = stack.pop();
				var val2 =  stack.pop();
				if(val1 == 'Underflow' || val2 == 'Underflow')
					return "Can't perform ostfix evaluation";
				switch(c){
					case '+':
					stack.push(val2 + val1);
					break;

					case '-':
					stack.push(val2 - val1);
					break;

					case '/':
					stack.push(val2/val1);
					break;

					case '*':
					stack.push(val2*val1);
					break;
				} 
			}
		}
		return stack.pop();
	}