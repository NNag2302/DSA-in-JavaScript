var oddEvenList = function (head){
    // egde case if no head or no head.next
    if( !head || !head.next) {
        return head;
    }

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(even && even.next){
        odd.next = even.next;
        odd = even.next;

        even.next = odd.next;
        even = odd.next;

        odd.next = evenHead;
    }
    return head;
}