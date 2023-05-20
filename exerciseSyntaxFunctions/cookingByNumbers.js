function cooking(number, ...params){
    number = Number(number)

    let chop = (x) => x / 2;
    let dice = (x) => Math.sqrt(x);
    let spice = (x) => ++x;
    let bake = (x) => x * 3;
    let fillet = (x) => x * 0.2;

    for (let i = 0; i <params.length; i++) {
        switch (params[i]) {
            case "chop":
                number = chop(number);
                break;
            case "dice":
                number = dice(number);
                break
            case "spice":
                number = spice(number);
                break
            case "bake":
                number = bake(number);
                break
            case "fillet":
                number = fillet(number);
                break
            default:
                break;
        }
        console.log(number)
    }
}

cooking("32", "chop", "chop", "chop", "chop", "chop")