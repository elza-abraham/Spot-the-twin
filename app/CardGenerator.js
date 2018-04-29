const createCards = (wordArray) => {
  return [
    [
      wordArray[0], wordArray[1], wordArray[2], wordArray[9]],
      [wordArray[9], wordArray[3], wordArray[4], wordArray[5]],
       [wordArray[8], wordArray[9], wordArray[6], wordArray[7]],
        [wordArray[0], wordArray[10], wordArray[3], wordArray[6]],
         [wordArray[1], wordArray[10], wordArray[4], wordArray[7]],
          [wordArray[8], wordArray[2], wordArray[10], wordArray[5]],
           [wordArray[0], wordArray[8], wordArray[11], wordArray[4]],
            [wordArray[1], wordArray[11], wordArray[5], wordArray[6]],
             [wordArray[11], wordArray[2], wordArray[3], wordArray[7]],
              [wordArray[0], wordArray[12], wordArray[5], wordArray[7]],
               [wordArray[8], wordArray[1], wordArray[3], wordArray[12]],
                [wordArray[12], wordArray[2], wordArray[4], wordArray[6]],
                 [wordArray[9], wordArray[10], wordArray[11], wordArray[12]]
  ]
}

export default createCards
