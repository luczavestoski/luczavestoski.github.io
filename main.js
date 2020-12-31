/*
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
 document.getElementsByTagName("Li")[i].innerHTML = "<a data-fancybox href=\"/images/" +(OriginalImgNum-i)+ ".jpg\"><img class=\"lazy\" data-src=\"/images/" +(OriginalImgNum-i)+ ".jpg\"></a>";
}

//Lazy Loading 
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
  
*/

var x = [];
$('#gallery li').each(function() {
      x.push($(this).attr('class'));
});

let categories = [...new Set(categories)];
alert(categories);






function urban() {
  $('.urban').show();
  $('.nature, .candid, .cars').hide();
}

function nature() {
  $('.nature').show();
  $('.candid, .urban, .cars').hide();
}

function candids() {
  $('.urban').hide();
  $('.nature').hide();
  $('.candid').show();
  $('.cars').hide();
}

function cars() {
  $('.urban, .nature, .candid').hide();
  $('.cars').show();
}


function reset() {
  $('#gallery li').show();
}