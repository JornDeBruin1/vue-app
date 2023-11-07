import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jorndebruin.app',
  appName: 'Vue Memories',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
