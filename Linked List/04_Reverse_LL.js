var ReverseLinkedList = function (head){
    let previous = null;

    while(head){
        let newNode = head.next;
        head.next = previous;
        previous = head;
        head = newNode
    }
    return previous;
}