function FilmName(name) {
  this.name = name;
}

FilmName.prototype.printInfo = function() {
        console.log('Animated Film Greats: ' + this.name);
      };

var phrases = [
    'Chicken Run', 
    'Fantastic Mr Fox',
    'Despicable Me', 
    'How to Train Your Dragon', 
    'My Life as a Zucchini',
    'Fantasia',
    'Kubo and the Two Strings',
    'Snow White and the Seven Dwarfs',
    'Spirited Away',
    'The Lion King',
    'Chicken Run',
    'The Incredibles',
    'The Iron Giant',
    'Persepolis',
    'Wallace and Gromit',
    'Who Framed Roger Rabbit',
    'Kung Fu Panda',
    'Wreck It Ralf',
    'Princess Mononoke',
    'Finding Nemo',
    'The Triplets of Belleville',
    'The Nightmare Before Christmas',
    'Shrek',
    'The Lego Movie',
    'Coraline',
    'Toy Story',
    'My Neighbor Totoro'
];

var filmList = new FilmName(phrases);

// filmList.printInfo();

module.exports = phrases;