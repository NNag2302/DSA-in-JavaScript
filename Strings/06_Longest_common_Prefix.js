var longestPrefix = function (str){
    let pref = str[0];
    let pref_len = pref.length;

    for (let i = 1; i < str.length; i++){
        let s = str[i];

        while(pref !== s.substring(0, pref_len)){
            pref_len--;
        }
        if (pref_len === 0){
            return "";
        }
        pref = pref.substring(0, pref_len);
    }
    return pref;
};