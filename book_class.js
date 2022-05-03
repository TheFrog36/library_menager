class Book extends Publication{
    constructor(title,author,type,price,copies,pages,publication_year,publisher,discount){
        super(title, price, type, copies, publisher, discount)
        this.author = author
        this.pages = pages
        this.publication_year = publication_year
    }

    //toString()
    toString(){
        const stringBook = "title: " + this.title + "\n" +
                           "author: " + this.author + "\n" +
                           "type: " + this.type + "\n" +
                           "price: " + this.price + "$\n" +
                           "copies: " + this.copies + "\n" +
                           "pages: " + this.pages + "\n" +
                           "publication_year: " + this.publication_year + "\n" +
                           "publisher: " + this.publisher + "\n" +
                           "discount: " + this.discount + "%\n" ;
        return stringBook
    
    }
    //get_public_price() {prende il prezzo di partenza, aggiunge le tasse (10%) +30% - il discount% (preso dal prezzo originale)}
    get_public_price(){
        return this.price + this.price/5*2 - this.price/100 * this.discount
    }
}
