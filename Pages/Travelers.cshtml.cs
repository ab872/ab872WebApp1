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

            string connectionString = "Data Source = travelers.db";
            Globals.clickCount = 0;

            Globals.currentLongtitude = 475;
            Globals.currentLattitude = 900;

            currentLongtitude = Globals.currentLongtitude;
            currentLattitude = Globals.currentLattitude;

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
                   Console.WriteLine($"Foreign Key Error: {e.Message}");

                   //   end     catch
                }

//  *************************************************************
//  temporary    1234 1234
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
//  Let's see if we can copy the file to
//              \wwwroot
//
//  and see if the SELECT returns any data
//  the push has started returning an error 500 (internal server error)
//  so I hope it will work.
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


            string connectionString = "Data Source = travelers.db";

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
