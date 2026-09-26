
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    
    fast = head;
    slow = reverse(slow);

    while(slow){
        if (slow.val !== fast.val){
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;

};

function reverse(root){

    let previous = null
    while(root) {
    let nextNode = root.next;
    root.next = previous;
    previous = root;
    root = nextNode;
    }
    return previous;
}

// solving by converting into array 
// var isPalindrome = function(head) {
//     let arr = [];

//     while(head !== null){
//         arr.push(head.val);
//         head = head.next;
//     }

//     let first = 0;
//     let last = arr.length - 1;

//     while (first < last){
//         if (arr[first] !== arr[last]){
//             return false;
//         }
//         first++;
//         last--;
//     }
//     return true;
// };