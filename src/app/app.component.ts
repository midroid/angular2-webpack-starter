import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PunchingComponent} from './punching/punching.component';
import {View} from 'angular2/core';

@Component({
    selector: 'kt-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'src/app/app.component.html'
})
@RouteConfig([
    {path: '/', redirectTo: ['Punching']},
    {path: '/Punching/...', name: 'Punching', component: PunchingComponent, useAsDefault: true},
    {path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent}
])
export class AppComponent { }
