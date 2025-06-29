using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Data.Sqlite;


namespace webApp1.Pages_
{

    class Globals
    {
        public static int clickCount;

        public static int currentLongtitude;
        public static int currentLattitude;

       //   end     class Globals
    }


    public class TravelersModel : PageModel
    {
        [BindProperty]
        public string? Message { get; set; }

        public int? currentLongtitude { get; set; }
        public int? currentLattitude { get; set; }


        public List<UserRecord> Users { get; set; } = new List<UserRecord>();

        public List<RestStopRecord> RestStops { get; set; } = new List<RestStopRecord>();


        public void OnGet()
        {

               //  before we try to access the database, we need to make sure it was copied to
               //  the correct location for the Azure App Service to find it.
               //  if we dont find the file, then copy it to the right location
               try {
                  Console.WriteLine("Copy database file to correct location for Azure App Service ...");


//                Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), 

                  var dbPath = Path.Combine(
                                      "site/", 
                                      "wwwroot/",
                                      "travelers.db");

                     Console.WriteLine($"Database should be at: {dbPath}");


                  if(!System.IO.File.Exists(dbPath))
                  {

                     Console.WriteLine($"File NOT found for database at path: {dbPath}");

                     var sourcePath = Path.Combine(
                                      "wwwroot/", 
                                      "travelers.db");

                     Console.WriteLine($"Source path to copy the database: {sourcePath}");

                     System.IO.File.Copy(sourcePath, dbPath);

                     //   end     !File.Exists(dbPath)
                  }
                  else
                  {
                     Console.WriteLine($"Database WAS found at path: {dbPath}");
                  }


                  //   end     try
               }
                catch (Exception e) 
                {
                   Console.WriteLine($"Azure App Service Copy Error: {e.Message}");

                   //   end     catch
                }


            string connectionString = "Data Source = wwwroot/travelers.db";
            Globals.clickCount = 0;

            Globals.currentLongtitude = 475;
            Globals.currentLattitude = 900;

            currentLongtitude = Globals.currentLongtitude;
            currentLattitude = Globals.currentLattitude;

            using (var connection = new SqliteConnection(connectionString))
            {
               connection.Open();

               try {
                 //   Console.WriteLine("enable FOREIGN KEYS");
               
                    var command = connection.CreateCommand();
                    command.CommandText = @"PRAGMA foreign_keys = ON";
                    command.ExecuteNonQuery();

               }
                catch (Exception e) 
                {
                   Console.WriteLine($"Foreign Key Error: {e.Message}");

                   //   end     catch
                }

//  *************************************************************
//  temporary   1234
//  works on the local machine, but not on the AZURE NGINX server
//  the SELECT never returns any data, although it's there
//  used the KUDU console to browse the files on the server.
//  theres a file at 
//               \home\site\wwwroot\travelers.db
//
//  but it appears to be an empty file
//  when SQLite tries to access the file but can't find it,
//  it creates the file. But it doesn't insert any data.
//
//  KUDU Console shows what appears to be an empty file.
//
//  Let's see if we can copy the file to
//              \wwwroot
//
//  and see if the SELECT returns any data
//  the push has started returning an error 500 (internal server error)
//  so I hope it will work.
//  
//  Azure Portal says the update was successful.
//  No change.
//  used the KUDU console to browse the files on the server.
//  theres a file at 
//               \home\site\wwwroot\travelers.db
//
//  but it appears to be an empty file
//
//  Ask ChatGPT.
//  ChatGPT says:
//
//  1. copy the file to \wwwroot
//         We already did this
//  2. change the connection string
//         Changed the connection string     ( in OnGet() and in OnPost(string action)   )
//     
//         Original in OnGet():    string connectionString = "Data Source = travelers.db";
//         New:                    string connectionString = "Data Source = wwwroot/travelers.db";
//         Original in OnPost():   string connectionString = "Data Source = travelers.db";
//         New:                    string connectionString = "Data Source = wwwroot/travelers.db";
//
//         remove the original travelers.db from the directory containing   webApp1.csproj
//         try to run the app on the local machine
//         Successful?  Yes.
//
//  3. Edit the .csproj file
//     Add the following so the file is copied when you do a Build or Publish and included when 
//     you deploy to the Azure App Service.
//
//         <ItemGroup>
//           <Content Include="wwwroot\travelers.db">
//             <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
//           </Content>
//         </ItemGroup>
//
//     Now <ItemGroup> looks like this:
//
//         <ItemGroup>
//           <PackageReference Include="Microsoft.Data.Sqlite" Version="9.0.6" />
//           <PackageReference Include="Microsoft.VisualStudio.Web.Codegeneration.Design" Version="7.0.9" />
//           <Content Include="wwwroot\travelers.db">
//             <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
//           </Content>
//         </ItemGroup>
//
//         try to run the app on the local machine
//         Successful.  No.
//
//         Error message:
//        
//                           : error NETSDK1022: Duplicate 'Content' items were included. 
//                           The .NET SDK includes 'Content' items from your project directory by default. 
//                           You can either remove these items from your project file, or set the 
//                           'EnableDefaultContentItems' property to 'false' if you want to explicitly include 
//                           them in your project file. For more information, see 
//                           https://aka.ms/sdkimplicititems. The duplicate items were: 
//                           'wwwroot\travelers.db' [...\webApp1.csproj]
//
//     OK. Remove the change from the .csproj file.
//     Now <ItemGroup> looks like this:
//
//         <ItemGroup>
//           <PackageReference Include="Microsoft.Data.Sqlite" Version="9.0.6" />
//           <PackageReference Include="Microsoft.VisualStudio.Web.Codegeneration.Design" Version="7.0.9" />
//         </ItemGroup>
//
//         try to run the app on the local machine
//         Successful.  Yes.
//
//     before we try to access the database, we need to make sure it was copied to
//     the correct location for the Azure App Service to find it.
//     if we dont find the file, then copy it to the right location.
//     Add code to OnGet() to copy the file if it doesnt exist in the right location.
//
//         try to run the app on the local machine
//         Successful?  No.
//
//     Error:
//     Copy database file to correct location for Azure App Service ...
//     Database should be at: site/wwwroot/travelers.db
//     File NOT found for database at path: site/wwwroot/travelers.db
//     Source path to copy the database: wwwroot/travelers.db
//     Azure App Service Copy Error: Could not find a part of the path 
//          'C:\........\site\wwwroot\travelers.db'.
//
//     This might be an error because Azure App Servicee doesn't lay things out the
//     same as on the local computer.
//     Let's upload what we have and see what happens on the server.
//
//  *************************************************************



               //   Query data from the table
               var selectCmd = connection.CreateCommand();
               selectCmd.CommandText = @"
                  SELECT a.restStop_id, a.restStopName, a.longtitude, a.lattitude, 
                     c.gas_status, d.diesel_status, e.food_status 
                     FROM REST_STOP a 
                     JOIN GAS c ON a.gas = c.gas_id
                     JOIN DIESEL d ON a.diesel = d.diesel_id
                     JOIN FOOD e ON a.food = e.food_id
                     WHERE longtitude BETWEEN $startLongtitude AND $endLongtitude GROUP BY 
                     restStopName ORDER BY restStop_id
               ";
               selectCmd.Parameters.AddWithValue("$startLongtitude", Globals.currentLongtitude - 10);
               selectCmd.Parameters.AddWithValue("$endLongtitude", Globals.currentLongtitude + 15);

               try {

                  using (var reader = selectCmd.ExecuteReader())
                  {

                     while (reader.Read())
                     {

                        RestStops.Add(new RestStopRecord()
                        {
                           restStop_id = reader.GetInt32(0),
                           restStop_name = reader.GetString(1),
                           longtitude = reader.GetInt32(2),
                           lattitude = reader.GetInt32(3),
                           gas = reader.GetString(4),
                           diesel = reader.GetString(5),
                           food = reader.GetString(6)

                           //   end     Users Add
                        });

                        //   end     while reader.Read
                     }
                      
                    //   end     using reader
                  }

                   //   end     try
                }
                catch (Exception e) 
                {
                   Console.WriteLine($"Travelers Error: {e.Message}");

                   //   end     catch
                }


               //   end   using connection
            }
         

           //   end     public void OnGet
        }



        public void OnPost(string action)
        {
           if (action == "gpsUpdateButton")
           {

              Globals.currentLongtitude += 5;

              if( Globals.currentLongtitude > 500 ) { 
                  Globals.currentLongtitude = 445; 
              } 

              currentLongtitude = Globals.currentLongtitude;
              currentLattitude = Globals.currentLattitude;


            string connectionString = "Data Source = wwwroot/travelers.db";

            using (var connection = new SqliteConnection(connectionString))
            {
               connection.Open();

               try {
                 //   Console.WriteLine("enble FOREIGN KEYS");
               
                    var command = connection.CreateCommand();
                    command.CommandText = @"PRAGMA foreign_keys = ON";
                    command.ExecuteNonQuery();

               }
                catch (Exception e) 
                {
                   Console.WriteLine($"Foreign Key Error 2: {e.Message}");

                   //   end     catch
                }





               //   Query data from the table
               var selectCmd2 = connection.CreateCommand();
               selectCmd2.CommandText = @"
                  SELECT a.restStop_id, a.restStopName, a.longtitude, a.lattitude, 
                     c.gas_status, d.diesel_status, e.food_status 
                     FROM REST_STOP a 
                     JOIN GAS c ON a.gas = c.gas_id
                     JOIN DIESEL d ON a.diesel = d.diesel_id
                     JOIN FOOD e ON a.food = e.food_id
                     WHERE longtitude BETWEEN $startLongtitude AND $endLongtitude GROUP BY 
                     restStopName ORDER BY restStop_id
               ";
               selectCmd2.Parameters.AddWithValue("$startLongtitude", Globals.currentLongtitude - 10);
               selectCmd2.Parameters.AddWithValue("$endLongtitude", Globals.currentLongtitude + 15);

               try {

                  using (var reader = selectCmd2.ExecuteReader())
                  {

                     while (reader.Read())
                     {

                        RestStops.Add(new RestStopRecord()
                        {
                           restStop_id = reader.GetInt32(0),
                           restStop_name = reader.GetString(1),
                           longtitude = reader.GetInt32(2),
                           lattitude = reader.GetInt32(3),
                           gas = reader.GetString(4),
                           diesel = reader.GetString(5),
                           food = reader.GetString(6)

                           //   end     Users Add
                        });

                        //   end     while reader.Read
                     }

                       
                    //   end     using reader
                  }

                   //   end     try
                }
                catch (Exception e) 
                {
                   Console.WriteLine($"Button Clicked Error: {e.Message}");

                   //   end     catch
                }


               //   end   using connection
            }
         

              //   end    action B!
           }


           //   end     public void OnPost
        }
           




           
        public string calculateDistance( int currentLong, 
                                         int currentLatt, 
                                         int targetLong, 
                                         int targetLatt )
        {

           int direction = 0;
               
           int legA = 0;
           int legB = 0;
           double legHypotenuse = 0;
               
           if ( targetLong > currentLong ) {
                direction = 1;
                legA = targetLong - currentLong;
                
                //  end    targetLong > currentLong
           }
           else if ( targetLong < currentLong ) 
           {
                direction = -1;
                legA = currentLong - targetLong;
           }
                   
               
           if ( targetLatt > currentLatt ) {
                legB = targetLatt - currentLatt;
                 
                //  end    targetLatt > currentLatt
           }
           else if ( targetLatt < currentLatt ) 
           {
                legB = currentLatt - targetLatt;
           }
              
           legHypotenuse = Math.Pow(legA, 2) + Math.Pow(legB, 2);
                
           legHypotenuse = Math.Sqrt(legHypotenuse);
               
                
           if ( direction < 0 ) {
              legHypotenuse = 0 - legHypotenuse;
           } else {

           }
                
            return legHypotenuse.ToString();

                
           // end   public string calculateDistance
        }

       

       //   end     class
    }




  
    public class UserRecord
    {
       public int id {get; set;}
       public string name {get; set;}
       public int age {get; set;}

       //   end     class UserRecord
    }

    public class GasRecord
    {
       public int gas_id {get; set;}
       public string gas_status {get; set;}

       //   end     class Gas
    }

    public class DieselRecord
    {
       public int diesel_id {get; set;}
       public string diesel_status {get; set;}

       //   end     class Diesel
    }

    public class FoodRecord
    {
       public int food_id {get; set;}
       public string food_status {get; set;}

       //   end     class Food
    }

    public class RestStopRecord
    {
       public int restStop_id {get; set;}
       public string restStop_name {get; set;}
       public int longtitude {get; set;}
       public int lattitude {get; set;}
       public string gas {get; set;}
       public string diesel {get; set;}
       public string food {get; set;}

       //   end     class Rest_Stop
    }

   //   end   namespace
}
