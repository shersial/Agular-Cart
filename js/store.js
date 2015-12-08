
function store() {
    this.rings = [
        new product("1", "Dell 18.5 Inch Monitor", "Dell", "IN1930", "1500"),
        new product("2", "Intel Core i5", "Intel", "Corei5", "3000"),
        new product("3", "Gaming Keyboard G510", "Logitech", "LG510", "200"),
        new product("4", "Lenovo 18.5 Inch Laptop", "Lenovo", "G510", "2500"),
        
    ];

}

store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.rings.length; i++) {
        if (this.rings[i].sku == sku)
            return this.rings[i];
    }
    return null;
}

