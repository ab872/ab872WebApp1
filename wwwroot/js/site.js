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


















