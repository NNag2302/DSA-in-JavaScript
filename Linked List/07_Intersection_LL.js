var getIntersectionNode = function(headA, headB){
    let listA = headA;
    let listB = headB;

    while(listA !== listB){
        if(listA){
            listA = listA.next;
        } else {
            listA = headB;
        }

        if (listB){
            listB = listB.next;
        } else {
            listB = headA;
        }
    }
    return listA;
}