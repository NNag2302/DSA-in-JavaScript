var middleLinkedList = function(head){
    let left = head;
    let right = head;

    while(right && right.next){
        right = right.next.next;
        left = left.next;
    }
    return left;
}

middleLinkedList()