module.exports = function(app){


    app.post('/sum/:sum1/:sum2',(req,res)=>{
   
        var result = parseInt(req.params.sum1)+ parseInt(req.params.sum2);
        res.send(result.toString())
    })

    //SOMA
    app.post("/soma/:num1/:num2", (req, res) => {
        var result = parseInt(req.params.num1) + parseInt(req.params.num2)
        res.send(result.toString())
    });

    //SUBTRAÇÃO
    app.post("/sub/:num1/:num2", (req, res) => {
        const result = parseInt(req.params.num1) - parseInt(req.params.num2)
        res.send(result.toString())
    });

    // MULTIPLICAÇÃO
    app.post("/mult/:num1/:num2", (req, res) => {
        const result = parseInt(req.params.num1) * parseInt(req.params.num2)
        res.send(result.toString())
    });

    // DIVISÃO
    app.post("/div/:num1/:num2", (req, res) => {
        const result = parseInt(req.params.num1) / parseInt(req.params.num2)
        res.send(result.toString())
    });

}