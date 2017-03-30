var myImage=document.getElementById("slide");
var imgArray=["images/back.jpg","images/Background.jpg","images/class.jpg","images/st.jpg","images/pk.jpg","images/library.jpg","images/jain.jpg","images/laila.jpe","images/pam.jpg","images/kentonlibrary.jpg"];
var imgIndex=0;
function changeImage(){
myImage.setAttribute("src",imgArray[imgIndex])
imgIndex++;
if(imgIndex>=imgArray.length)
{
	imgIndex=0;
}
}
var intervalHandle=setInterval(changeImage,2000);
myImage.onclick=function()
{
clearInterval(intervalHandle);
}
myImage.ondblclick=function()
{
var intervalHandle=setInterval(changeImage,2000);

}