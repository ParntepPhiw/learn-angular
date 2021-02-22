import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
    @Input()
    title: string;

    
    constructor() {}

    
}