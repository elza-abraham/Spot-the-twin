const shuffleCardArray = (cardArr) => {
  for (let i = cardArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardArr[i], cardArr[j]] = [cardArr[j], cardArr[i]];
  }
  return cardArr;
}
const randomCards = (cardArr) => {
  let newArr = shuffleCardArray(cardArr)
  return [newArr[0], newArr[6]]
}


export default randomCards
