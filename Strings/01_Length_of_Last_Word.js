var lengthOflastWord = function(s){
    let end = s.length - 1;
    let count = 0;

    // skip the trailing extra spaces in end
    while( end >= 0 && s[end] == " "){
        end--;
    }

    //count the length of last word
    while( end >= 0 && s[end] !== " "){
        end--;
        count++;
    }

    return count;
};