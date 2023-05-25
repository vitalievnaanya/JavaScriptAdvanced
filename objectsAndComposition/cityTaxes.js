function cityTaxes(name, population, tressary) {
    const result = {
        name,
        population,
        tressary,
        taxRate: 10,
        collectTaxes() {
            this.tressary += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.tressary -= Math.floor(this.tressary * percent / 100);
        }
    };

    return result;
}

const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.tressary);
city.applyGrowth(5);
console.log(city.population);