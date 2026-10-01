var removeDuplicates = function (head){
    let dummy = head;

    while(head && head.next){
        if (head.val == head.next.val){
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }

    return dummy;
};