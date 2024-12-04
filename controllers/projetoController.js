import { Funcionario } from "../models/Funcionario.js";
import { EPI } from "../models/EPI.js";
import { Movimentacao } from "../models/Movimentacao.js";

const cadastrarEPI = async (req, res) => {
    try {
        const { nome, validade, qualidade, numeroCA } = req.body
        if (!nome || !validade || !qualidade || !numeroCA) {
            return res.status(404).send({ mensagem: 'Favor informar nome, validade, qualidade e numeroCA' })
        }
        const epi = await EPI.create({ nome, validade, qualidade, numeroCA })
        res.status(201).send({ epi })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const editarEPI = async (req, res) => {
    try {
        const id = req.params.id
        const { nome, validade, qualidade, numeroCA } = req.body
        const resultado = await EPI.update({ nome, validade, qualidade, numeroCA }, { where: { id: id } })
        res.status(200).send({ mensagem: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const deletarEPI = async (req, res) => {
    try {
        const id = req.params.id
        await EPI.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'EPI apagado com sucesso' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}


const listarEPI = async (req, res) => {
    try {
        const resultado = await EPI.findAll()
        res.status(200).send({ mensagem: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarEPIId = async (req, res) => {
    try {
        const { id } = req.params
        const resultado = await EPI.findByPk(id)
        console.log(resultado)
        res.status(200).send({ mensagem: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////

const cadastrarFun = async (req, res) => {
    try {
        const { nome, cpf, setor } = req.body
        if (!nome || !cpf || !setor) {
            // Faltam dados
            return res.status(404).send({ mensagem: 'Favor informar nome, cpf e setor' })
        }
        const funcionario = await Funcionario.create({ nome, cpf, setor })
        res.status(201).send({ funcionario })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const editarFun = async (req, res) => {
    try {
        const id = req.params.id
        const { nome, cpf, setor } = req.body
        const resultado = await Funcionario.update({ nome, cpf, setor }, { where: { id: id } })
        res.status(200).send({ mensagem: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const deletarFun = async (req, res) => {
    try {
        const id = req.params.id
        await Funcionario.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'Funcionario apagado com sucesso' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarFun = async (req, res) => {
    try {
        const resultado = await Funcionario.findAll()
        res.status(200).send({ mensagem: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}


const listarFunId = async (req, res) => {
    try {
        const { id } = req.params
        const resultado = await Funcionario.findByPk(id)
        res.status(200).send({ mensagem: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

/////////////////////////////////////////////////////////////////////


const cadastrarMovimentacao = async (req, res) => {
    try {
        const body = req.body
        const { funcionarioId, epiId, tipo, data } = req.body;
        

        const movimentacao = await Movimentacao.create(
            {
                funcionarioId,
                epiId,
                tipo,
                data
            }
        );

        res.status(201).send(movimentacao);
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

const listarMovimentacao = async (req, res) => {
    try {
        const movimentacoes = await Movimentacao.findAll({
            include: [Funcionario, EPI]
        });
        res.status(200).send({ movimentacoes });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

// const editarMovimentacao = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { quantidade, tipo } = req.body;

//         const movimentacao = await Movimentacao.findByPk(id);
//         if (!movimentacao) {
//             return res.status(404).send({ mensagem: 'Movimentação não encontrada' });
//         }

//         movimentacao.quantidade = quantidade || movimentacao.quantidade;
//         movimentacao.tipo = tipo || movimentacao.tipo;
//         await movimentacao.save();

//         res.status(200).send({ movimentacao });
//     } catch (erro) {
//         console.log(erro);
//         res.status(500).send({ mensagem: 'Erro interno' });
//     }
// };

const deletarMovimentacao = async (req, res) => {
    try {
        const { id } = req.params;

        const movimentacao = await Movimentacao.findByPk(id);
        if (!movimentacao) {
            return res.status(404).send({ mensagem: 'Movimentação não encontrada' });
        }

        await movimentacao.destroy();
        res.status(200).send({ mensagem: 'Movimentação apagada com sucesso' });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};



export { cadastrarEPI, editarEPI, deletarEPI, cadastrarFun, editarFun, deletarFun, listarFun, listarEPI, cadastrarMovimentacao, listarMovimentacao, deletarMovimentacao, listarFunId, listarEPIId }