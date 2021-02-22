async function recupMeteoLille () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                lieu: 'Lille',
                temperature: 8
            })
        }, 2000)
    })
}

async function recupMeteoParis () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                lieu: 'Paris',
                temperature: 10
            })
        }, 5000)
    })
}

recupMeteoLille().then((meteoLille) => {
    console.log(meteoLille)

    recupMeteoParis().then((meteoParis) => {
        console.log(meteoParis)

        Promise.all([
            recupMeteoLille(),
            recupMeteoParis()
        ]).then((data) => {
            console.log(data)
        })
        
    })
})
(async () => {
    const meteoLille = await recupMeteoLille()
    console.log(meteoLille)
    const meteoParis = await recupMeteoParis()
    console.log(meteoParis)
    const meteoAll = await Promise.all([
        recupMeteoLille(),
        recupMeteoParis()
    ])

    console.log(meteoAll)
})()