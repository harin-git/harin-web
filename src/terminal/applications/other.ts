const porn = (print: (s: string, md?: boolean) => void) => {
  return {
    app: () => {
      print("\nDo you really want to watch porn on this tiny retro computer? [Y/N]");
      
      const handleInput = (input: string) => {
        if (input.toLowerCase() === "y") {
          print("\nYou naughty naughty\nGo somewhere else you loser");
        } else if (input.toLowerCase() === "n") {
          print("\nGood lord\nSome faith in humanity is restored");
        }
      };

      return handleInput;
    },
    docs: {
      name: "porn",
      short: "don't even try it",
    },
  };
};

export default porn; 