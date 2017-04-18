"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _router, _productService) {
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.imageWidth = 50;
        this.imageMargin = 2;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.theId = +this._route.snapshot.params['id'];
        this.pageTitle = "Product Detail for ID: " + this.theId;
        // Get all products back and then find the one to display by the active id
        this._productService.getProducts()
            .subscribe(function (products) {
            _this.product = products.find(function (prod) { return prod.productId === _this.theId; });
            console.log(_this.product);
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = "Product List: " + message;
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'product-detail.component.html',
        styleUrls: ['product-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map