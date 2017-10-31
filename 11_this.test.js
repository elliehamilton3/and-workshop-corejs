it('should print the name of the person objects', () => {
  const getName = function() {
    return this.name;
  };

  const john = { name: 'John' };
  var getNameBind = getName.bind(john);

  expect(getNameBind()).toBe('John'); // USE bind https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
  expect(getName.call(john)).toEqual('John'); // USE call https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
  expect(getName.apply(john)).toEqual('John'); // USE apply https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
});

it('should print the name of the person objects', () => {
  function Person(name, age, isFine) {
    this.name = name;
    this.age = age;
    this.isFineB = isFine;
  }

  var isFineA = function isFine(){
    return true;
  }

  const john = new Person('John', 28, isFineA);


  expect(john.age).toBe(28);
  expect(john.name).toEqual('John');
  expect(john.isFineB()).toBe(true);
});

it('should return the maximum number in an array', () => {
  //don't google it, try it first! hint: use apply and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  const numbers = [1, 99, 34, 1000, 123];

  expect(Math.max.apply(null, numbers)).toBe(1000);
});

it('should return the average number in an array', () => {
  const leaderBoard = {
    scores: [900, 845, 809, 950],
    avgScore: null,
    avg: function() {
      let sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
        return prev + cur;
      });
      this.avgScore = sumOfScores / this.scores.length;
    }
  };

  const anotherleaderBoard = {
    scores: [8, 10, 8, 9, 10, 9],
    avgScore: null
  };

  // anotherleaderBoard.avg = leaderBoard.avg;
  // anotherleaderBoard.avg();
  leaderBoard.avg.apply(anotherleaderBoard);

  expect(anotherleaderBoard.avgScore).toBe(9);
});
