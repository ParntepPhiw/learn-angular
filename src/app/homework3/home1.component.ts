import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-home1',
    templateUrl: './home1.component.html',
    styleUrls: ['./home1.component.css']
})
export class Home1Component {
    @Input()
    title1: string;

    
    constructor() {}

    
}