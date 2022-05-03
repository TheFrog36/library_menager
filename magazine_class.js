class Magazine extends Publication{
    constructor(title, type, release_number, publisher, periodicy, release_date, price, copies, discount){
        super(title, price, type, copies, publisher, discount)
        this.release_number = release_number
        this.periodicy = periodicy
        this.release_date = release_date
    }
    //toString()
    toString(){
        const stringaMagazine = "title: " + this.title + "\n"+
                                "type: " + this.type + "\n" + 
                                "release_number: " + this.release_number + "\n" + 
                                "publisher: " + this.publisher + "\n" + 
                                "periodicy: " + this.periodicy + "\n" + 
                                "release_date: " + this.release_date + "\n" + 
                                "price: " + this.price + "$\n" + 
                                "copies: " + this.copies + "\n" + 
                                "discount: " + this.discount + "%\n" ; 
     return stringaMagazine                          
    }
    //get_public_price() {prende il prezzo di partenza, aggiunge le tasse (20%) +30% - il discount% (preso dal prezzo originale)}
    get_public_price(){
        return this.price + this.price/2 - this.price/100 * this.discount
    
    }
} 