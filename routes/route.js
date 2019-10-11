module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        res.send('FUncionar')
    });

    app.post('/pagamentos/pagamento', function(req, res){
        const pagamento = req.body;
        console.log(pagamento);
        res.send('Ok');
    })
}
