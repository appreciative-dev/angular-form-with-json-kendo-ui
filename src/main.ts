import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'web-animations-js';
import '@angular/localize/init';
import 'zone.js';

platformBrowserDynamic()
  .bootstrapModule(AppModule, { preserveWhitespaces: true })
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherise, log the boot error
  })
  .catch((err) => console.error(err));
