class Magazine extends Publication{
    constructor(title, type, release_number, publisher, periodicy, release_date, price, copies, discount){
        super(title, price, type, copies, publisher, discount, 0.2)
        this.release_number = release_number
        this.periodicy = periodicy
        this._release_date = release_date
    }

    set release_date(value){
        const time = value.getTime();
        this._release_date = time;
    }
    get release_date(){
        const date = new Date(this._release_date);
        return date
    }
    //toString()
    toString(){
        const stringMagazine = super.toString()
        const stringMagazine2 = "release_number: " + this.release_number + "\n" + 
                                "periodicy: " + this.periodicy + "\n" + 
                                "release_date: " + this.release_date;
     return stringMagazine + stringMagazine2                         
    }
    //get_public_price() {prende il prezzo di partenza, aggiunge le tasse (20%) +30% - il discount% (preso dal prezzo originale)}
    // get_public_price(){
    //     return super.get_public_price_without_tax() + this.price * 0.2
    // }

   
} 