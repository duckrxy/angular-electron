import { Component, OnInit } from '@angular/core';
import * as mockData from "./product.mock";
import { Actress, ProductDetail } from "./product";

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./home.component.scss']
})

export class ProductDetailComponent implements OnInit {

    constructor() { }

    actress: Actress;
    productDetail: ProductDetail;

    ngOnInit() {
        this.actress = mockData.actressSasaki;
        this.productDetail = mockData.productSasaki

    }
}
