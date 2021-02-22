import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})
export class CountingComponent {
    count = 0;
    sum = '0';

    @Input()
    title: string;

    constructor() {}

    countNumber() {
        this.count = this.count + 1;
        this.sum = this.sum + ', ' + this.count.toString();
    }
}