import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-navBar1',
    templateUrl: './navBar1.component.html',
    styleUrls: ['./navBar1.component.css']
})
export class NavBar1Component {
    @Input()
    title: string;

    constructor() {}

    
}