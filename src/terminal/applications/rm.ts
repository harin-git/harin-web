import { FileSystemType } from "../fileSystemBash";

const rm = (print: (s: string, md?: boolean) => void, path: FileSystemType) => {
  return {
    app: (args: string[], options: string[]) => {
      if (options.includes('-rf') || options.includes('-r') || options.includes('-f')) {
        // Simulate system wipe with increasing chaos
        const messages = [
          "\nWARNING: System deletion initiated...",
          "\nDeleting /data/Volume1...",
          "\nDeleting /data/Volume2...",
          "\nDeleting /usr...",
          "\nDeleting /bin...",
          "\nDeleting /etc...",
          "\nCritical system files compromised...",
          "\n/̴̢̨̦͎͈͚͚̩͍̲̲̰͎̤̎̊́̈́̈́̈͊̈́̈́̕͝s̷̛͚̦̣͇̫̩͖̫̫͇̰̩̈́̓̈́̈́̈́̈́̈́̈́̈́̈́̈́y̴̢̨̦͎͈͚͚̩͍̲̲̰͎̤̎̊́̈́̈́̈͊̈́̈́̕͝s̷̛͚̦...",
          "\nKernel p̴̢̨̦͎a̴̢̨̦n̴̢̨̦i̴̢̨̦c̴̢̨̦",
          "\n\nFATAL ERROR: SYSTEM HALTED"
        ];

        let index = 0;
        const interval = setInterval(() => {
          if (index < messages.length) {
            print(messages[index]);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 500);

      } else {
        print("\nMissing required flags. Use -rf for recursive force delete.");
      }
    },
    docs: {
      name: "rm",
      short: "remove files or directories",
      long: "Use with caution - removes files and directories",
    },
  };
};

export default rm; 