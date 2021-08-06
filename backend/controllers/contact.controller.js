module.exports = {
    list(req, res) {
        return [
            {
                id: 1,
                name: "Fernando Filho",
                number: "11 999999999",
                description: "Solicitar consultoria DevOps",
            },
            {
                id: 2,
                name: "João da Silva",
                number: "11 999999999",
                description: "Orçamento para aulas de inglês",
            },
            {
                id: 3,
                name: "Maria da Silva",
                number: "11 999999998",
                description: "Orçamento para aulas de inglês",
            },
        ]
    }
}