const book1 = new Book('Clue of the wooden footprint','Hadyn Kisembo','mystery', 10,13,420,1984, 'Adelphi Edizioni',0);
const book2 = new Book('2132: decimation', ' Bình Ren', 'sci-fi', 14, 6, 234, 1967, 'Rizzoli', 5);
const book3 = new Book('Long past dawn', 'Amag Omega', 'romance', 10, 5, 199, 1935, 'Rusconi libri editori', 7);
const book4 = new Book('Cry of steel', 'Yong Tenzin', 'crime', 20, 15, 201, 2008, 'Cairo editore', 50);
const book5 = new Book("Dragon's tears", 'Sinclair Durga', 'fantasy', 39, 30, 162, 2018, 'Fandango', 49);
const book6 = new Book('Sign of the burnt violin', 'Kei Bilge', 'mistery', 8, 6, 137, 1866, 'Fazi editore', 27);
const book7 = new Book('Crimson colony', 'Sal Arden', 'sci-fi', 50, 12, 264, 1801, 'La Corte editori', 31);
const book8 = new Book('Black lace', 'romance', 'Liwin Nor', 49, 4, 132, 1945, 'De Agostini editore', 24);
const book9 = new Book('The man in the vale', 'Safaa Terry', 'crime', 11, 8, 255, 2002, 'Giulio Einaudi editore', 21)
const book10 = new Book('Smoke and the rose', 'Amora Duha', 'fantasy', 39, 15, 464, 1942, 'Giunti editore', 7);


const magazine1 = new Magazine("Woman's day", "women's magazine", 708, "Agra SRL", 'daily', new Date('2022-05-04'), 9, 30, 2 );
const magazine2 = new Magazine('Country living', 'forniture magazine', 333, 'Bioa', 'weekly', new Date('2022-05-13'), 12, 24, 2)
const magazine3 = new Magazine('Southern living', 'cooking magazine', 11, 'Sprea editori', 'annual', new Date('2023-05-03'), 8, 22, 43)
const magazine4 = new Magazine('Popular science', 'scintific journal', 278, 'La Scienza', 'daily', new Date('2022-05-04'), 9, 21, 18)
const magazine5 = new Magazine('Weight watchers', 'sports magazine', 620, 'SPORTCOM', 'monthly', new Date('2022-06-03'), 5, 19, 6)


const book_list = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10]
const magazine_list = [magazine1, magazine2, magazine3, magazine4, magazine5]


function print_all(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i].toString());
    }
}

print_all(magazine_list)


// round function using Math.
function round_number(number, dec_places){
    return (Math.round(number * (10**dec_places))) / (10 ** dec_places);
}
console.log(round_number(10.067, 2));

// round funciton usign fix

function round_number2(number, dec_places){
    const rounded_number = number.toFixed(dec_places);
    return parseFloat(rounded_number);
}
console.log(round_number2(10.067,2));

const my_date = new Date('2022-04-04')

console.log(my_date.getTime())

//uso il setter
magazine1.release_date = new Date('2022-01-15')
console.log(magazine1.toString())


