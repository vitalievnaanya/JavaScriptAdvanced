function solve(pies, start, end ) {
    const startIndex = pies.indexOf(start);
    const lastIndex = pies.indexOf(end) + 1;

    console.log(pies.slice(startIndex, lastIndex));
}

solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Maringue Pie', 'Sugar Cream Pie', ], 'Key Lime Pie', 'Lemon Maringue Pie')