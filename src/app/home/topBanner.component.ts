import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-topBanner',
    templateUrl: './topBanner.component.html',
    styleUrls: ['./topBanner.component.css']
})
export class TopBannerComponent {
    @Input()
    title: string;

    
    constructor() {}

    
}