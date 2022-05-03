class Publication {
    constructor(title, price, type, copies, publisher, discount){
        this.title = title
        this.price = price
        this.type = type
        this.copies = copies
        this.publisher = publisher
        this.discount = discount
    }
    toString(){
        const publication_string ='title: ' + this.title + '\n' +
                                  'price: ' + this.price + '$\n' +
                                  'type: ' + this.type + '\n' +
                                  'copies: ' + this.copies + '\n' +
                                  'publisher: ' + this.publisher + '\n' +
                                  'discount: ' + this.discount + '$\n';
        return publication_string
    }
    get_public_price_without_tax(){
        return this.price + this.price * 0.3 - this.price / 100 * this.discount
    }
}