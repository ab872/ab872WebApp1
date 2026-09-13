
using Microsoft.AspNetCore.StaticFiles;

// Configure custom provider for PDF.js static assets
var provider = new FileExtensionContentTypeProvider();
provider.Mappings[".mjs"] = "application/javascript";
provider.Mappings[".ftl"] = "application/octet-stream"; // Add support for .ftl files


var builder = WebApplication.CreateBuilder(args);


//  Register the controller services
//  builder.Services.AddControllers(); // Use .AddControllersWithViews(); for MVC layouts

builder.Services.AddControllersWithViews();

// Add services to the container.
  builder.Services.AddRazorPages();


var app = builder.Build();

// Map the endpoints
//  app.MapControllers(); // Required for attribute routing ([Route])
//  app.MapControllerRoute(...) // Required instead if using pattern-based MVC routing

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Document}/{action=Index}/{id?}");

  app.MapRazorPages();




// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = provider
});



app.UseRouting();

app.UseAuthorization();


app.Run();
