import * as dotenv from 'dotenv';
dotenv.config();
// console.ts - example of entrypoint
import { BootstrapConsole } from 'nestjs-console';
import { AppModules } from 'src/app.module';

const bootstrap = new BootstrapConsole({
  module: AppModules,
  useDecorators: true,
});
bootstrap.init().then(async (app) => {
  try {
    
    await app.init();
    await bootstrap.boot();
  } catch (e) {
    console.error(e);
    await app.close();
    process.exit(1);
  }
});
