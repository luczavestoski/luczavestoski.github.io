var i; //list index

//This partshould be server side PHP, but Netlify is static only
//https://stackoverflow.com/questions/11489738/how-do-i-count-files-in-a-directory-using-jquery


for(i = 0; i < 20; i++) {
    document.getElementsByTagName("Li")[i].innerHTML = "<img src=\"images/" +(i+1)+ ".jpg\">";
  }

