import { FileSystemType } from "../fileSystemBash";

const MUSIC_SERVICES = {
'1': {
    name: 'Deezer',
    url: 'https://www.deezer.com/en/album/437597977'
  },
  '2': {
    name: 'Spotify',
    url: 'https://open.spotify.com/album/2BUL6IneY4Tx9gpRvNwOYM'
  },
  '3': {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/album/youth/1683998057'
  },
  '4': {
    name: 'Youtube Music',
    url: 'https://music.youtube.com/playlist?list=OLAK5uy_ln2QAQ-XArGbe4ZiYborPVjY_S7yAsh_U'
  }
} as const;

type MusicServiceKey = keyof typeof MUSIC_SERVICES;

const play = (print: (s: string, md?: boolean) => void, path: FileSystemType) => {
  return {
    app: (args: string[], options: string[]) => {
      const selection = args[0];

      if (!selection) {
        print('\nPlease select your music service:');
        print('\n[1] Deezer');
        print('\n[2] Spotify');
        print('\n[3] Apple Music');
        print('\n[4] Youtube Music');
        print('\nUsage: play <number>');
        return;
      }

      if (selection in MUSIC_SERVICES) {
        const service = MUSIC_SERVICES[selection as MusicServiceKey];
        window.open(service.url, '_blank');
        print(`\nOpening ${service.name}...`, false);
      } else {
        print('\nInvalid selection. \nPlease choose a number between 1 and 4.', false);
      }
    },
    docs: {
      name: "play",
      short: "open preferred music streaming service",
      description: "Select and open a music streaming service in a new browser tab",
      usage: "play <number>",
    },
  };
};

export default play; 