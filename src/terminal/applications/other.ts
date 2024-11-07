const porn = (print: (s: string, md?: boolean) => void) => {
  return {
    app: () => {
      print("\nDo you really want to watch porn on this tiny retro computer? [Y/N]");
      
      const handleInput = (input: string) => {
        if (input.toLowerCase() === "y") {
          print(`\n
            ( . Y . )
             )     (
            (       )

        You naughty naughty 
        Go somewhere else you loser`);
        } else if (input.toLowerCase() === "n") {
          print(`\n
        Good lord\nSome faith in humanity is restored
              +
             /_\\
            /-|-\\
           /--|--\\
              |
              +

        Bless you child`);
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