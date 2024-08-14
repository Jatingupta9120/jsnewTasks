function toMinBracketReverse(s){
    const len=s.length;
    if(len%2!==0){
        return -1;
    }

    let st=[];
    for(let i=0;i<len;i++){
        if(s[i]==='{'&&st.length>0){
            if(st[i]==='}'){
                st.pop();
            }else{
                st.push(s[i]);
            }
        }else{
            st.push(s[i]);
        }
    }

    const totalRemaining=st.length;
    let openBracket=0;
    while(st.length>0&&st[st.length-1]==='{'){
        st.pop();
        openBracket++;
    }
    const total=openBracket%2+Math.floor(totalRemaining/2);
    return total;
}
const s='{{{';
console.log(toMinBracketReverse(s))