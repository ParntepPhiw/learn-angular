import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-searchBar1',
    templateUrl: './searchBar1.component.html',
    styleUrls: ['./searchBar1.component.css']
})
export class SearchBar1Component {
    @Input()
    title: string;

    
    constructor() {}

    
}