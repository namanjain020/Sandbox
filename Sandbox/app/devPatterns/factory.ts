type character = {
    name: string,
    age: number,
    dead: boolean
}
const createCharacter = ({ name, age, dead }: character) => ({
    name,
    age,
    isDead() {
        return dead;
    }
});

const char1 = createCharacter({ name: "Jack Reacher", age: 45, dead: false });
console.log(char1);
console.log(char1.isDead());


const a=10;
const b=10;
function add(){
    return a+b;
}