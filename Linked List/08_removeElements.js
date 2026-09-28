var removeElements = function (val, head){
    let dummy = new ListNode(0, head);
    let ans = dummy;

    while(ans.next){
        if (ans.next.val === val){
            ans.next = ans.next.next;
        } else{
            ans = ans.next;
        }
    }

    return dummy.next;
}