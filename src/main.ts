import Aurelia, { StyleConfiguration, RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';

Aurelia
    .register(
        // StyleConfiguration.shadowDOM(),
        RouterConfiguration
    )
    .app(MyApp)
    .start();
