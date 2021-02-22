import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-categoryMenu1',
    templateUrl: './categoryMenu1.component.html',
    styleUrls: ['./categoryMenu1.component.css']
})
export class CategoryMenu1Component {
    @Input()
    title: string;

    
    constructor() {}

    
}