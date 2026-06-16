using LinqCourse;

var games = new List<Game>
{
    new Game { Title = "The Legend of Zelda", Genre = "RPG", ReleaseYear = 1986, Rating = 9.5, Price = 21 },
    new Game { Title = "Super Mario Bros.", Genre = "Puzzle", ReleaseYear = 1985, Rating = 9.2, Price = 53 },
    new Game { Title = "Elden Ring", Genre = "Puzzle", ReleaseYear = 2022, Rating = 9.8, Price = 50 },
    new Game { Title = "Stardew Valley", Genre = "RPG", ReleaseYear = 2016, Rating = 9.0, Price = 17 },
    new Game { Title = "Tetris", Genre = "Puzzle", ReleaseYear = 1984, Rating = 8.9, Price = 10 }
};

//var allGameTitles = games.Select(game => game.Title);

//foreach (var title in allGameTitles)
//{
//    Console.WriteLine(title);
//}

//var rpgGames = games.Where(game => game.Genre == "RPG");

//foreach (var game in rpgGames)
//{
//    Console.WriteLine(game.Title);
//}

//var modernGamesExist = games.Any(game => game.ReleaseYear > 2022);
//Console.WriteLine($"Are there any modern games? {modernGamesExist}");

//var sortedByYear = games.OrderBy(g => g.ReleaseYear);
//foreach (var game in sortedByYear)
//{
//    Console.WriteLine($"{game.Title} {game.ReleaseYear}");
//}

//var averagePrice = games.Average(g => g.Price);
//Console.WriteLine($"Average Game Price: {averagePrice}");

//var highestRating = games.Max(g => g.Rating);
//var bestGame = games.First(g => g.Rating == highestRating);
//Console.WriteLine($"Best Game: {bestGame.Title} {bestGame.Rating}");

//var gamesByGroup = games.GroupBy(g => g.Genre);
//foreach (var group in gamesByGroup)
//{
//    Console.WriteLine($"Genre: {group.Key}");

//    foreach (var game in group)
//    {
//        Console.WriteLine(game.Title);
//    }
//}

//var budgetAdventureGames = games
//    .Where(g => g.Genre == "RPG" && g.Price <= 60)
//    .OrderByDescending(g => g.Rating)
//    .Select(g => $"{g.Title} - {g.Price} - {g.Rating}");

//foreach (var game in budgetAdventureGames)
//    Console.WriteLine(game);

//var paginatedGames = games.Skip(2).Take(3);
//foreach (var game in paginatedGames)
//    Console.WriteLine(game.Title);

//var adventureGames = games.Where(g => g.Genre == "Puzzle");

//var adventureGamesQuery = from g in games
//                          where g.Genre == "Puzzle"
//                          select g;

//foreach (var game in adventureGamesQuery)
//    Console.WriteLine(game.Title);

//var cheapestGame = games.OrderBy(g => g.Price).First();
//Console.WriteLine($"{cheapestGame.Title} - {cheapestGame.Price} - {cheapestGame.Rating}");

//var genres = games.Select(g => g.Genre).Distinct();
//foreach (var genre in genres)
//    Console.WriteLine(genre);

Console.ReadLine();