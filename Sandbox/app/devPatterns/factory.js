var createCharacter = function (_a) {
    var name = _a.name, age = _a.age, dead = _a.dead;
    return ({
        name: name,
        age: age,
        isDead: function () {
            return dead;
        }
    });
};
var char1 = createCharacter({ name: "Jack Reacher", age: 45, dead: false });
console.log(char1);
console.log(char1.isDead());
