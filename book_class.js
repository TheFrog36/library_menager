class Book extends Publication{
    constructor(title,author,type,price,copies,pages,publication_year,publisher,discount){
        super(title, price, type, copies, publisher, discount)
        this.author = author
        this.pages = pages
        this.publication_year = publication_year
    }

    //toString()
    toString(){
        const stringBook = super.toString()
        const stringBook2 = "author: " + this.author + "\n" +
                     "pages: " + this.pages + "\n" +
                     "publication_year: " + this.publication_year;
        return stringBook + stringBook2
    
    }
    //get_public_price() {prende il prezzo di partenza, aggiunge le tasse (10%) +30% - il discount% (preso dal prezzo originale)}
    get_public_price(){
        return this.price + this.price/5*2 - this.price/100 * this.discount
    }
}
