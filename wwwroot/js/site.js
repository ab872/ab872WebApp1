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




//  <!--  debug_js  -->



// start      debug.js

//  alert("debug.js has loaded");


   function clearDebug() { 

      //  alert("begin     clearDebug");

      document.getElementById("debugOut").innerHTML = "";

      //  <!--        -->

      //  alert("end     clearDebug");

      // end   function clearDebug
   } 





   //  Window.localStorage        This function was derived from -
   //  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
   //  
   //  added 26nov2021
   function localStorageAvailable() {

       if ('localStorage' in window) {
             //  local storage supported 
              try {
                       //  making sure it actually works
                       localStorage.setItem('test1234', 'testing...');
                       localStorage.removeItem('test1234');
                       return true;
               }
               catch(e) {

                    //  we got an error when we tried to use this feature
                    return false;
               }

         } else {

               //  this feature is not supported
               return false;
         }

      //  end     function localStorageAvailable
   }





   //  Window.sessionStorage        This function was derived from -
   //  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
   //  
   //  added 26nov2021
   function sessionStorageAvailable() {

       if ('sessionStorage' in window) {
             //  session storage supported 
              try {
                        //  making sure it actually works
                        sessionStorage.setItem('test1234', 'testing...');
                        sessionStorage.removeItem('test1234');
                        return true;
               }
               catch(e) {

                    //  we got an error when we tried to use this feature
                    return false;
               }

         } else {

               //  this feature is not supported
               return false;
         }

      //  end     function sessionStorageAvailable
   }





function showDebug() { 

   //  alert("begin     showDebug");

   //  begin building the string to display on screen
   var displayStr = '<center><span style="font-size:14px;"><b>DEBUG</b></span></center><br>';


   //  browser id code moved to
   //   browserId.js


   //  continue building the string to display
   displayStr = displayStr + 
         '<center><span style="font-size:12px;"><b>***  Your browser.  ***<br>' + 
         navigator.userAgent + '</b></span></center><br><br>';



   
    //  iOS devices seem to be having a problem with this
    //  depending on the situation, the host might return either a host name or an actual IP address

   if (isiPad) { 
	//   begin   is iPad

   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your hostname or IP address.  ***<br>' + 
         	"********" + '</b></span></center><br>';

   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your port.  ***<br>' + 
         	"********" + '</b></span></center><br>';


   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your timezone.  ***<br>' + 
		"********" + '</b></span></center><br><br>';


        //   end     is iPad
   } else if (isiPhone) { 
	//   begin   is iPhone


   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your hostname or IP address.  ***<br>' + 
         	"********" + '</b></span></center><br>';

   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your port.  ***<br>' + 
         	"********" + '</b></span></center><br>';

   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your timezone.  ***<br>' + 
		"********" + '</b></span></center><br><br>';


	//   end     is iPhone
   } else { 
	//   begin others

   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your hostname or IP address.  ***<br>' + 
         	location.hostname + '</b></span></center><br>';

   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your port.  ***<br>' + 
         	location.port + '</b></span></center><br>';


   		displayStr = displayStr + 
         	'<center><span style="font-size:12px;"><b>***  Your timezone.  ***<br>' + 
		Intl.DateTimeFormat().resolvedOptions().timeZone + '</b></span></center><br><br>';


        //   end     others
   }



   displayStr = displayStr + '<center><table border="5" rules="all">';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;"><b>Setting</b></span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + '<b>Status</b>' + '</span>' + '</center></td></tr>';

   displayStr = displayStr + 
          '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
          '<span style="font-size:12px;"><b>Device</b></span></center></td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Number of CPUs</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.hardwareConcurrency + '</span>' + 
          '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Platform</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.platform + '</span>' + 
          '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Build ID</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.buildID + '</span>' + 
          '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">&nbsp;Device Memory (GB)&nbsp;</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.deviceMemory + '</span>' + 
          '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
          '<span style="font-size:12px;"><b>Operating System</b></span></center></td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">OS and CPU</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.oscpu + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
          '<span style="font-size:12px;"><b>Screen</b></span></center></td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">&nbsp; Max Touch Points&nbsp;</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.maxTouchPoints + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Height</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + screen.height + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Width</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + screen.width + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Available Height</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + screen.availHeight + '</span>' + 
          '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Available Width</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + screen.availWidth + '</span>' + '</center> </td></tr>';

//  added 06dec2021
   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Window Orientation (n&#x00B0;)</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + window.orientation + '</span>' + '</center> </td></tr>';

//  added 06dec2021
if (isEdge) { 

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Screen Orientation (n&#x00B0;)</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + '*****' + '</span>' + '</center> </td></tr>';

   } else if (isSafari) { 

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Screen Orientation (n&#x00B0;)</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + '*****' + '</span>' + '</center> </td></tr>';

   } else { 

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Screen Orientation (n&#x00B0;)</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + screen.orientation.angle + '</span>' + '</center> </td></tr>';

}

//  added 06dec2021
if (isEdge) { 

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Orientation</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + '*****' + '</span>' + '</center> </td></tr>';

   } else if (isSafari) { 

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Orientation</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + '*****' + '</span>' + '</center> </td></tr>';

   } else { 

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Orientation</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + screen.orientation.type + '</span>' + '</center> </td></tr>';

}

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Color Depth</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + screen.colorDepth + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">Pixel Depth</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + screen.pixelDepth + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
          '<span style="font-size:12px;"><b>Product</b></span></center></td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">&nbsp;Vendor&nbsp;</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.vendor + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">&nbsp;Product&nbsp;</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.product + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">&nbsp;Version Number&nbsp;</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.productSub + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
          '<span style="font-size:12px;"><b>Language</b></span></center></td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">&nbsp;Preferred language&nbsp;</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.language + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
          '<span style="font-size:12px;">&nbsp;Languages Available&nbsp;</span></center> </td>' + 
          '<td style="background-color:ghostwhite;color:black" ><center>' + 
          '<span style="font-size:12px;">' + navigator.languages + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
          '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
          '<span style="font-size:12px;"><b>Browser</b></span></center></td></tr>';




   // Write browser name
   if (isAndroidEdge) { 


        displayStr = displayStr + 
               '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
               '<span style="font-size:12px;">&nbsp;Browser&nbsp;</span></center> </td>' + 
               '<td style="background-color:ghostwhite;color:black" ><center>' + 
               '<span style="font-size:12px;">' + 'Edge - Android' + '</span>' + '</center> </td></tr>';


   } else if (isFirefox) { 

        displayStr = displayStr + 
               '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
               '<span style="font-size:12px;">&nbsp;Browser&nbsp;</span></center> </td>' + 
               '<td style="background-color:ghostwhite;color:black" ><center>' + 
               '<span style="font-size:12px;">' + 'Firefox' + '</span>' + '</center> </td></tr>';

   } else if (isChrome) { 

               displayStr = displayStr + 
                    '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
                    '<span style="font-size:12px;">&nbsp;Browser&nbsp;</span></center> </td>' + 
                    '<td style="background-color:ghostwhite;color:black" ><center>' + 
                    '<span style="font-size:12px;">' + 'Chrome' + '</span>' + '</center> </td></tr>';

   } else if (isSafariLine) {

               displayStr = displayStr + 
                    '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
                    '<span style="font-size:12px;">&nbsp;Browser&nbsp;</span></center> </td>' + 
                    '<td style="background-color:ghostwhite;color:black" ><center>' + 
                    '<span style="font-size:12px;">' + 'Safari - LINE' + '</span>' + '</center> </td></tr>';

   } else if (isSafari) { 

               displayStr = displayStr + 
                    '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
                    '<span style="font-size:12px;">&nbsp;Browser&nbsp;</span></center> </td>' + 
                    '<td style="background-color:ghostwhite;color:black" ><center>' + 
                    '<span style="font-size:12px;">' + 'Safari' + '</span>' + '</center> </td></tr>';

   } else if (isEdge) { 

               displayStr = displayStr + 
                    '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
                    '<span style="font-size:12px;">&nbsp;Browser&nbsp;</span></center> </td>' + 
                    '<td style="background-color:ghostwhite;color:black" ><center>' + 
                    '<span style="font-size:12px;">' + 'Edge - Old' + '</span>' + '</center> </td></tr>';

   } else if (isNewEdge) { 

               displayStr = displayStr + 
                    '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
                    '<span style="font-size:12px;">&nbsp;Browser&nbsp;</span></center> </td>' + 
                    '<td style="background-color:ghostwhite;color:black" ><center>' + 
                    '<span style="font-size:12px;">' + 'Edge - New' + '</span>' + '</center> </td></tr>';


     	//   end        new Edge
  } else { 

               displayStr = displayStr + 
                    '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
                    '<span style="font-size:12px;">&nbsp;Browser&nbsp;</span></center> </td>' + 
                    '<td style="background-color:ghostwhite;color:black" ><center>' + 
                    '<span style="font-size:12px;">' + 'Unknown' + '</span>' + '</center> </td></tr>';

   } 




   displayStr = displayStr + 
        '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
        '<span style="font-size:12px;">&nbsp;Online&nbsp;</span></center> </td>' + 
        '<td style="background-color:ghostwhite;color:black" ><center>' + 
        '<span style="font-size:12px;">' + navigator.onLine + '</span>' + '</center> </td></tr>';

   displayStr = displayStr + 
        '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
        '<span style="font-size:12px;">Cookies Enabled</span></center> </td>' + 
        '<td style="background-color:ghostwhite;color:black" ><center>' + 
        '<span style="font-size:12px;">' + navigator.cookieEnabled + '</span>' + '</center> </td></tr>';



   if (navigator.javaEnabled) {

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Java Enabled</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'true' + '</span>' + '</center> </td></tr>';

   } else {

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Java Enabled</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'false' + '</span>' + '</center> </td></tr>';

   }




   displayStr = displayStr + 
        '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
        '<span style="font-size:12px;">Do Not Track</span></center> </td>' + 
        '<td style="background-color:ghostwhite;color:black" ><center>' + 
        '<span style="font-size:12px;">' + navigator.doNotTrack + '</span>' + '</center> </td></tr>';









   displayStr = displayStr + 
        '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
        '<span style="font-size:12px;"><b>Database</b></span></center></td></tr>';


   if ('indexedDB' in window) {

        //    IndexedDB supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">IndexedDB</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

   } else {

        //    IndexedDB not supported

        displayStr = displayStr + '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">IndexedDB</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }



   if ('openDatabase' in window) {

        //   Web SQL supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web SQL</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

   } else {

        //   Web SQL not supported

        displayStr = displayStr + '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web SQL</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }






   displayStr = displayStr + 
        '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
        '<span style="font-size:12px;"><b>Geolocation</b></span></center></td></tr>';



   if ("geolocation" in navigator) {

        //    geolocation supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Geolocation</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

   } else {

        //    geolocation not supported

        displayStr = displayStr + '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Geolocation</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }






   displayStr = displayStr + 
        '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
        '<span style="font-size:12px;"><b>History</b></span></center></td></tr>';

    displayStr = displayStr + 
        '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
        '<span style="font-size:12px;">History Length</span></center> </td>' + 
        '<td style="background-color:ghostwhite;color:black" ><center>' + 
        '<span style="font-size:12px;">' + history.length + '</span>' + '</center> </td></tr>';






   displayStr = displayStr + 
        '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
        '<span style="font-size:12px;"><b>MIDI</b></span></center></td></tr>';





//  17 july 2022   seems to be working now
//                 comment out the clause for Safari to make sure

//  if (isSafari) { 

//  //  17 july 2022   add back the code for Web MIDI
//  //  there seems to be a problem with this under Safari
//  //  temporarily return *** until this can be corrected

//          displayStr = displayStr + 
//               '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
//               '<span style="font-size:12px;">Web MIDI</span></center> </td>' + 
//               '<td style="background-color:ghostwhite;color:black" ><center>' + 
//               '<span style="font-size:12px;">' + '***' + '</span>' + '</center> </td></tr>';

//  //  end     if  Safari
//     } else { 


   if ("requestMIDIAccess" in navigator) {

        //    MIDI supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web MIDI</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

         //  end     MIDI supported
   } else {

        //    MIDI not supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web MIDI</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

         //  end     MIDI not supported
   }


//  //  end     not Safari
//  }










   displayStr = displayStr + 
        '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
        '<span style="font-size:12px;"><b>Sound</b></span></center></td></tr>';



   if ( ('AudioContext' in window) ||
   ('webkitAudioContext' in window) ) {

        //   Web Audio supported 

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web Audio</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

   } else {

        //   Web Audio not supported 

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web Audio</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }




   if ('speechSynthesis' in window) {

          //  speech synthesis supported 

          displayStr = displayStr + 
               '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
               '<span style="font-size:12px;">Web Speech</span></center> </td>' + 
               '<td style="background-color:ghostwhite;color:black" ><center>' + 
               '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

   } else {

          //   speech synthesis not supported 

          displayStr = displayStr + 
               '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
               '<span style="font-size:12px;">Web Speech</span></center> </td>' + 
               '<td style="background-color:ghostwhite;color:black" ><center>' + 
               '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }




   displayStr = displayStr + 
        '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
        '<span style="font-size:12px;"><b>Serial</b></span></center></td></tr>';


   if ("serial" in navigator) {

        //    Web Serial supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web Serial</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

    } else {

        //    Web Serial not supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web Serial</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }


   displayStr = displayStr + 
        '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' + 
        '<span style="font-size:12px;"><b>USB</b></span></center></td></tr>';


   if ("usb" in navigator) {

        //    USB supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web USB</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

   } else {

        //    USB not supported

        displayStr = displayStr + 
             '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Web USB</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }







   //  added 26nov2021
   displayStr = displayStr + '<tr><td colspan="2" style="background-color:honeydew;color:black"><center>' +
        '<span style="font-size:12px;"><b>Web Storage</b></span></center></td></tr>';




   //  added 26nov2021
   if ( localStorageAvailable() ) {

        displayStr = displayStr + '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Local Storage</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

   }
   else {

        displayStr = displayStr + '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Local Storage</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }



   //  added 26nov2021
   if ( sessionStorageAvailable() ) {

        displayStr = displayStr + '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
             '<span style="font-size:12px;">Session Storage</span></center> </td>' + 
             '<td style="background-color:ghostwhite;color:black" ><center>' + 
             '<span style="font-size:12px;">' + 'YES' + '</span>' + '</center> </td></tr>';

   }
   else {

        displayStr = displayStr + '<tr><td style="background-color: aliceblue;color:black" > <center>' + 
        '<span style="font-size:12px;">Session Storage</span></center> </td>' + 
        '<td style="background-color:ghostwhite;color:black" ><center>' + 
        '<span style="font-size:12px;">' + 'NO' + '</span>' + '</center> </td></tr>';

   }




   //  close the table
   displayStr = displayStr + '</table></center><br><br>';




   //  add the button
   displayStr = displayStr + 
        '<center><span style="font-size:12px;">' + 
        '<button style="background-color:maroon; color:white;margin-top:3px;margin-bottom:1px;' + 
        'border:2px solid lightgrey;border-radius:8px;width:90px;height:40px" ' + 
        'id="buttonCancel" name="buttonCancel" title="cancel update" aria-label="cancel update" ' + 
        'type="button" onClick="clearDebug()"><span style="font-size:28px;"><b>Done</b></span></button>' + 
        '</span></center>' + '<br>';

   // finished building the string, display it on the screen
   document.getElementById("debugOut").innerHTML = displayStr;

   //  <!-- 

     //  -->

   //  alert("end     showDebug");

   // end   function showDebug
} 





    


// end     debug.js




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







//   *******************************************************

// code from color picker HTML file


//  ONCLICK="setText()"
function setText() {

//  id="sampleText"
document.getElementById("sampleText").style.color="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";


document.getElementById('textColorInput').value = document.getElementById('colorValueInput').value;

   //  end      function setText
}


ONCLICK="setBackground()"
function setBackground() {

//  id="sampleOut"
document.getElementById("sampleOut").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";

document.getElementById('textBackgroundInput').value = document.getElementById('colorValueInput').value;

   //  end      function setBackground
}


//   src    =    "browserId.js"


//   src    =    "colorTable.js



//   src    =    "colors.js"






var sliderRed = document.getElementById("redSlider");

document.getElementById('redValueInput').value = document.getElementById("redSlider").value;


var sliderGreen = document.getElementById("greenSlider");

document.getElementById('greenValueInput').value = document.getElementById("greenSlider").value;


var sliderBlue = document.getElementById("blueSlider");

document.getElementById('blueValueInput').value = document.getElementById("blueSlider").value;







document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";







sliderRed.oninput = function () {

document.getElementById('redValueInput').value = document.getElementById("redSlider").value;



document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";







   //   end      sliderRed oninput function
}





sliderGreen.oninput = function () {

document.getElementById('greenValueInput').value = document.getElementById("greenSlider").value;



document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";








}




sliderBlue.oninput = function () {

document.getElementById('blueValueInput').value = document.getElementById("blueSlider").value;


document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";




}



function getColorStr( rValue, gValue, bValue ) {

var colorName = "";

colorName = 'Custom color';


//  alert("getColorStr  -  rvalue = " + 
//  rValue + 
//  "    gvalue = " + 
//  gValue + 
//  "    bvalue = " + 
//  bValue);



if( (rValue == "240") && (gValue == "248") && (bValue == "255") ) {

colorName = 'AliceBlue';

//  AliceBlue  0xf0f8ff  (240, 248, 255)  


} else if( (rValue == "250") && (gValue == "235") && (bValue == "215") ) {

colorName = 'AntiqueWhite';

//  AntiqueWhite  0xfaebd7  
//  (250, 235, 215)  


} else if( (rValue == "0") && (gValue == "255") && (bValue == "255") ) {

colorName = 'Aqua';

//  Aqua  0x00ffff  (0, 255, 255)  

} else if( (rValue == "127") && (gValue == "255") && (bValue == "212") ) {

colorName = 'Aquamarine';

//  Aquamarine  0x7fffd4  (127, 255, 212) 


} else if( (rValue == "240") && (gValue == "255") && (bValue == "255") ) {

colorName = 'Azure';

//  Azure  0xf0ffff  (240, 255, 255)  

} else if( (rValue == "245") && (gValue == "245") && (bValue == "220") ) {

colorName = 'Beige';

//  Beige  0xf5f5dc  (245, 245, 220)  

} else if( (rValue == "255") && (gValue == "228") && (bValue == "196") ) {

colorName = 'Bisque';

//  Bisque  0xffe4c4  (255, 228, 196)  

} else if( (rValue == "0") && (gValue == "0") && (bValue == "0") ) {

colorName = 'Black';

//  Black  0x000000  (0, 0, 0) 

} else if( (rValue == "255") && (gValue == "235") && (bValue == "205") ) {

colorName = 'BlanchedAlmond';

//  BlanchedAlmond  0xffebcd  
//  (255, 235, 205)  

} else if( (rValue == "0") && (gValue == "0") && (bValue == "255") ) {

colorName = 'Blue';

//  Blue  0x0000ff  (0, 0, 255) 

} else if( (rValue == "138") && (gValue == "43") && (bValue == "226") ) {

colorName = 'BlueViolet';

//  BlueViolet  0x8a2be2  (138, 43, 226)  

} else if( (rValue == "165") && (gValue == "42") && (bValue == "42") ) {

colorName = 'Brown';

//  Brown  0xa52a2a  (165, 42, 42)  

} else if( (rValue == "222") && (gValue == "184") && (bValue == "135") ) {

colorName = 'BurlyWood';

//  BurlyWood  0xdeb887  (222, 184, 135)  
 
} else if( (rValue == "95") && (gValue == "158") && (bValue == "160") ) {

colorName = 'CadetBlue';

//  CadetBlue  0x5f9ea0  (95, 158, 160)  

} else if( (rValue == "127") && (gValue == "255") && (bValue == "0") ) {

colorName = 'Chartreuse';

//  Chartreuse  0x7f 0xff 0x00  
//  (127, 255, 0)  

} else if( (rValue == "210") && (gValue == "105") && (bValue == "30") ) {

colorName = 'Chocolate';

//  Chocolate  0xd2 0x69 0x1e  
//  (210, 105, 30) 

} else if( (rValue == "255") && (gValue == "127") && (bValue == "80") ) {

colorName = 'Coral';

//  Coral  0xff 0x7f 0x50  (255, 127, 80)  

} else if( (rValue == "100") && (gValue == "149") && (bValue == "237") ) {

colorName = 'CornflowerBlue';

//  CornflowerBlue  0x64 0x95 0xed  
//  (100, 149, 237) 

} else if( (rValue == "255") && (gValue == "248") && (bValue == "220") ) {

colorName = 'Cornsilk';

//  Cornsilk  0xff 0xf8 0xdc  
//  (255, 248, 220)  

} else if( (rValue == "220") && (gValue == "20") && (bValue == "60") ) {

colorName = 'Crimson';

//  Crimson  0xdc 0x14 0x3c  
//  (220, 20, 60)  

} else if( (rValue == "0") && (gValue == "255") && (bValue == "255") ) {

colorName = 'Cyan';

//  Cyan  0x00 0xff 0xff  (0, 255, 255)  

} else if( (rValue == "0") && (gValue == "0") && (bValue == "139") ) {

colorName = 'DarkBlue';

//  DarkBlue  0x00 0x00 0x8b  (0, 0, 139)  

} else if( (rValue == "0") && (gValue == "139") && (bValue == "139") ) {

colorName = 'DarkCyan';

//  DarkCyan  0x00 0x8b 0x8b  
//  (0, 139, 139)  

} else if( (rValue == "184") && (gValue == "134") && (bValue == "11") ) {

colorName = 'DarkGoldenrod';

//  DarkGoldenrod  0xb8 0x86 0x0b  
//  (184, 134, 11) 

} else if( (rValue == "169") && (gValue == "169") && (bValue == "169") ) {

colorName = 'DarkGray';

//  DarkGray  0xa9 0xa9 0xa9  
//  (169, 169, 169)  

} else if( (rValue == "0") && (gValue == "100") && (bValue == "0") ) {

colorName = 'DarkGreen';

//  DarkGreen  0x00 0x64 0x00  
//  (0, 100, 0)  

} else if( (rValue == "189") && (gValue == "183") && (bValue == "107") ) {

colorName = 'DarkKhaki';

//  DarkKhaki  0xbd 0xb7 0x6b  
//  (189, 183, 107) 

} else if( (rValue == "139") && (gValue == "0") && (bValue == "139") ) {

colorName = 'DarkMagenta';

//  DarkMagenta  0x8b 0x00 0x8b  
//  (139, 0, 139)

} else if( (rValue == "85") && (gValue == "107") && (bValue == "47") ) {

colorName = 'DarkOliveGreen';

//  DarkOliveGreen  0x55 0x6b 0x2f  
//  (85, 107, 47)  

} else if( (rValue == "255") && (gValue == "140") && (bValue == "0") ) {

colorName = 'DarkOrange';

//  DarkOrange  0xff 0x8c 0x00  
//  (255, 140, 0)

} else if( (rValue == "153") && (gValue == "50") && (bValue == "204") ) {

colorName = 'DarkOrchid';

// DarkOrchid  0x99 0x32 0xcc  
//  (153, 50, 204)  

} else if( (rValue == "139") && (gValue == "0") && (bValue == "0") ) {

colorName = 'DarkRed';

//  DarkRed  0x8b 0x00 0x00  (139, 0, 0)  

} else if( (rValue == "233") && (gValue == "150") && (bValue == "122") ) {

colorName = 'DarkSalmon';

//  DarkSalmon  0xe9 0x96 0x7a  
//  (233, 150, 122)

} else if( (rValue == "143") && (gValue == "188") && (bValue == "143") ) {

colorName = 'DarkSeaGreen';

//  DarkSeaGreen  0x8f 0xbc 0x8f  
//  (143, 188, 143)

} else if( (rValue == "72") && (gValue == "61") && (bValue == "139") ) {

colorName = 'DarkSlateBlue';

//  DarkSlateBlue  0x48 0x3d 0x8b  
//  (72, 61, 139) 

} else if( (rValue == "47") && (gValue == "79") && (bValue == "79") ) {

colorName = 'DarkSlateGray';

//  DarkSlateGray  0x2f 0x4f 0x4f  
//  (47, 79, 79) 

} else if( (rValue == "0") && (gValue == "206") && (bValue == "209") ) {

colorName = 'DarkTurquoise';

//  DarkTurquoise  0x00 0xce 0xd1  
//  (0, 206, 209) 

} else if( (rValue == "148") && (gValue == "0") && (bValue == "211") ) {

colorName = 'DarkViolet';

//  DarkViolet  0x94 0x00 0xd3  
//  (148, 0, 211)  

} else if( (rValue == "255") && (gValue == "20") && (bValue == "147") ) {

colorName = 'DeepPink';

//  DeepPink  0xff 0x14 0x93  
//  (255, 20, 147)  

} else if( (rValue == "0") && (gValue == "191") && (bValue == "255") ) {

colorName = 'DeepSkyBlue';

//  DeepSkyBlue  0x00 0xbf 0xff  
//  (0, 191, 255) 

} else if( (rValue == "105") && (gValue == "105") && (bValue == "105") ) {

colorName = 'DimGray';

//  DimGray  0x69 0x69 0x69  
//  (105, 105, 105) 

} else if( (rValue == "30") && (gValue == "144") && (bValue == "255") ) {

colorName = 'DodgerBlue';

//  DodgerBlue  0x1e 0x90 0xff  
//  (30, 144, 255)  

} else if( (rValue == "178") && (gValue == "34") && (bValue == "34") ) {

colorName = 'FireBrick';

//  FireBrick  0xb2 0x22 0x22  
//  (178, 34, 34)  

} else if( (rValue == "255") && (gValue == "250") && (bValue == "240") ) {

colorName = 'FloralWhite';

//  FloralWhite  0xff 0xfa 0xf0  
//  (255, 250, 240) 

} else if( (rValue == "34") && (gValue == "139") && (bValue == "34") ) {

colorName = 'ForestGreen';

//  ForestGreen  0x22 0x8b 0x22  
//  (34, 139, 34)  

} else if( (rValue == "255") && (gValue == "0") && (bValue == "255") ) {

colorName = 'Fuchsia';

//  Fuchsia  0xff 0x00 0xff  (255, 0, 255)  

} else if( (rValue == "220") && (gValue == "220") && (bValue == "220") ) {

colorName = 'Gainsboro';

//  Gainsboro  0xdc 0xdc 0xdc  
//  (220, 220, 220) 

} else if( (rValue == "248") && (gValue == "248") && (bValue == "255") ) {

colorName = 'GhostWhite';

//  GhostWhite  0xf8 0xf8 0xff  
//  (248, 248, 255)

} else if( (rValue == "255") && (gValue == "215") && (bValue == "0") ) {

colorName = 'Gold';

//  Gold  0xff 0xd7 0x00  (255, 215, 0)  

} else if( (rValue == "218") && (gValue == "165") && (bValue == "32") ) {

colorName = 'Goldenrod';

//  Goldenrod  0xda 0xa5 0x20  
//  (218, 165, 32)

} else if( (rValue == "128") && (gValue == "128") && (bValue == "128") ) {

colorName = 'Gray';

//  Gray  0x80 0x80 0x80  
//  (128, 128, 128)  

} else if( (rValue == "0") && (gValue == "128") && (bValue == "0") ) {

colorName = 'Green';

//  Green  0x00 0x80 0x00  (0, 128, 0)  

} else if( (rValue == "173") && (gValue == "255") && (bValue == "47") ) {

colorName = 'GreenYellow';

//  GreenYellow  0xad 0xff 0x2f  
//  (173, 255, 47)

} else if( (rValue == "240") && (gValue == "255") && (bValue == "240") ) {

colorName = 'HoneyDew';

//  HoneyDew  0xf0 0xff 0xf0  
//  (240, 255, 240)

} else if( (rValue == "255") && (gValue == "105") && (bValue == "180") ) {

colorName = 'HotPink';

//  HotPink  0xff 0x69 0xb4  
//  (255, 105, 180)  

} else if( (rValue == "205") && (gValue == "92") && (bValue == "92") ) {

colorName = 'IndianRed';

//  IndianRed  0xcd 0x5c 0x5c  
//  (205, 92, 92)  

} else if( (rValue == "75") && (gValue == "0") && (bValue == "130") ) {

colorName = 'Indigo';

//  Indigo  0x4b 0x00 0x82  (75, 0, 130)  

} else if( (rValue == "255") && (gValue == "255") && (bValue == "240") ) {

colorName = 'Ivory';

//  Ivory  0xff 0xff 0xf0  (255, 255, 240)  

} else if( (rValue == "240") && (gValue == "230") && (bValue == "140") ) {

colorName = 'Khaki';

//  Khaki  0xf0 0xe6 0x8c  (240, 230, 140)

} else if( (rValue == "230") && (gValue == "230") && (bValue == "250") ) {

colorName = 'Lavender';

//  Lavender  0xe6 0xe6 0xfa  
//  (230, 230, 250) 

} else if( (rValue == "255") && (gValue == "240") && (bValue == "245") ) {

colorName = 'LavenderBlush';

//  LavenderBlush 0xff 0xf0 0xf5  
//  (255, 240, 245)

} else if( (rValue == "124") && (gValue == "252") && (bValue == "0") ) {

colorName = 'LawnGreen';

//  LawnGreen  0x7c 0xfc 0x00  
//  (124, 252, 0) 

} else if( (rValue == "255") && (gValue == "250") && (bValue == "205") ) {

colorName = 'LemonChiffon';

//  LemonChiffon  0xff 0xfa 0xcd  
//  (255, 250, 205)  

} else if( (rValue == "173") && (gValue == "216") && (bValue == "230") ) {

colorName = 'LightBlue';

//  LightBlue  0xad 0xd8 0xe6  
//  (173, 216, 230)

} else if( (rValue == "240") && (gValue == "128") && (bValue == "128") ) {

colorName = 'LightCoral';

//  LightCoral  0xf0 0x80 0x80  
//  (240, 128, 128) 

} else if( (rValue == "224") && (gValue == "255") && (bValue == "255") ) {

colorName = 'LightCyan';

//  LightCyan  0xe0 0xff 0xff  
//  (224, 255, 255)  

} else if( (rValue == "250") && (gValue == "250") && (bValue == "210") ) {

colorName = 'LightGoldenrodYellow';

//  LightGoldenrodYellow  0xfa 0xfa 0xd2
//  (250, 250, 210) 

} else if( (rValue == "211") && (gValue == "211") && (bValue == "211") ) {

      colorName = 'LightGray';

      //  LightGray  0xd3 0xd3 0xd3  
      //  (211, 211, 211)

} else if( (rValue == "144") && (gValue == "238") && (bValue == "144") ) {

     colorName = 'LightGreen';

     //  LightGreen 0x90 0xee 0x90 
     //  (144, 238, 144)

} else if( (rValue == "255") && (gValue == "182") && (bValue == "193") ) {

     colorName = 'LightPink';

     //  LightPink 0xff 0xb6 0xc1 
     //  (255, 182, 193)

} else if( (rValue == "255") && (gValue == "160") && (bValue == "122") ) {

     colorName = 'LightSalmon';

     //  LightSalmon 0xff 0xa0 0x7a 
     //  (255, 160, 122)

} else if( (rValue == "32") && (gValue == "178") && (bValue == "170") ) {

     colorName = 'LightSeaGreen';

     //  LightSeaGreen 0x20 0xb2 0xaa 
     //  (32, 178, 170)

} else if( (rValue == "135") && (gValue == "206") && (bValue == "250") ) {

     colorName = 'LightSkyBlue';

     //  LightSkyBlue 0x87 0xce 0xfa 
     //  (135, 206, 250)

} else if( (rValue == "119") && (gValue == "136") && (bValue == "153") ) {

     colorName = 'LightSlateGray';

    //  LightSlateGray 0x77 0x88 0x99
    //  (119, 136, 153)

} else if( (rValue == "176") && (gValue == "196") && (bValue == "222") ) {

     colorName = 'LightSteelBlue';

     //  LightSteelBlue 0xb0 0xc4 0xde 
     //  (176, 196, 222)

} else if( (rValue == "255") && (gValue == "255") && (bValue == "224") ) {

     colorName = 'LightYellow';

     //  LightYellow 0xff 0xff 0xe0 
     //  (255, 255, 224)

} else if( (rValue == "0") && (gValue == "255") && (bValue == "0") ) {

     colorName = 'Lime';

     //  Lime 0x00 0xff 0x00 
     //  (0, 255, 0)

} else if( (rValue == "50") && (gValue == "205") && (bValue == "50") ) {

     colorName = 'LimeGreen';

     //  LimeGreen 0x32 0xcd 0x32 
     //  (50, 205, 50)

} else if( (rValue == "250") && (gValue == "240") && (bValue == "230") ) {

     colorName = 'Linen';

     //  Linen 0xfa 0xf0 0xe6
     //  (250, 240, 230)

} else if( (rValue == "255") && (gValue == "0") && (bValue == "255") ) {

     colorName = 'Magenta';

     //  Magenta 0xff 0x00 0xff 
     //  (255, 0, 255)

} else if( (rValue == "128") && (gValue == "0") && (bValue == "0") ) {

     colorName = 'Maroon';

     //  Maroon 0x80 0x00 0x00 
     //  (128, 0, 0)

} else if( (rValue == "102") && (gValue == "205") && (bValue == "170") ) {

     colorName = 'MediumAquamarine';

     //  MediumAquamarine
     //  0x66 0xcd 0xaa
     //  (102, 205, 170)

} else if( (rValue == "0") && (gValue == "0") && (bValue == "205") ) {

     colorName = 'MediumBlue';

     //  MediumBlue 0x00 0x00 0xcd 
     //  (0, 0, 205)

} else if( (rValue == "186") && (gValue == "85") && (bValue == "211") ) {

     colorName = 'MediumOrchid';

     //  MediumOrchid 0xba 0x55 0xd3 
     //  (186, 85, 211)

} else if( (rValue == "147") && (gValue == "112") && (bValue == "216") ) {

     colorName = 'MediumPurple';

     //  MediumPurple 0x93 0x70 0xd8 
     //  (147, 112, 216)

} else if( (rValue == "60") && (gValue == "179") && (bValue == "113") ) {

     colorName = 'MediumSeaGreen';

     //  MediumSeaGreen 0x3c 0xb3 0x71
     //  (60, 179, 113)

} else if( (rValue == "123") && (gValue == "104") && (bValue == "238") ) {

     colorName = 'MediumSlateBlue';

     //  MediumSlateBlue 0x7b 0x68 0xee
     //  (123, 104, 238)

} else if( (rValue == "0") && (gValue == "250") && (bValue == "154") ) {

     colorName = 'MediumSpringGreen';

     //  MediumSpringGreen 
     //  0x00 0xfa 0x9a
     //  (0, 250, 154)

} else if( (rValue == "72") && (gValue == "209") && (bValue == "204") ) {

     colorName = 'MediumTurquoise';

     //  MediumTurquoise 0x48 0xd1 0xcc
     //  (72, 209, 204)

} else if( (rValue == "199") && (gValue == "21") && (bValue == "133") ) {

     colorName = 'MediumVioletRed';

     //  MediumVioletRed 0xc7 0x15 0x85
     //  (199, 21, 133)

} else if( (rValue == "25") && (gValue == "25") && (bValue == "112") ) {

     colorName = 'MidnightBlue';

     //  MidnightBlue 0x19 0x19 0x70 
     //  (25, 25, 112)

} else if( (rValue == "245") && (gValue == "255") && (bValue == "250") ) {

     colorName = 'MintCream';

     //  MintCream 0xf5 0xff 0xfa 
     //  (245, 255, 250)

} else if( (rValue == "255") && (gValue == "228") && (bValue == "225") ) {

     colorName = 'MistyRose';

     //  MistyRose 0xff 0xe4 0xe1 
     //  (255, 228, 225)

} else if( (rValue == "255") && (gValue == "228") && (bValue == "181") ) {

     colorName = 'Moccasin';

     //  Moccasin 0xff 0xe4 0xb5 
     //  (255, 228, 181)

} else if( (rValue == "255") && (gValue == "222") && (bValue == "173") ) {

     colorName = 'NavajoWhite';

     //  NavajoWhite 0xff 0xde 0xad 
     //  (255, 222, 173)

} else if( (rValue == "0") && (gValue == "0") && (bValue == "128") ) {

     colorName = 'Navy';

     //  Navy 0x00 0x00 0x80 (0, 0, 128)

} else if( (rValue == "253") && (gValue == "245") && (bValue == "230") ) {

     colorName = 'OldLace';

     //  OldLace 0xfd 0xf5 0xe6 
     //  (253, 245, 230)

} else if( (rValue == "128") && (gValue == "128") && (bValue == "0") ) {

     colorName = 'Olive';

     //  Olive 0x80 0x80 0x00 (128, 128, 0)

} else if( (rValue == "107") && (gValue == "142") && (bValue == "35") ) {

     colorName = 'OliveDrab';

    //  OliveDrab 0x6b 0x8e 0x23 
    //  (107, 142, 35)

} else if( (rValue == "255") && (gValue == "165") && (bValue == "0") ) {

     colorName = 'Orange';

     //  Orange 0xff 0xa5 0x00
     //  (255, 165, 0)

} else if( (rValue == "255") && (gValue == "69") && (bValue == "0") ) {

     colorName = 'OrangeRed';

     //  OrangeRed 0xff 0x45 0x00 
     //  (255, 69, 0)

} else if( (rValue == "218") && (gValue == "112") && (bValue == "214") ) {

     colorName = 'Orchid';

     //  Orchid 0xda 0x70 0xd6 
     //  (218, 112, 214)

} else if( (rValue == "238") && (gValue == "232") && (bValue == "170") ) {

     colorName = 'PaleGoldenrod';

     //  PaleGoldenrod 0xee 0xe8 0xaa 
     //  (238, 232, 170)

} else if( (rValue == "152") && (gValue == "251") && (bValue == "152") ) {

     colorName = 'PaleGreen';

     //  PaleGreen 0x98 0xfb 0x98 
     //  (152, 251, 152)

} else if( (rValue == "175") && (gValue == "238") && (bValue == "238") ) {

     colorName = 'PaleTurquoise';

     //  PaleTurquoise 0xaf 0xee 0xee 
     //  (175, 238, 238)

} else if( (rValue == "216") && (gValue == "112") && (bValue == "147") ) {

     colorName = 'PaleVioletRed';

     //  PaleVioletRed 0xd8 0x70 0x93 
    //  (216, 112, 147)

} else if( (rValue == "255") && (gValue == "239") && (bValue == "213") ) {

     colorName = 'PapayaWhip';

     //  PapayaWhip 0xff 0xef 0xd5 
     //  (255, 239, 213)

} else if( (rValue == "255") && (gValue == "218") && (bValue == "185") ) {

     colorName = 'PeachPuff';

     //  PeachPuff 0xff 0xda 0xb9 
     //  (255, 218, 185)

} else if( (rValue == "205") && (gValue == "133") && (bValue == "63") ) {

     colorName = 'Peru';

     //  Peru 0xcd 0x85 0x3f (205, 133, 63)

} else if( (rValue == "255") && (gValue == "192") && (bValue == "203") ) {

     colorName = 'Pink';

     //  Pink 0xff 0xc0 0xcb (255, 192, 203)

} else if( (rValue == "221") && (gValue == "160") && (bValue == "221") ) {

     colorName = 'Plum';

     //  Plum 0xdd 0xa0 0xdd
     //  (221, 160, 221)

} else if( (rValue == "176") && (gValue == "224") && (bValue == "230") ) {

     colorName = 'PowderBlue';

     //  PowderBlue 0xb0 0xe0 0xe6 
     //  (176, 224, 230)

} else if( (rValue == "128") && (gValue == "0") && (bValue == "128") ) {

     colorName = 'Purple';

     //  Purple 0x80 0x00 0x80
     //  (128, 0, 128)

} else if( (rValue == "102") && (gValue == "51") && (bValue == "153") ) {

     colorName = 'RebeccaPurple';

     //  RebeccaPurple 0x66 0x33 0x99 
     //  (102, 51, 153)

} else if( (rValue == "255") && (gValue == "0") && (bValue == "0") ) {

     colorName = 'Red';

     //  Red 0xff 0x00 0x00 (255, 0, 0)

} else if( (rValue == "188") && (gValue == "143") && (bValue == "143") ) {

     colorName = 'RosyBrown';

     //  RosyBrown 0xbc 0x8f 0x8f 
     //  (188, 143, 143)

} else if( (rValue == "65") && (gValue == "105") && (bValue == "225") ) {

     colorName = 'RoyalBlue';

     //  RoyalBlue 0x41 0x69 0xe1 
     //  (65, 105, 225)

} else if( (rValue == "139") && (gValue == "69") && (bValue == "19") ) {

     colorName = 'SaddleBrown';

     //  SaddleBrown 0x8b 0x45 0x13 
     //  (139, 69, 19)

} else if( (rValue == "250") && (gValue == "128") && (bValue == "114") ) {

     colorName = 'Salmon';

     //  Salmon 0xfa 0x80 0x72 
     //  (250, 128, 114)

} else if( (rValue == "244") && (gValue == "164") && (bValue == "96") ) {

     colorName = 'SandyBrown';

     //  SandyBrown 0xf4 0xa4 0x60 
    //  (244, 164, 96)

} else if( (rValue == "46") && (gValue == "139") && (bValue == "87") ) {

     colorName = 'SeaGreen';

     //  SeaGreen 0x2e 0x8b 0x57 
     //  (46, 139, 87)

} else if( (rValue == "255") && (gValue == "245") && (bValue == "238") ) {

     colorName = 'SeaShell';

     //  SeaShell 0xff 0xf5 0xee 
     //  (255, 245, 238)

} else if( (rValue == "160") && (gValue == "82") && (bValue == "45") ) {

     colorName = 'Sienna';

     //  Sienna 0xa0 0x52 0x2d 
     //  (160, 82, 45)

} else if( (rValue == "192") && (gValue == "192") && (bValue == "192") ) {

     colorName = 'Silver';

     //  Silver 0xc0 0xc0 0xc0 
     //  (192, 192, 192)

} else if( (rValue == "135") && (gValue == "206") && (bValue == "235") ) {

     colorName = 'SkyBlue';

     //  SkyBlue 0x87 0xce 0xeb 
     //  (135, 206, 235)

} else if( (rValue == "106") && (gValue == "90") && (bValue == "205") ) {

     colorName = 'SlateBlue';

     //  SlateBlue 0x6a 0x5a 0xcd 
     //  (106, 90, 205)

} else if( (rValue == "112") && (gValue == "128") && (bValue == "144") ) {

     colorName = 'SlateGray';

     //  SlateGray 0x70 0x80 0x90 
     //  (112, 128, 144)

} else if( (rValue == "255") && (gValue == "250") && (bValue == "250") ) {

     colorName = 'Snow';

     //  Snow 0xff 0xfa 0xfa 
     //  (255, 250, 250)

} else if( (rValue == "0") && (gValue == "255") && (bValue == "127") ) {

     colorName = 'SpringGreen';

     //  SpringGreen 0x00 0xff 0x7f 
     //  (0, 255, 127)

} else if( (rValue == "70") && (gValue == "130") && (bValue == "180") ) {

     colorName = 'SteelBlue';

     //  SteelBlue 0x46 0x82 0xb4 
     //  (70, 130, 180)

} else if( (rValue == "210") && (gValue == "180") && (bValue == "140") ) {

     colorName = 'Tan';

     //  Tan 0xd2 0xb4 0x8c (210, 180, 140)

} else if( (rValue == "0") && (gValue == "128") && (bValue == "128") ) {

     colorName = 'Teal';

     //  Teal 0x00 0x80 0x80 (0, 128, 128)

} else if( (rValue == "216") && (gValue == "191") && (bValue == "216") ) {

     colorName = 'Thistle';

     //  Thistle 0xd8 0xbf 0xd8
     //  (216, 191, 216)

} else if( (rValue == "255") && (gValue == "99") && (bValue == "71") ) {

     colorName = 'Tomato';

     //  Tomato 0xff 0x63 0x47 
     //  (255, 99, 71)

} else if( (rValue == "64") && (gValue == "224") && (bValue == "208") ) {

     colorName = 'Turquoise';

     //  Turquoise 0x40 0xe0 0xd0 
     //  (64, 224, 208)

} else if( (rValue == "238") && (gValue == "130") && (bValue == "238") ) {

     colorName = 'Violet';

     //  Violet 0xee 0x82 0xee
     //  (238, 130, 238)

} else if( (rValue == "245") && (gValue == "222") && (bValue == "179") ) {

     colorName = 'Wheat';

     //  Wheat 0xf5 0xde 0xb3
     //  (245, 222, 179)

} else if( (rValue == "255") && (gValue == "255") && (bValue == "255") ) {

     colorName = 'White';

     //  White 0xff 0xff 0xff
     //  (255, 255, 255)

} else if( (rValue == "245") && (gValue == "245") && (bValue == "245") ) {

     colorName = 'WhiteSmoke';

     //  WhiteSmoke 0xf5 0xf5 0xf5 
     //  (245, 245, 245)

} else if( (rValue == "255") && (gValue == "255") && (bValue == "0") ) {

     colorName = 'Yellow';

     //  Yellow 0xff 0xff 0x00 (255, 255, 0)

} else if( (rValue == "154") && (gValue == "205") && (bValue == "50") ) {

     colorName = 'YellowGreen';

     //  YellowGreen 0x9a 0xcd 0x32 
     //  (154, 205, 50)

} 










var redHexStr = "";
var greenHexStr = "";
var blueHexStr = "";

if( rValue < 16 ) {
       redHexStr = "0" +     
       Number(rValue).toString(16);
} else {
       redHexStr =
       Number(rValue).toString(16);
}

if( gValue < 16 ) {
       greenHexStr = "0" +
       Number(gValue).toString(16);
} else {
       greenHexStr =
       Number(gValue).toString(16);
}

if( bValue < 16 ) {
      blueHexStr = "0" +
      Number(bValue).toString(16);
} else {
      blueHexStr =
      Number(bValue).toString(16);
}




return colorName +
'    ' + 
'0x' +
redHexStr + 
greenHexStr + 
blueHexStr + 
'     ' + 
'rgb( ' + rValue + ', ' + gValue + ', ' +
bValue + ' )  ';


   //  end       function getColorStr
}








//  ONCLICK="increaseRedValue()"

function increaseRedValue() {

var tmpRedValue = Number(document.getElementById("redSlider").value);

tmpRedValue = tmpRedValue + Number("1");

if( tmpRedValue > 255 ) {
        tmpRedValue = Number("255");
}

document.getElementById("redSlider").value = tmpRedValue;

document.getElementById('redValueInput').value = document.getElementById("redSlider").value;


document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";






   //  end    function increaseRedValue
}






function increaseGreenValue() {

var tmpGreenValue = Number(document.getElementById("greenSlider").value);

tmpGreenValue = tmpGreenValue + Number("1");

if( tmpGreenValue > 255 ) {
        tmpGreenValue = Number("255");
}

document.getElementById("greenSlider").value = tmpGreenValue;

document.getElementById('greenValueInput').value = document.getElementById("greenSlider").value;


document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";






   //  end    function increaseGreenValue
}



function increaseBlueValue() {

var tmpBlueValue = Number(document.getElementById("blueSlider").value);

tmpBlueValue = tmpBlueValue + Number("1");

if( tmpBlueValue > 255 ) {
        tmpBlueValue = Number("255");
}

document.getElementById("blueSlider").value = tmpBlueValue;

document.getElementById('blueValueInput').value = document.getElementById("blueSlider").value;


document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";






   //  end    function increaseBlueValue
}









//  ONCLICK="decreaseRedValue()"

function decreaseRedValue() {

var tmpRedValue = Number(document.getElementById("redSlider").value);

tmpRedValue = tmpRedValue - Number("1");

if( tmpRedValue < 0 ) {
        tmpRedValue = Number("0");
}

document.getElementById("redSlider").value = tmpRedValue;

document.getElementById('redValueInput').value = document.getElementById("redSlider").value;


document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";







   //  end    function decreaseRedValue
}







function decreaseGreenValue() {

var tmpGreenValue = Number(document.getElementById("greenSlider").value);

tmpGreenValue = tmpGreenValue - Number("1");

if( tmpGreenValue < 0 ) {
        tmpGreenValue = Number("0");
}

document.getElementById("greenSlider").value = tmpGreenValue;

document.getElementById('greenValueInput').value = document.getElementById("greenSlider").value;


document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";





   //  end    function decreaseGreenValue
}




function decreaseBlueValue() {

var tmpBlueValue = Number(document.getElementById("blueSlider").value);

tmpBlueValue = tmpBlueValue - Number("1");


if( tmpBlueValue < 0 ) {
        tmpBlueValue = Number("0");
}

document.getElementById("blueSlider").value = tmpBlueValue;

document.getElementById('blueValueInput').value = document.getElementById("blueSlider").value;


document.getElementById('colorValueInput').value = 
getColorStr( document.getElementById("redSlider").value, document.getElementById("greenSlider").value, document.getElementById("blueSlider").value );


document.getElementById("sampleColorInput").style.backgroundColor="rgb(" + Number(document.getElementById("redSlider").value) + "," + Number(document.getElementById("greenSlider").value) + "," + Number(document.getElementById("blueSlider").value) + ")";




   //  end    function decreaseBlueValue
}


//   *******************************************************

// code from colorTable JS file

function showColorTable() { 

   //  alert("begin     showColorTable");

//  window.open(url, winName,
//                             winFeatures);

//  winFeatures -
//  "toolbar=no[yes], location=no[yes], 
//   directories=no[yes], status=no[yes],
//   menubar=no[yes], scrollbars=no[yes],
//   resizable=no[yes], width=100,
//   height=100, top=100, left=100"



//  newWindow.document.write('xxx');

//  newWindow.document
//  .body.write('xxx');

//  newWindow.document.body
//  .innerHTML = "xxxx";

//  script  can't execute in newWindow

//    newWindow.close();





var titleFontSizeStr = "24px";

var labelFontSizeStr = "10px";

var colorFontSizeStr = "10px";

var copyrightFontSizeStr = "10px";







   if (isFirefox) { 
           //   begin      Firefox 


if (isAndroid) {
           //   begin      Firefox under Android


            titleFontSizeStr = "24px";

            labelFontSizeStr = "10px";

            colorFontSizeStr = "10px";

            copyrightFontSizeStr = "10px";




           //   end     Firefox under Android
        } 

        if (isWin10) {
           //   begin      Firefox under Win10

  
            titleFontSizeStr = "24px";

            labelFontSizeStr = "10px";

            colorFontSizeStr = "10px";

            copyrightFontSizeStr = "10px";



           //   end        Firefox under Win10
        } 




           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

          //   alert("Chrome under Android");


            titleFontSizeStr = "24px";

            labelFontSizeStr = "10px";

            colorFontSizeStr = "10px";

            copyrightFontSizeStr = "10px";



           //   end       Chrome under Android
         } else {
           //   begin    Chrome others


               titleFontSizeStr = "24px";

               labelFontSizeStr = "10px";

              colorFontSizeStr = "10px";

              copyrightFontSizeStr = "10px";



             //   end     Chrome others
          }


           //   end        Chrome
   } else if (isSafari) { 


      titleFontSizeStr = "24px";

      labelFontSizeStr = "10px";

      colorFontSizeStr = "10px";

      copyrightFontSizeStr = "10px";



           //   end        Safari
   } else if (isEdge) { 


      titleFontSizeStr = "24px";

      labelFontSizeStr = "10px";

      colorFontSizeStr = "10px";

      copyrightFontSizeStr = "10px";



           //   end        Edge
   } else { 
      //  begin      unidentified browser


      titleFontSizeStr = "24px";

      labelFontSizeStr = "10px";

      colorFontSizeStr = "10px";

      copyrightFontSizeStr = "10px";



      //  end       unidentified browser
   } 















var displayStr = "";


displayStr = displayStr +
'<br><center><span style="color:Navy;font-size:24px;"><b>Color Table</b></span></center><br>';


//  Where's the dot??
//  It appears centered immediately
//  above the table


displayStr = displayStr + 
'<center><table border="3" rules="all">'; 

displayStr = displayStr +
'<tr><td><span style="font-size:10px;"><center><b>Name</b></center></span></td><td><span style="font-size:10px;"><center><b>HEX</b></center></span></td><td><span style="font-size:10px;"><center><b>Decimal</b></center></span></td><td><span style="font-size:10px;"><center><b>&nbsp;&nbsp;Sample&nbsp;&nbsp;</b></center></span></td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;AliceBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf0 0xf8 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;240, 248, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:aliceblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;AntiqueWhite&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xfa 0xeb 0xd7&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;250, 235, 215&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:antiquewhite;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Aqua&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0xff 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 255, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:aqua;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Aquamarine&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x7f 0xff 0xd4&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;127, 255, 212&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:aquamarine;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Azure&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf0 0xff 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;240, 255, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:azure;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Beige&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf5 0xf5 0xdc&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;245, 245, 220&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:beige;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Bisque&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xe4 0xc4&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 228, 196&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:bisque;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Black&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0x00 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 0, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:black;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;BlanchedAlmond&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xeb 0xcd&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 235, 205&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:blanchedalmond;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Blue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>0x00 0x00 0xff</center></span></td><td><span style="font-size:10px;"><center>0, 0, 255</center></span></td><td style="color:black;background-color:blue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;BlueViolet&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x8a 0x2b 0xe2&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;138, 43, 226&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:blueviolet;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Brown&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xa5 0x2a 0x2a&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;165, 42, 42&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:brown;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;BurlyWood&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xde 0xb8 0x87&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;222, 184, 135&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:burlywood;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;CadetBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x5f 0x9e 0xa0&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;95, 158, 160&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:cadetblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Chartreuse&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x7f 0xff 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;127, 255, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:chartreuse;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Chocolate&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xd2 0x69 0x1e&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;210, 105, 30&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:chocolate;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Coral&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x7f 0x50&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 127, 80&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:coral;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;CornflowerBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x64 0x95 0xed&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;100, 149, 237&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:cornflowerblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Cornsilk&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xf8 0xdc&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 248, 220&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:cornsilk;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Crimson&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xdc 0x14 0x3c&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;220, 20, 60&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:crimson;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Cyan&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0xff 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 255, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:cyan;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0x00 0x8b&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 0, 139&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkCyan&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0x8b 0x8b&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 139, 139&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkcyan;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkGoldenrod&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xb8 0x86 0x0b&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;184, 134, 11&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkgoldenrod;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkGray&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xa9 0xa9 0xa9&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;169, 169, 169&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkgray;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0x64 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 100, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkgreen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkKhaki&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xbd 0xb7 0x6b&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;189, 183, 107&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkkhaki;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkMagenta&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x8b 0x00 0x8b&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;139, 0, 139&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkmagenta;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkOliveGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x55 0x6b 0x2f&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;85, 107, 47&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkolivegreen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkOrange&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x8c 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 140, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkorange;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkOrchid&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x99 0x32 0xcc&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;153, 50, 204&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkorchid;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkRed&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x8b 0x00 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;139, 0, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkred;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkSalmon&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xe9 0x96 0x7a&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;233, 150, 122&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darksalmon;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkSeaGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x8f 0xbc 0x8f&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;143, 188, 143&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkseagreen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkSlateBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x48 0x3d 0x8b&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;72, 61, 139&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkslateblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkSlateGray&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x2f 0x4f 0x4f&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;47, 79, 79&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkslategray;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkTurquoise&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0xce 0xd1&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 206, 209&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkturquoise;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DarkViolet&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x94 0x00 0xd3&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;148, 0, 211&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:darkviolet;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DeepPink&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x14 0x93&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 20, 147&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:deeppink;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DeepSkyBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0xbf 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 191, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:deepskyblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DimGray&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x69 0x69 0x69&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;105, 105, 105&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:dimgray;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;DodgerBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x1e 0x90 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;30, 144, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:dodgerblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;FireBrick&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xb2 0x22 0x22&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;178, 34, 34&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:firebrick;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;FloralWhite&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xfa 0xf0&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 250, 240&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:floralwhite;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;ForestGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x22 0x8b 0x22&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;34, 139, 34&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:forestgreen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Fuchsia&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x00 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 0, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:fuchsia;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Gainsboro&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xdc 0xdc 0xdc&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;220, 220, 220&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:gainsboro;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;GhostWhite&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf8 0xf8 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;248, 248, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:ghostwhite;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Gold&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xd7 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 215, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:gold;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Goldenrod&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xda 0xa5 0x20&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;218, 165, 32&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:goldenrod;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Gray&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x80 0x80 0x80&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;128, 128, 128&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:gray;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Green&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0x80 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 128, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:green;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;GreenYellow&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xad 0xff 0x2f&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;173, 255, 47&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:greenyellow;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;HoneyDew&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf0 0xff 0xf0&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;240, 255, 240&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:honeydew;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;HotPink&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x69 0xb4&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 105, 180&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:hotpink;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;IndianRed&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xcd 0x5c 0x5c&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;205, 92, 92&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:indianred;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Indigo&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x4b 0x00 0x82&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;75, 0, 130&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:indigo;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Ivory&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xff 0xf0&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 255, 240&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:ivory;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Khaki&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf0 0xe6 0x8c&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;240, 230, 140&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:khaki;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Lavender&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xe6 0xe6 0xfa&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;230, 230, 250&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lavender;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LavenderBlush&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xf0 0xf5&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 240, 245&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lavenderblush;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LawnGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x7c 0xfc 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;124, 252, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lawngreen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LemonChiffon&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xfa 0xcd&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 250, 205&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lemonchiffon;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xad 0xd8 0xe6&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;173, 216, 230&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightCoral&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf0 0x80 0x80&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;240, 128, 128&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightcoral;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightCyan&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xe0 0xff 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;224, 255, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightcyan;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightGoldenrodYellow&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xfa 0xfa 0xd2&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;250, 250, 210&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightgoldenrodyellow;">&nbsp;&nbsp;</td></tr>';




displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightGray&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xd3 0xd3 0xd3&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;211, 211, 211&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightgray;">&nbsp;&nbsp;</td></tr>';





displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x90 0xee 0x90&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;144, 238, 144&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightgreen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightPink&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xb6 0xc1&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 182, 193&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightpink;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightSalmon&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xa0 0x7a&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 160, 122&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightsalmon;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightSeaGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x20 0xb2 0xaa&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;32, 178, 170&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightseagreen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightSkyBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x87 0xce 0xfa&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;135, 206, 250&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightskyblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightSlateGray&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x77 0x88 0x99&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;119, 136, 153&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightslategray;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightSteelBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xb0 0xc4 0xde&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;176, 196, 222&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightsteelblue;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LightYellow&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xff 0xe0&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 255, 224&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lightyellow;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Lime&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0xff 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 255, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:lime;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;LimeGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x32 0xcd 0x32&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;50, 205, 50&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:limegreen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Linen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xfa 0xf0 0xe6&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;250, 240, 230&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:linen;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Magenta&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x00 0xff&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 0, 255&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:magenta;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Maroon&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x80 0x00 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;128, 0, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:maroon;">&nbsp;&nbsp;</td></tr>';

displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumAquamarine&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x66 0xcd 0xaa&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;102, 205, 170&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumaquamarine;">&nbsp;&nbsp;</td></tr>';




displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0x00 0xcd&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 0, 205&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumblue;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumOrchid&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xba 0x55 0xd3&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp186, 85, 211&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumorchid;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumPurple&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x93 0x70 0xd8&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;147, 112, 216&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumpurple;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumSeaGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x3c 0xb3 0x71&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;60, 179, 113&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumseagreen;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumSlateBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x7b 0x68 0xee&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;123, 104, 238&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumslateblue;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumSpringGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0xfa 0x9a&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 250, 154&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumspringgreen;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumTurquoise&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x48 0xd1 0xcc&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;72, 209, 204&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumturquoise;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MediumVioletRed&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xc7 0x15 0x85&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;199, 21, 133&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mediumvioletred;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MidnightBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x19 0x19 0x70&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;25, 25, 112&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:midnightblue;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MintCream&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf5 0xff 0xfa&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;245, 255, 250&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mintcream;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;MistyRose&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xe4 0xe1&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 228, 225&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:mistyrose;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Moccasin&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xe4 0xb5&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 228, 181&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:moccasin;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;NavajoWhite&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xde 0xad&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 222, 173&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:NavajoWhite;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Navy&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0x00 0x80&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 0, 128&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:navy;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;OldLace&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xfd 0xf5 0xe6&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;253, 245, 230&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:oldlace;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Olive&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x80 0x80 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;128, 128, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:olive;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;OliveDrab&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x6b 0x8e 0x23&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;107, 142, 35&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:olivedrab;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Orange&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xa5 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 165, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:orange;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;OrangeRed&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x45 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 69, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:orangered;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Orchid&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xda 0x70 0xd6&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;218, 112, 214&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:orchid;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;PaleGoldenrod&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xee 0xe8 0xaa&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;238, 232, 170&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:palegoldenrod;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;PaleGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x98 0xfb 0x98&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;152, 251, 152&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:palegreen;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;PaleTurquoise&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xaf 0xee 0xee&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;175, 238, 238&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:paleturquoise;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;PaleVioletRed&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xd8 0x70 0x93&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;216, 112, 147&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:palevioletred;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;PapayaWhip&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xef 0xd5&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 239, 213&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:papayawhip;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;PeachPuff&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xda 0xb9&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 218, 185&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:peachpuff;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Peru&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xcd 0x85 0x3f&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;205, 133, 63&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:peru;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Pink&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xc0 0xcb&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 192, 203&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:pink;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Plum&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xdd 0xa0 0xdd&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;221, 160, 221&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:plum;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;PowderBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xb0 0xe0 0xe6&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;176, 224, 230&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:powderblue;">&nbsp;&nbsp;</td></tr>';












displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Purple&nbsp;&nbsp;</span></td>.<td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x80 0x00 0x80&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;128, 0, 128&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:purple;">&nbsp;&nbsp;</td></tr>';




displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;RebeccaPurple&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x66 0x33 0x99&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;102, 51, 153&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:rebeccapurple;">&nbsp;&nbsp;</td></tr>';











displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Red&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x00 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 0, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:red;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;RosyBrown&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xbc 0x8f 0x8f&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;188, 143, 143&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:rosybrown;">&nbsp;&nbsp;</td></tr>';




displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;RoyalBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x41 0x69 0xe1&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;65, 105, 225&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:royalblue;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SaddleBrown&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x8b 0x45 0x13&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;139, 69, 19&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:saddlebrown;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Salmon&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xfa 0x80 0x72&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;250, 128, 114&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:salmon;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SandyBrown&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xf4 0xa4 0x60&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;244, 164, 96&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:sandybrown;">&nbsp;&nbsp;</td></tr>';





displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SeaGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x2e 0x8b 0x57&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;46, 139, 87&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:seagreen;">&nbsp;&nbsp;</td></tr>';




displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SeaShell&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xf5 0xee&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 245, 238&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:seashell;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Sienna&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xa0 0x52 0x2d&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;160, 82, 45&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:sienna;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Silver&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xc0 0xc0 0xc0&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;192, 192, 192&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:silver;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SkyBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x87 0xce 0xeb&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;135, 206, 235&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:skyblue;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SlateBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x6a 0x5a 0xcd&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;106, 90, 205&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:slateblue;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SlateGray&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x70 0x80 0x90&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;112, 128, 144&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:slategray;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Snow&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xfa 0xfa&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 250, 250&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:snow;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SpringGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0xff 0x7f&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 255, 127&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:springgreen;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;SteelBlue&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x46 0x82 0xb4&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;70, 130, 180&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:steelblue;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Tan&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xd2 0xb4 0x8c&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;210, 180, 140&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:tan;">&nbsp;&nbsp;</td></tr>';







displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Teal&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x00 0x80 0x80&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0, 128, 128&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:teal;">&nbsp;&nbsp;</td></tr>';



displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Thistle&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xd8 0xbf 0xd8&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;216, 191, 216&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:thistle;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Tomato&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0x63 0x47&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 99, 71&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:tomato;">&nbsp;&nbsp;</td></tr>';


displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Turquoise&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x40 0xe0 0xd0&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;64, 224, 208&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:turquoise;">&nbsp;&nbsp;</td></tr>';






displayStr = displayStr +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Violet&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>0xee 0x82 0xee</center></span></td><td><span style="font-size:10px;"><center>238, 130, 238</center></span></td><td style="color:black;background-color:violet;">&nbsp;&nbsp;</td></tr>';





















var displayStr2 = "";


displayStr2 = displayStr2 +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Wheat&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>0xf5 0xde 0xb3</center></span></td><td><span style="font-size:10px;"><center>245, 222, 179</center></span></td><td style="color:black;background-color:Wheat;">&nbsp;&nbsp;</td></tr>';




//  **************************
//   White has an error
//  **************************



displayStr2 = displayStr2 +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;White</span></td><td><span style="font-size:10px;"><center>0xff 0xff 0xff</center></span></td><td><span style="font-size:10px;"><center>255, 255, 255</center></span></td><td style="color:black;background-color:White;">&nbsp;&nbsp;</td></tr>';



//  White
//  <span style=
//  "font-size:10px;">0xff 0xff 0xff
//   </span>

//  <span style=
//  "font-size:10px;">255, 255, 255 
//  </span>










displayStr2 = displayStr2 +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;WhiteSmoke&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>0xf5 0xf5 0xf5</center></span></td><td><span style="font-size:10px;"><center>245, 245, 245</center></span></td><td style="color:black;background-color:Whitesmoke;">&nbsp;&nbsp;</td></tr>';


displayStr2 = displayStr2 +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;Yellow&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0xff 0xff 0x00&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;255, 255, 0&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:yellow;">&nbsp;&nbsp;</td></tr>';


displayStr2 = displayStr2 +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;YellowGreen&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;0x9a 0xcd 0x32&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;154, 205, 50&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:yellowgreen;">&nbsp;&nbsp;</td></tr>';


displayStr2 = displayStr2 +
'<tr><td><span style="font-size:10px;">&nbsp;&nbsp;&nbsp;&nbsp;</span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;&nbsp;&nbsp;</center></span></td><td><span style="font-size:10px;"><center>&nbsp;&nbsp;&nbsp;&nbsp;</center></span></td><td style="color:black;background-color:white;">&nbsp;&nbsp;</td></tr> ';














var displayStrEnd = "";

//  close the table
displayStrEnd = displayStrEnd +
'</table>' + '</center>'  + '<br>';

 
displayStrEnd = displayStrEnd +
'<center><span style="color:Navy;font-size:10px;"><b>Copyright &#169; 2020 - 2021. All rights reserved.</b></span></center><br><br>';


displayStrEnd = displayStrEnd +
'<br>'; 










   if (isFirefox) { 
           //   begin      Firefox 


if (isAndroid) {
           //   begin      Firefox under Android

//  alert("Firefox under Android");


var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=100, height=100, left=100 top=100");

newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);



           //   end     Firefox under Android
        } 

        if (isWin10) {
           //   begin      Firefox under Win10

  



           //   end        Firefox under Win10
        } 




           //   end        Firefox 
   } else if (isChrome) { 


        if (isAndroid) {
           //   begin    Chrome under Android

          //   alert("Chrome under Android");


var newWindow = 
window.open("", "ab872 - Color Table", "toolbar=no, status=no, scrollbars=yes width=100, height=100, left=100 top=100");


newWindow.document.write(displayStr);

newWindow.document.write(displayStr2);

newWindow.document.write(displayStrEnd);



           //   end       Chrome under Android
         } else {
           //   begin    Chrome others



             //   end     Chrome others
          }


           //   end        Chrome
   } else if (isSafari) { 






           //   end        Safari
   } else if (isEdge) { 



           //   end        Edge
   } else { 
//  begin      unidentified browser



      //  end       unidentified browser
   } 









   <!-- 
     -->

   //  alert("end     showColorTable");

   // end   function showColorTable
} 





//   *******************************************************

// 









