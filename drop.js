class Drop{
constructor(){

}
 fall(){
y = y + yspeed;

if(y >height){
    y = random(-100,-200);

}
}

show(){
    stroke(138,43,226);
    line(x,y,x,y+10);
}
}