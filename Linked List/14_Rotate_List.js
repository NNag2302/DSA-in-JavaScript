var rotateList = function(head, k){
    //edge case of no head or no head.next
    if (head === null) return head;

    let len = 1;
    let tail = head;
    while(tail.next !== null){
        tail = tail.next;
        len++;
    }
    tail.next = head;

    let count = len - (k%len);
    while(count > 0){
        tail = tail.next;
        head = head.next;
        count--;
    }
    tail.next = null;

    return head;
};