import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-navBar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css']
})
export class NavBarComponent {
    @Input()
    title: string;

    
    constructor() {}

    
}