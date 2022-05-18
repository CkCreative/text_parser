const fs = require('fs')


fs.readFile('data.txt', (err, data) => {
    if (err) return
    const text = data.toString('utf-8')
    const result = text.match(/[0-9]+(?=\/)/g)

    const total = result.reduce((sum, val) => Number(sum) + Number(val))

    console.log('Total Contribution: ', Number(total).toLocaleString())

});

