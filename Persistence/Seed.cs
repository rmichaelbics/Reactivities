using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence {
    public class Seed {
        public static async Task SeedData (DataContext context) {
            if (context.Activities.Any ()) return;

            var activities = new List<Activity> {
                new Activity {
                Title = "Task Activity 1",
                Date = DateTime.Now.AddMonths (-2),
                Description = "Activity 2 months ago",
                City = "Chennai",
                Category = "Dance Program",
                Venue = "Anna Sali"
                },
                new Activity {
                Title = "Task Activity 2",
                Date = DateTime.Now.AddMonths (-1),
                Description = "Activity 1 months ago",
                City = "Chennai",
                Category = "IT Program",
                Venue = "Palavakkam"
                }
            };

            await context.Activities.AddRangeAsync (activities);
            await context.SaveChangesAsync ();
        }
    }
}