const movies = [
  {
    title: `The Godfather`,
    year: 1972,
    director: `Francis Ford Coppola`,
  }, {
    title: `The Shawshank Redemption`,
    year: 1994,
    director: `Frank Darabont`,
  }, {
    title: `Schindler's List`,
    year: 1993,
    director: `Steven Spielberg`,
  }, {
    title: `Raging Bull`,
    year: 1980,
    director: `Martin Scorsese`,
  }, {
    title: `Casablanca`,
    year: 1942,
    director: `Michael Curtiz`,
  }, {
    title: `Citizen Kane`,
    year: 1941,
    director: `Orson Welles`,
  }, {
    title: `Gone with the Wind`,
    year: 1939,
    director: `Victor Fleming`,
  }, {
    title: `The Wizard of Oz`,
    year: 1939,
    director: `Victor Fleming`,
  }, {
    title: `One Flew Over the Cuckoo's Nest`,
    year: 1975,
    director: `Milos Forman`,
  }, {
    title: `Lawrence of Arabia`,
    year: 1962,
    director: `David Lean`,
  },
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const parseMovieData = movie => {
  let result = ``;
  for (const prop in movie) {
    result += wrapWithTag(movie[prop], `p`);
  }
  return result;
};

const orderByYear = (a, b) => {
  return a.year - b.year;
};

console.log(a.year)

const createList = movies => {
  return `<ul>${movies
    .sort(orderByYear)
    .map(movie => wrapWithTag(parseMovieData(movie), `li`))
    .join(``)
  }</ul>`;
};

console.table(movies);
document.write(createList(movies));
console.table(movies);
