const database = require('./db')
const saveOrphanage = require('./saveOrphanage')

database.then(async db =>{
    const orphanage = {
        lat: '-27.2169423',
        lng: '-49.6380253',
        name: 'Lar do Carinho',
        about: 'Presta assistência a crianças de 06 a 15 anos.',
        whatsapp: '994455772',
        images: [
            "https://images.unsplash.com/photo-1597095540293-b184e2b0d044?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1573449595343-f5e436ae1091?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),   
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência',
        opening_hours: 'Horário de visitas das 18h até 8h',
        open_on_weekends: '0'
    }
    // inserir dados na tabela
    /*
    await saveOrphanage(db, orphanage) 
    */
   
    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)  
    /*
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)
    */

    // apagar um dado da tabela
    /* await db.run("DELETE FROM orphanages WHERE id = '3'") */
})