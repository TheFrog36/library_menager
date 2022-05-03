class Book{
    constructor(title,author,genre,price,copies,pages,publication_year,publisher,discount){
        this.title = title
        this.author = author
        this.genre = genre
        this.price = price
        this.copies = copies
        this.pages = pages
        this.publication_year = publication_year
        this.publisher = publisher
        this.discount = discount
    }

    //toString()
    toString(){
        const stringBook = "title: " + this.title + "\n" +
                           "author: " + this.author + "\n" +
                           "genre: " + this.genre + "\n" +
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
