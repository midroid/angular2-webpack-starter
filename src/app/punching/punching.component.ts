import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {PunchingMainComponent} from './main/punching-main.component';

@Component({
    templateUrl: 'src/app/punching/punching.html',
    directives: [RouterOutlet]
})
@RouteConfig([
    {path: '/main', name: 'Main', component: PunchingMainComponent, useAsDefault: true}
])
export class PunchingComponent { }
