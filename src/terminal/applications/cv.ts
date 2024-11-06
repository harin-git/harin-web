import { FileSystemType } from "../fileSystemBash";

const cv = (print: (s: string, md?: boolean) => void, path: FileSystemType) => {
  return {
    app: (args: string[], options: string[]) => {
      window.open('src/cv/cv.pdf', '_blank');
      print('\nOpening PDF version of CV in a new tab...', false);
    },
    docs: {
      name: "cv",
      short: "opens my CV in a new tab",
      description: "Opens my CV/resume in a new browser tab",
      usage: "cv",
    },
  };
};

export default cv;