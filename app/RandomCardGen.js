randomCards = () => {
  let newArr = this.shuffleCardArray()
  return [newArr[0], newArr[1]]
}

shuffleCardArray = () => {
  const arrayToShuffle = this.state.cardArr;
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
  }
  return arrayToShuffle;
}
