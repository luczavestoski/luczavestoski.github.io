var imgNum = 21; //number of photos 
var imgNum2 = imgNum; //There's probably a better way to implement this 

// ^This partshould be automatic server side PHP, will do later 
//https://stackoverflow.com/questions/11489738/how-do-i-count-files-in-a-directory-using-jquery


//clones #repeat <li> tags 
while((imgNum-1) > 0){
jQuery("#repeat").after(jQuery("#repeat").first().clone());
imgNum -= 1;
}

//inserts images to <li> tags
for(i = 0; i < (imgNum2); i++) {
 document.getElementsByTagName("Li")[i].innerHTML = "<img src=\"images/" +(i+1)+ ".jpg\">";
}