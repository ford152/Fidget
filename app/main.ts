// main entry point

//Just in time compiler 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


//The other option is to use the ahead of time compiler
//Produces smaller app that launches faster for mobile and slow networks
/*
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
*/
