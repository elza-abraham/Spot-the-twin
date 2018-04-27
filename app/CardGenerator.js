const createCards = (words) => {
  return [
    [
      words[0], words[1], words[2], words[9]],
      [words[9], words[3], words[4], words[5]],
       [words[8], words[9], words[6], words[7]],
        [words[0], words[10], words[3], words[6]],
         [words[1], words[10], words[4], words[7]],
          [words[8], words[2], words[10], words[5]],
           [words[0], words[8], words[11], words[4]],
            [words[1], words[11], words[5], words[6]],
             [words[11], words[2], words[3], words[7]],
              [words[0], words[12], words[5], words[7]],
               [words[8], words[1], words[3], words[12]],
                [words[12], words[2], words[4], words[6]],
                 [words[9], words[10], words[11], words[12]]
  ]
}

export default createCards
