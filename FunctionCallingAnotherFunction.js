function cutFruitPieces(fruit){
    return fruit*4;
}
function FruitProcessor(apple,oranges){
    const applePieces=cutFruitPieces(apple);
    const orangesPieces=cutFruitPieces(oranges);
    const juice =`Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
        return juice ;     
}
FruitProcessor(2,3);
console.log(FruitProcessor(2,3));