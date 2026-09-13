


using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.IO;


namespace webApp1.Pages_
{
    public class viewTCA4Model : PageModel
    {

        public long travelersCount { get; set; }
        public string? fileName { get; set; }

        public void OnGet()
        {
//            Console.WriteLine("***** viewKK Page viewKK was loaded.");

     //   fileName = "~/pdf/susanKK_apr2026.pdf";

//        fileName = "wwwroot/pdf/susanKK_apr2026.pdf";
//        Console.WriteLine("***** viewKK file = " + fileName);

        if (!System.IO.File.Exists(fileName))
        {
//            Console.WriteLine("***** viewKK The file was not found.");
        } 
        else 
        {
  //          Console.WriteLine("***** viewKK The file was found.");
        }


//        fileName = "~/pdf/susanKK_apr2026.pdf";
//        Console.WriteLine("***** viewKK file = " + fileName);

        if (!System.IO.File.Exists(fileName))
        {
//            Console.WriteLine("***** viewKK The file was not found.");
        } 
        else 
        {
  //          Console.WriteLine("***** viewKK The file was found.");
        }



           //   end   public void OnGet
        }

       //   public class viewTCA4Model
    }

   //   end   namespace webApp1.Pages_
}





