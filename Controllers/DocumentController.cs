
using Microsoft.AspNetCore.Hosting;
//  using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.IO;

namespace webApp1.Controllers
{

   public class DocumentController : Controller
   {

       //  *********************
       //  temporary

  //     private readonly ILogger<DocumentController> _logger;

       //  end temporary
       //  *********************


       private readonly IWebHostEnvironment _env;



       //  *********************
       //  temporary

       public DocumentController(ILogger<DocumentController> logger, IWebHostEnvironment env)
       {
  //         _logger = logger;
  //         _logger.LogInformation("DocumentController CONSTRUCTOR called");

//           Console.WriteLine("***** DocumentController CONSTRUCTOR called ...");


           _env = env;
       }
       //  end temporary
       //  *********************


   //    public DocumentController(IWebHostEnvironment env)
   //    {
   //        _env = env;
   //    }
 
       [HttpGet]
       public IActionResult GetPdf(string fileName)
       {
//           _logger.LogInformation("DocumentController GetPDF called ...");
 
//           Console.WriteLine("***** DocumentController called GetPDF ...");


           // Path to where your PDFs are stored securely
           //     string filePath = Path.Combine(_env.ContentRootPath, "SecureStorage", fileName);

           string filePath = Path.Combine(
               _env.WebRootPath,
               "pdf",
               fileName);

//           _logger.LogInformation("DocumentController GetPDF called ...");

//           Console.WriteLine("***** DocumentController GetPDF    file = " + filePath);



           if (!System.IO.File.Exists(filePath))
           {

//               _logger.LogInformation("GetPDF    The file was not found.");

//               Console.WriteLine("***** DocumentController GetPDF    The file was not found.");

               return NotFound();
           } 
           else 
           {

//               _logger.LogInformation("GetPDF    The file was found.");

//               Console.WriteLine("***** DocumentController GetPDF    The file was found.");
           }


           var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
        
//           _logger.LogInformation("GetPDF    return the filestream.");
 
//           Console.WriteLine("***** DocumentController GetPDF    return the filestream.");

           // "application/pdf" forces the browser to treat it as a PDF
           return File(fileStream, "application/pdf");

          //  public IActionResult GetPdf
       }

        [HttpGet]
        public IActionResult Index()
        {
            return Ok();
        }

        [HttpGet]
        public IActionResult Details()
        {
            return Ok();
        }

        [HttpGet]
        public IActionResult List()
        {
            return Ok();
        }

   //  end public class DocumentController
   }


   //   end   namespace 
}


