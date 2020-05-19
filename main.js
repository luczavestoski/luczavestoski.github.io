var imgNum = 21; //number of photos 

// ^This partshould be automatic server side PHP, will do later 
//https://stackoverflow.com/questions/11489738/how-do-i-count-files-in-a-directory-using-jquery


while(imgNum > 0){
jQuery("#repeat").after(jQuery("#repeat").first().clone());
imgNum -= 1;
}

for(i = 0; i < (20); i++) {
 document.getElementsByTagName("Li")[i].innerHTML = "<img src=\"images/" +(i+1)+ ".jpg\">";
}