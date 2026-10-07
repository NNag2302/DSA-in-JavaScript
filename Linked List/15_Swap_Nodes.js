var swapNodes = function (head){
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;

    while(head && head.next){
        let p1 = head;
        let p2 = head.next;

        prev.next = p2;
        p1.next = p2.next;
        p2.next = p1;

        prev = p1;
        head = p1.next;
    }
    return dummy.next;
};