import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-categoryMenu',
    templateUrl: './categoryMenu.component.html',
    styleUrls: ['./categoryMenu.component.css']
})
export class CategoryMenuComponent {
    @Input()
    title: string;

        constructor() {}

    
}