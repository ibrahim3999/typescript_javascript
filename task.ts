/*
function pluralizeHowManyPoints1(example:string,n:number):string{
    if(n<0)return 'wrong!!! minus try again '
    var splitted =example.split("|",3);
    if (n>1)
        return splitted[2].replace('{{count}}',''+n);
    
    return splitted[n];
    }
  
*/
/*
function pluralizeHowManyPoints2(example:string,n:number,pLoad:any):string{
    if(n<0)return 'wrong!!! minus try again '
    var splitted =example.split("|",3);
    if(n==1)return splitted[n].replace('{{names.one}}',''+pLoad.names.one)
    if(n==0)
        return splitted[n].replace('{{names.many}}',''+pLoad.names.many)

    var res=splitted[2].replace('{{names.many}}',''+pLoad.names.many)
    return res.replace('{{count}}',''+n)
}


  */
   /*Bonus */

function pluralizeHowManyDays(example:string, n:number):String {
    if (n < 0)
        return 'wrong!!! minus try again ';
    var splitted = example.split("|", 3);
    if (n > 1)
        return splitted[2].replace('{{minus 365 count}}', '' + (365 - n));
    return splitted[n];
}
