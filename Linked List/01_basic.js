class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    traverse() {
        if (this.head === null) {
            return;
        }

        let current = this.head;
        console.log(current.data);

        while(current.next !== null){
            current = current.next;
            console.log(current.data);
        }
    }

    deleteByValue(dataToDelete) {
        if (this.head === null){
            return;
        }

        let current = this.head;
        if (current.data == dataToDelete){
            this.head = current.next;
            return;
        }

        let previous = null;
        while(current.next !== null){
            previous = current;
            current = current.next;
            if (current.data == dataToDelete){
                previous.next = current.next;
                return;
            }
        }
    }

    search(dataToSearch) {
        if (this.head == null){
            return;
        }

        let current = this.head;
        if (current.data == dataToSearch){
            return true;
        }

        while(current.next !== null){
            current = current.next;
            if (current.data === dataToSearch){
                return true;
            }
        }
        return false;
    }

    length(){
        if(this.head == null){
            return 0;
        }

        let counter = 1;
        let current = this.head;
        while(current.next !== null){
            current = current.next;
            counter++;
        }
        return counter;
    }
}

const linkedList = new LinkedList();

linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(10);
linkedList.insertAtEnd(67);
linkedList.insertAtEnd(69);
linkedList.traverse();
console.log("deleting 2");
linkedList.deleteByValue(2);
linkedList.traverse();
console.log("adding 99 and 100");
linkedList.insertAtEnd(99);
linkedList.insertAtEnd(100);
linkedList.traverse();
linkedList.deleteByValue(100);
console.log("new");
linkedList.traverse();
console.log("searching 69",  linkedList.search(69));
console.log("Length", linkedList.length());