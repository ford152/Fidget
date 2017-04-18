import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    public pageTitle: string;
    public product: IProduct;
    private theId: number;
    public errorMessage: string;
    imageWidth: number = 50;
    imageMargin: number = 2;


    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.theId = +this._route.snapshot.params['id'];
        this.pageTitle = `Product Detail for ID: ${this.theId}`;

        // Get all products back and then find the one to display by the active id
        this._productService.getProducts()
            .subscribe(products => {
                this.product = products.find(prod => { return prod.productId === this.theId; })
                console.log(this.product);
            },
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}
