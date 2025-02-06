using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.SwaggerGen;
using TodoApi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ToDoDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("ToDoDB"),
    ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("ToDoDB"))));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

// הוספת Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// הפעלת CORS
app.UseCors("AllowAll");

// הפעלת Swagger (רק בסביבת פיתוח)
// if (app.Environment.IsDevelopment())
// {
    app.UseSwagger(); // אפשר את Swagger
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDo API V1");  // Swagger יטעין את ה-JSON
        c.RoutePrefix = string.Empty;  // אם תרצה לפתוח את Swagger UI ב-root (למשל: http://localhost:5204/ במקום http://localhost:5204/swagger)
    });
// }

// הגדרת API Endpoints
app.MapGet("/items", async (ToDoDbContext db) =>
    await db.Items.ToListAsync());

app.MapPost("/items", async (Item item, ToDoDbContext db) =>
{
    db.Items.Add(item);
    await db.SaveChangesAsync();
    return Results.Created($"/items/{item.Id}", item);
});

app.MapPut("/items/{id}", async (int id, Item inputItem, ToDoDbContext db) =>
{
    var item = await db.Items.FindAsync(id);
    if (item is null) return Results.NotFound();

    item.IsComplete = inputItem.IsComplete;

    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapDelete("/items/{id}", async (int id, ToDoDbContext db) =>
{
    var item = await db.Items.FindAsync(id);
    if (item is null) return Results.NotFound();

    db.Items.Remove(item);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();

