const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/home')
const Home = mongoose.model('Home')

require('./models/contato')
const Contato = mongoose.model('Contato')

app.use(express.json())
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE')
    res.header('Access-Control-Allow-Headers','X-PINGOTHER, Content-Type, Authorization')
    app.use(cors())
    next()
})

mongoose.connect('mongodb://localhost/gustavo',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB...')
}).catch((err) => {
    console.log("Erro na conexao com MongoDB"+err)
})

app.get('/',(req,res) => {
    res.json({name: 'Gustavo'})
})

app.get('/home', async (req,res) => {
    await Home.findOne().then((home) => {
        return res.json({
            error: false,
            home
        })
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum registro encontrado"
        })
    })
})

app.post('/home',async (req,res) => {

    const dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "ENTRE EM CONTATO",
        "topLinkBtn": "http://localhost:3000/",

        "serTitulo": "Serviços",
        "serSubtitulo": "Featured content or information",
        "serUmIcone": "code",
        "serUmTitulo": "Serviço 1",
        "serUmDesc": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        "serDoisIcone": "laptop-code",
        "serDoisTitulo": "Serviço 2",
        "serDoisDesc": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "serTresIcone": "mobile-alt",
        "serTresTitulo": "Serviço 3",
        "serTresDesc": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    }

    const homeExiste = await Home.findOne({})
    if(homeExiste == true){
        return res.status(404).json({
            error: true,
            message: 'Erro: Conteudo da pagina home nao carregado com sucesso'
        })
    }
    await Home.create(dados, (err) => {
        if(err == true) return res.status(404).json({
            error: true,
            message: 'Erro: Conteudo da pagina home nao carregado com sucesso'
        })
    })

    return res.json({
        error: false,
        message: 'Conteudo da pagina home cadastrado com sucesso'
    })
    })

app.post('/contato', async (req,res) => {
    await Contato.create(req.body, (err) => {
        if(err == true){
            return res.status(400).json({
                error: true,
                message: "Erro: mensagem de contato nao cadastrada"
            })
        }
        return res.json({
            error: false,
            message: "Mensagem de contato cadastrada"
        })
    })
})

app.listen(8080,() => {
    console.log("Servidor rodando na porta 8080: http://localhost:8080")
})

//By Gustavo Pinheiro Maia