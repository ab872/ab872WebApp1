// Please see documentation at 
// https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



//   *******************************************************

// start      browserId.js

  //  alert("browserId.js has loaded");

   //  obtain the navigator info
   var whichAgent = navigator.userAgent;
 
   // these variables are instantiated to improve readability in if clauses
   //
   //        
   //        if (isChrome) { 
   //              
   //        }
   //
   //       is more readable than
   //
   //        if ( whichAgent.includes("Chrome") ) { 
   //              
   //        }
   //
   //
   //
   //
    var isFirefox = whichAgent.includes("Firefox"); 

    var isChrome = whichAgent.includes("Chrome"); 


    var isSafari = whichAgent.includes("Safari"); 

    //  Safari with LINE extensions???
    var isSafariLine = whichAgent.includes("Safari Line");


    var isiPad = whichAgent.includes("iPad"); 

    var isiPhone = whichAgent.includes("iPhone"); 

    var isMac = whichAgent.includes("Macintosh"); 



    //  old Edge on Win10
    var isEdge = whichAgent.includes("Edge"); 

    //  new Edge on Win10
    var isNewEdge = whichAgent.includes("Edg/"); 

    //  Edge on Android
    var isAndroidEdge = whichAgent.includes("EdgA/"); 


    var isWin10 = whichAgent.includes("Windows NT 10.0"); 


    var isAndroid =  whichAgent.includes("Android"); 

    var isAndroid4 =  whichAgent.includes("Android 4"); 

    var isAndroid5 =  whichAgent.includes("Android 5"); 

    var isAndroid6 = whichAgent.includes("Android 6"); 

    var isAndroid8 = whichAgent.includes("Android 8"); 

    var isAndroid9 = whichAgent.includes("Android 9");

    var isAndroid10 = whichAgent.includes("Android 10");

    var isAndroid11 = whichAgent.includes("Android 11");

    var isAndroid12 = whichAgent.includes("Android 12");



    //  var browsersFound = 0;



   //  there are some cases where there are duplicate matches
   //  these overrides correct the situation

    if (isChrome) { 
           isSafari = false;
    }


    if (isEdge) { 
           isChrome = false; 
    } 

    if (isNewEdge) { 
           isChrome = false; 
    } 

    if (isAndroidEdge) { 
           isChrome = false; 
    } 

    if (isSafariLine) { 
           isSafari = false; 
    } 
    



    //  get the device screen dimensions and orientation

    var deviceScreenHeight = screen.height;
    var deviceScreenWidth = screen.width;


    var deviceAvailScreenHeight = screen.availHeight;
    var deviceAvailScreenWidth = screen.availWidth;



    var deviceScreenOrientation = "";


    if (isEdge) { 

	deviceScreenOrientation = '*****';

    } else if (isSafari) { 

	deviceScreenOrientation = '*****';

   } else { 

	deviceScreenOrientation = screen.orientation.angle;
}



    var deviceWindowOrientation = "";


    if (isEdge) { 

		deviceWindowOrientation = '*****';

    } else if (isChrome) { 

		deviceWindowOrientation = '*****';

    } else { 

	    deviceWindowOrientation = window.orientation;

    }





    var deviceOrientationType = "";

    if (isEdge) { 

	deviceOrientationType = '*****';

    } else if (isSafari) { 

	deviceOrientationType = '*****';

    } else { 

	deviceOrientationType = screen.orientation.type;

    }



// end     browserId.js


//   *******************************************************

// start      index.js

  var theBrowserIsUnknown = true;



  //  alert("index.js has loaded");



//  this JavaScript file attempts to override the slight differences
//  in page rendering by different browsers

//  the goal is to provide a more consistent cross-browser experience



if (isAndroidEdge) { 

  	   //  alert("Edge under Android");
	   theBrowserIsUnknown = false;


  // end Edge under Android
} 




if (isFirefox) { 
        //   begin      Firefox 

	if (isAndroid) {
           //   begin      Firefox under Android

		  //  alert("using the Firefox browser under Android");
		  theBrowserIsUnknown = false;

		if (isAndroid5) { 

			// begin     Firefox under Android5

			  //  alert("using the Firefox browser under Android 5");
			  theBrowserIsUnknown = false;


 			// end Firefox under Android5 

		} else {

			// all other Firefox under Android

			//  alert("using the Firefox browser under Android - all others");
			//  theBrowserIsUnknown = false;




					
			// end     all other Firefox under Android
		}

           //   end        Firefox under Android
        } 




        if (isWin10) {
           //   begin      Firefox under Win10

		//  alert("using the Firefox browser under Win10");
		theBrowserIsUnknown = false;





           //   end        Firefox under Win10
        }

	//   end        Firefox 
} 






if (isChrome) { 

	if (isAndroid) {
		//   begin    Chrome under Android

		    //  alert("using the Chrome browser under Android");
		    theBrowserIsUnknown = false;



           	//   end       Chrome under Android
         } else {
			//   begin    Chrome others

			//  alert("using the Chrome browser on non Android platform");
			theBrowserIsUnknown = false;





    		//   end     Chrome others
		}

	//   end        Chrome
} 




if (isSafari) { 

	if (isiPad) { 

		  //  alert("using the Safari browser on an iPad");
		  theBrowserIsUnknown = false;





	  //   end        isiPad
	} else if (isiPhone) { 

		  //  alert("using the Safari browser on an iPhone");
		  theBrowserIsUnknown = false;





	  //   end        isiPhone
	} else if (isMac) { 

		  //  alert("using the Safari browser on a Mac");
		  theBrowserIsUnknown = false;



	  //   end        isMac
	}

	//   end        Safari
} 





if (isEdge) { 

	  //  alert("using the old Edge browser");
	  theBrowserIsUnknown = false;





	//   end        old Edge
} 





if (isNewEdge) { 
	//   begin        new Edge

	  //  alert("using the new Edge browser");
	  theBrowserIsUnknown = false;




	//   end        new Edge
}






if (theBrowserIsUnknown) { 
   //  unknown browser
   //
	alert("You are using using an unrecognized browser.");
   //
   //  end      unknown browser
} 




// end     index.js




//   *******************************************************










