function max(a,b,c){

    max=a;
    if( b>max)
       max = b;
    else if  (c>max){
        max = c;
    }
        return max;
}
let a=prompt("veuillez taper un entier:");
let b=prompt("veuillez taper un entier:");
let c=prompt("veuillez taper un entier:");
alert(max(a,b,c));

function somme(a,b){
    let s;
    if(a!=b)
        s= a+b;
    else{
        s=s*3;
    }
        return s;

}
let a=prompt("veuillez taper la valeur de a:");
let b=prompt("veuillez taper la valeur de b:")
alert(somme(a,b));