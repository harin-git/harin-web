import FileSystemBash from "./fileSystemBash";
import Applications from "./applications";

type Cmd = {
  docs: {
    name: string;
    short: string;
    long: string;
  };
  cmd: (self: Cmd, args: string[], options: string[]) => void;
};

export default function Bash(print: (s: string, md?: boolean) => void) {
  const fileSystem = FileSystemBash();
  let path = { p: fileSystem.goHome() };

  const getApp = Applications(print, path);

  function splitArgs(a: string[]) {
    const args: string[] = [];
    const options: string[] = [];

    a.forEach((v) => {
      if (v === "") return;

      if (v.charAt(0) === "-") {
        options.push(v);
        return;
      }

      args.push(v);
    });

    return [args, options];
  }

  function cmdNotFound(cmdName: string) {
    print(`\n${cmdName}:command not found`);
  }

  function prompt() {
    let out = "";
    for (let i = 0; i < path.p.length; i++) {
      out += path.p[i].name;
      if (i !== 0 && i < path.p.length - 1) out += "/";
    }
    out = out.replace(/^\/home\/user/, "~");
    if (out !== "~") out += " ";
    print(`\nuser:${out}$`);
  }

  let currentInputHandler: ((input: string) => void) | null = null;

  function input(cmd: string) {
    // If we have an active input handler, use it instead of processing as a command
    if (currentInputHandler) {
      currentInputHandler(cmd);
      currentInputHandler = null;
      prompt();
      return;
    }

    cmd = cmd.replaceAll(/\s+/g, " ");
    const cmdSplit = cmd.split(" ");
    const cmdName = cmdSplit[0];
    const cmdArgs: string[] = cmdSplit.slice(1);

    if (cmd) {
      const app = getApp(cmdName);
      if (app) {
        const [args, options] = splitArgs(cmdArgs);
        const handler = app(args, options);
        if (typeof handler === 'function') {
          currentInputHandler = handler;
          return; // Don't show prompt yet, wait for input
        }
      } else cmdNotFound(cmdName);
    }

    prompt();
  }

  return { input };
}
