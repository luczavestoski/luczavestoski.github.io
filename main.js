var imgNum = 26; //number of photos 
 
// ^This partshould be automatic on Netlify build, will do later 
//https://stackoverflow.com/questions/11489738/how-do-i-count-files-in-a-directory-using-jquery



//clones #repeat <li> tags 
var OriginalImgNum = imgNum; 
while((imgNum-1) > 0){
jQuery("#repeat").after(jQuery("#repeat").first().clone());
imgNum -= 1;
}


//inserts images to <li> tags
for(i = 0; i < (OriginalImgNum) ; i++) {
 document.getElementsByTagName("Li")[i].innerHTML = "<a data-fancybox href=\"images/" +(OriginalImgNum-i)+ ".webp\"><img src=\"images/" +(OriginalImgNum-i)+ ".webp\"></a>";
}

