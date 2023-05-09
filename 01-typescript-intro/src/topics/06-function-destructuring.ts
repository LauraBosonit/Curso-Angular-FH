export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Samsung Galaxy Fold",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

export interface calculateTaxOptions {
    products: Product[];
    tax: number;
}

export function calculateTax(options: calculateTaxOptions): number[] {
    let total = 0;
    const { tax, products } = options;
    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15; 

const [total, totalTax] = calculateTax({
    products: shoppingCart,
    tax: tax
});

console.log("Total", total);
console.log("Tax", totalTax);
