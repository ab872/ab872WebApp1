using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Data.Sqlite;


namespace webApp1.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
    }


    public long idxCount { get; set; }


    public void OnGet()
    {

               //  before we try to access the database, we need to make sure it was copied to
               //  the correct location for the Azure App Service to find it.
               //  if we dont find the file, then copy it to the right location
               try {
                  Console.WriteLine("****************************************************************");
//                  Console.WriteLine("Copy database file to correct location for Azure App Service ...");


//                Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), 

                  var dbPath = Path.Combine(
                                      "site/", 
                                      "wwwroot/",
                                      "pageCount.db");

//                     Console.WriteLine($"Database should be at: {dbPath}");


                  if(!System.IO.File.Exists(dbPath))
                  {

Console.WriteLine($"File NOT found for database at path: {dbPath}. Copying file to correct location ...");

                     var sourcePath = Path.Combine(
                                      "wwwroot/", 
                                      "pageCount.db");

//                     Console.WriteLine($"Source path to copy the database: {sourcePath}");

                     System.IO.File.Copy(sourcePath, dbPath);

                     //   end     !File.Exists(dbPath)
                  }
                  else
                  {
//                     Console.WriteLine($"Database WAS found at path: {dbPath}");
                  }


                  //   end     try
               }
                catch (Exception e) 
                {
                   Console.WriteLine($"Azure App Service Copy Error: {e.Message}");

                   //   end     catch
                }


// copy completed - begin accessing the database



            string connectionString = "Data Source = wwwroot/pageCount.db";
 
            using (var connection = new SqliteConnection(connectionString))
            {
               connection.Open();

//               Console.WriteLine("Access database ...");

              
               try {
//                    Console.WriteLine("enable FOREIGN KEYS");
               
                    var command = connection.CreateCommand();
                    command.CommandText = @"PRAGMA foreign_keys = ON";
                    command.ExecuteNonQuery();
                   
               }
               catch (Exception e) 
               {
                   Console.WriteLine($"Foreign Key Error: {e.Message}");
                      
                   //   end     catch
               }
            

               try {
//                    Console.WriteLine("create table for this page ...");
               
                    var command = connection.CreateCommand();
                    command.CommandText = 
@"CREATE TABLE IF NOT EXISTS idxCOUNTER ( Id INTEGER PRIMARY KEY CHECK (Id = 1), Count INTEGER NOT NULL);";

                    command.ExecuteNonQuery();
                   
               }
               catch (Exception e) 
               {
                   Console.WriteLine($"Error creating the counter table: {e.Message}");
                      
                   //   end     catch
               }
   


               try {
//                    Console.WriteLine("update counter for this page ...");
               
                    var command = connection.CreateCommand();
                    command.CommandText = 
@"INSERT INTO idxCounter (Id, Count) VALUES (1, 1) ON CONFLICT(ID) DO UPDATE SET Count = Count + 1 RETURNING Count;";

                    idxCount = Convert.ToInt64(command.ExecuteScalar());
                 //   idxCount = Convert.ToInt64(idxCount);

//                    Console.WriteLine("This page has been loaded " + idxCount + " times.");

                   
               }
               catch (Exception e) 
               {
                   Console.WriteLine($"Error updating counter for this page: {e.Message}");
                      
                   //   end     catch
               }
   

               //   end using           
            }


       //   end     void OnGet()
    }

   //   end     class IndexModel
}

