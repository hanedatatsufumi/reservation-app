const Product = require('./models/product');

class SampleDb {
    constructor() {
        this.products = [
            {
                id: 0,
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'Heading 1',
                headingtext1: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
                heading2: 'Heading 2',
                headingtext2: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
                heading3: 'Heading 3',
                headingtext3: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
              },
              {
                id: 1,
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'Heading 1',
                headingtext1: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
                heading2: 'Heading 2',
                headingtext2: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
                heading3: 'Heading 3',
                headingtext3: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
              },
              {
                id: 2,
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: 'A great phone with one of the best cameras',
                heading1: 'Heading 1',
                headingtext1: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
                heading2: 'Heading 2',
                headingtext2: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
                heading3: 'Heading 3',
                headingtext3: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
              },
              {
                id: 3,
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: 'A great phone with one of the best cameras',
                heading1: 'Heading 1',
                headingtext1: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
                heading2: 'Heading 2',
                headingtext2: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
                heading3: 'Heading 3',
                headingtext3: 'This is a paragraph of text that is used to describe the product. It is a very good product and you should buy it',
              },
        ]
    }

    async initDb() {
        await this.clearnDb();
        this.seeDb();
    }

    async clearnDb() {
        await Product.deleteMany({});
    }

    pushProcuntToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
        });
    }

    seeDb() {
        this.pushProcuntToDb();
    }
}

module.exports = SampleDb;