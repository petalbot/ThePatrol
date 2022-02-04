//Firestar is on a hunting patrol with Graystripe, Lionblaze, and Cloudtail.
noStroke();
var CatX;
var CatY;
var CatSize;
var CatRed;
var CatBlue;
var CatGreen;
var di=1;
var EyeRed;
var EyeBlue;
var EyeGreen;
var Cat = function(CatX, CatY, CatSize, CatColor, EyeColor, TailColor)
{
//Cat Color: 1=Orange, 2=Grey, 3=Golden, 4=White
//Eye Color: 1=Green, 2=Amber, 3=Amber, 4=Blue

if (CatColor===1){   
    CatRed=245;
    CatBlue= 87;
    CatGreen=19;}  
if (CatColor===2){
    CatRed=133;
    CatBlue=125;
    CatGreen=130;}  
if (CatColor===3){
    CatRed=220;
    CatBlue=160;
    CatGreen=10;}
if (CatColor===4){
    CatRed=225;
    CatBlue=225;
    CatGreen=225;}
if (EyeColor===1){   
    EyeRed=19;
    EyeBlue=110;
    EyeGreen=30;}  
if (EyeColor===2){
    EyeRed=133;
    EyeBlue=125;
    EyeGreen=130;}  
if (EyeColor===3){
    EyeRed=220;
    EyeBlue=160;
    EyeGreen=10;}
if (EyeColor===4){
    EyeRed=0;
    EyeBlue=100;
    EyeGreen=250;}  
    
    if (EyeColor===1){   
    EyeRed=19;
    EyeBlue=110;
    EyeGreen=30;}  
if (EyeColor===2){
    EyeRed=133;
    EyeBlue=125;
    EyeGreen=130;}  
if (EyeColor===3){
    EyeRed=220;
    EyeBlue=160;
    EyeGreen=10;}

//ears
fill(CatRed, CatBlue, CatGreen);
triangle(CatX+CatSize*50*di, CatY+CatSize*30, CatX+CatSize*80*di, CatY+CatSize*90, CatX+CatSize*110*di, CatY+CatSize*90);
ellipse(CatX+CatSize*100*di, CatY+CatSize*120, CatSize*95, CatSize*85);
fill(245, 240, 240);
triangle(CatX+CatSize*79*di, CatY+CatSize*88, CatX+CatSize*50*di, CatY+CatSize*30, CatX+CatSize*60*di, CatY+CatSize*95);
fill(CatRed, CatBlue, CatGreen);
fill(CatRed, CatBlue, CatGreen);
triangle(CatX+CatSize*100*di, CatY+CatSize*80, CatX+CatSize*120*di, CatY+CatSize*81, CatX+CatSize*100*di, CatY+CatSize*20);
//eyes
fill(250, 250, 250);
ellipse(CatX+CatSize*85*di, CatY+CatSize*110, CatSize*20, CatSize*20);
ellipse(CatX+CatSize*125*di, CatY+CatSize*110, CatSize*20, CatSize*20);
fill(EyeRed, EyeBlue, EyeGreen);
ellipse(CatX+CatSize*85*di, CatY+CatSize*114, CatSize*12, CatSize*12);
ellipse(CatX+CatSize*125*di, CatY+CatSize*114, CatSize*12, CatSize*12);
fill(0, 0, 0);
ellipse(CatX+CatSize*85*di, CatY+CatSize*116, CatSize*5, CatSize*5);
ellipse(CatX+CatSize*125*di, CatY+CatSize*116, CatSize*5, CatSize*5);
//mouth
fill(245, 242, 242);
ellipse(CatX+CatSize*103*di, CatY+CatSize*135, CatSize*30, CatSize*30);
//nose
fill(232, 130, 96);
triangle(CatX+CatSize*95*di, CatY+CatSize*120, CatX+CatSize*105*di, CatY+CatSize*130, CatX+CatSize*110*di, CatY+CatSize*120);
//back right leg
fill(CatRed, CatBlue, CatGreen);
ellipse(CatX+CatSize*200*di, CatY+CatSize*250, CatSize*30, CatSize*100);
//back right paw
ellipse(CatX+CatSize*190*di, CatY+CatSize*295, CatSize*40, CatSize*20);
//tail
ellipse(CatX+CatSize*265*di, CatY+CatSize*140, CatSize*10, CatSize*175);
//body
fill(CatRed, CatBlue, CatGreen);
ellipse(CatX+CatSize*150*di, CatY+CatSize*180, CatSize*100, CatSize*70);
ellipse(CatX+CatSize*220*di, CatY+CatSize*195, CatSize*100, CatSize*60);
ellipse(CatX+CatSize*184*di, CatY+CatSize*190, CatSize*100, CatSize*60);
ellipse(CatX+CatSize*220*di, CatY+CatSize*203, CatSize*100, CatSize*50);
//unknown function of ellipse(x+250, 100, 70, 100);
//Forelegs
fill(CatRed, CatBlue, CatGreen);
ellipse(CatX+CatSize*137*di, CatY+CatSize*240, CatSize*30, CatSize*120);
ellipse(CatX+CatSize*107*di, CatY+CatSize*235, CatSize*30, CatSize*100);
//paw
ellipse(CatX+CatSize*90*di, CatY+CatSize*280, CatSize*40, CatSize*20);
//front paw
ellipse(CatX+CatSize*125*di, CatY+CatSize*295, CatSize*40, CatSize*20);
//front haunch 
fill(CatRed, CatBlue, CatGreen);
ellipse(CatX+CatSize*240*di, CatY+CatSize*225, CatSize*50, CatSize*50);
//back leg
ellipse(CatX+CatSize*240*di, CatY+CatSize*260, CatSize*30, CatSize*100);
//back paw
ellipse(CatX+CatSize*225*di, CatY+CatSize*305, CatSize*40, CatSize*20);
//mouth
fill(232, 146, 146);
ellipse(CatX+CatSize*103*di, CatY+CatSize*142.5, CatSize*23, CatSize*15);
fill(255, 242, 242);
ellipse(CatX+CatSize*103*di, CatY+CatSize*135, CatSize*25, CatSize*10);
};
var TreeX;
var TreeY;
var TreeSize;
var TreeColor;
var TreeType;
var Tree = function(TreeX, TreeY, TreeSize, TreeColor, TreeType){   
if (TreeType===1){
//tree trunk    
fill(105, 61, 12);
ellipse(TreeX, TreeY-110, 30+TreeSize, 250+TreeSize);
//treetop
fill(14, 92, 11);
ellipse(TreeX, TreeY-195, 200+TreeSize, 160+TreeSize);
}
if (TreeType===2){
//bushes
fill(34, 182, 24);
ellipse(TreeX+30, TreeY-40, 150+TreeSize, 120+TreeSize);
}
if (TreeType===2){
fill(11, 135, 31);
ellipse(TreeX-90, TreeY-40, 150+TreeSize, 120+TreeSize);
}
};

//Firestar's (and others') location
var y = 10;
var dy = 10;
var x = 30;
var dx = 10;
var di = 1;
var draw = function() {
    x=x-dx;
    y=y-dy;
background(177, 242, 245);   


Tree(100,270,0.5, 80,1);
Tree(300,270,1, 20,2);

//ground
fill(145, 73, 14);
ellipse(150, 350, 1000, 210);

//caught rabbit
fill(195, 185, 190);
ellipse(mouseX+90, mouseY+110, 70, 40);
//rabbit ears
ellipse(mouseX+70, mouseY+85, 20, 70);
fill(240, 150, 210);
ellipse(mouseX+70, mouseY+75, 10, 40);
fill(195, 185, 190);
ellipse(mouseX+80, mouseY+85, 20, 70);
fill(240, 150, 210);
ellipse(mouseX+80, mouseY+75, 10, 40);
//rabbit nose
triangle(mouseX+60, mouseY+100, mouseX+55, mouseY+105, mouseX+55, mouseY+115);
//rabbit eyes
fill(0, 0, 0);
ellipse(mouseX+70, mouseY+105, 5, 5);
//rabbit legs
fill(195, 185, 190);
ellipse(mouseX+70, mouseY+130, 10, 20);
ellipse(mouseX+110, mouseY+125, 15, 30);
ellipse(mouseX+103, mouseY+137, 20, 10);
//rabbit tail
fill(255, 255, 255);
ellipse(mouseX+125, mouseY+110, 20, 20);
//The Patrol
//Lionblaze
Cat(x/2, y/2, 0.7, 3, 3); 
//Cloudtail
Cat(x/3, y, 0.8, 4, 4);
//Graystripe
Cat(x+160, y-20, 0.9, 2, 3);
//Firestar
Cat(x, y, 1, 1, 1);

if ( x < -1000){
  dx = -dx;  
  di=-1;
}
if ( x > 1000){
  dx = -dx; 
  di=1;
}
if ( y > 100){
    dy = -dy;
}
if ( y < -10){
    dy = -dy;
}
};