function Node(val){
    this.value = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size){
        return -1;
    }

    let current = this.head;
    let i = 0;
    while(i < index){
        current = current.next;
        i++;
    }
    return current.value;
};


MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};


MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head === null){
        this.head = newNode;
        this.size++;
        return;
    } 
    let current = this.head;

    while(current.next !== null){
        current = current.next
    }
    current.next = newNode;
    this.size++;
};


MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0|| index > this.size){
        return -1;
    }
        else if (index == 0){
            this.addAtHead(val);
            return;
        }    
        else if(index == this.size) {
            this.addAtTail(val);
            return;
        }
    let newNode = new Node(val);
    let current = this.head;
    let i = 0;
    while (i < index-1){
        current = current.next;
        i++;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
};


MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }

    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }

    current.next = current.next.next;

    this.size--;
};
