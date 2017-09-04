import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-nav',
    templateUrl: './product-nav.component.html',
    styleUrls: ['./home.component.scss']
})

export class ProductNavComponent implements OnInit {

    title = 'Good';
    actor = {
        name:'abc',
        age:'32'
    }

    constructor() { }

    ngOnInit() {
    }
}
