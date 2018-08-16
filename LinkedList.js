class Node {
	constructor(element){
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.size = 0;
	}

	// functions to be implemented

	//add(element)
	//insertAt(element, location)
	//removeFrom(location)
	//removeElement(element)

	//indexOf()
	//isEmpty()
	//size_Of_List()
	//PrintList()


// add an element at the end of list
	add(element){
		var node = new Node(element);

		var current; // for storing current node

		if(this.head == null)
			this.head = node; // if list is empty add node, point head to node
		else{
			current = this.head; //start from head

			while(current.next){ // till end of list
				current = current.next;
			}
			current.next = node; // add node at the end of list
		}
		this.size++; // increase size
	}

	//insert an element at given index in list

	inserAt(element, index){
		if(index>0 && index > this.size)
			return false;
		else{
			var node = new Node(element); // create new node
			var current, prev;

			current = this.head;
			if(index == 0){ // add element to first index
				node.next = this.head;
				this.head = node;
			}else{
				current = this.head;
				var it = 0;

				while(it < index){ //iterate over the list to find position
					it++;
					prev = current;
					current = current.next;
				}
				//add the new element
				node.next = prev.next;
				prev.next = node;
			}
			this.size++;
		}

	}

	//removes and return an element from a specified index
		removeFrom(index){
			if(index > 0 && index > this.size)
				return -1;
			else{
				var current, prev, it = 0;
				current = this.head;
				prev = current;

				if(index == 0){
					// remove form first position
					this.head = current.next;
				} 
				else{
					while(it < index){ //find position
						it++;
						prev = current;
						current = current.next;
					}
					prev.next = current.next; // remove the element
				}
			}
			this.size--;

			return current.element; //return element 
		}

		//remove element from list and return it, return -1 if not found
		removeElement(element){
			var current = this.head;
			var prev = null;
			while(current != null){
				if(current.element === element){
					if(prev == null){
						this.head = current.next;
					}
					else{
						prev.next = current.next;
					}
					this.size--;
					return current.element;
				}
				prev = current;
				current = current.next;
			}
			return -1;
		}

		//returns the index of a given element
		indexOf(element){
			var count = 0;
			var current = this.head;
			while(current != null){
				if(current.element = element){
					return count;
				}
				count++;
				current = current.next;
			}
			return -1;;
		}

		// check of the list is empty
		isEmpty(){
			return this.size == 0;
		}

		//this returns the size of the list

		size_Of_List(){
			return this.size;
		}

		//it prints the content of list
		PrintList(){
			var current = this.head;
			var str = '';
			while(current){
				str += current.element + " ";
				current = current.next;
			}
			return str;
		}
}