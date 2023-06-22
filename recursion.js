function palindrome(str){
    for(let i=0;i<str.length;i++){
     if(str[0]!=str[str.length-1]){
        return "str n'est pas palindrome"
    }
    else{
       str=palindrome(str.slice(i,str.length-1-i))
   }
     return "str est palindrome"   
    }
}