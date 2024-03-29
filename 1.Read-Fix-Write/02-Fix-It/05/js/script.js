const shows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const writeTitle = title => {
  let newTitle = uCFirst(title);
  document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {
  let words = sentence.split(0);
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join();
};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);
