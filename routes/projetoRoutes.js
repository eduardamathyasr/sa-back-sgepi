import express from 'express'
import { cadastrarFun, editarFun, deletarFun, cadastrarEPI, editarEPI, deletarEPI, listarFun, listarEPI, cadastrarMovimentacao, listarMovimentacao, deletarMovimentacao, listarFunId, listarEPIId} from '../controllers/projetoController.js'
const router = express.Router()

router.post('/cadastrarMovimentacao', cadastrarMovimentacao)
// router.post('/cadastrarMovimentacao/:id', cadastrarMovimentacao)
router.post('/cadastrarFun', cadastrarFun)
router.post('/cadastrarEPI', cadastrarEPI)
router.put('/editarFun/:id', editarFun)
router.put('/editarEPI/:id', editarEPI)
// router.put('/editarMovimentacao', _)
router.get('/listarFun', listarFun)
router.get('/listarFun/:id', listarFunId)
router.get('/listarEPI', listarEPI)
router.get('/listarEPI/:id', listarEPIId)
router.get('/listarMovimentacao', listarMovimentacao)
// router.get('/listarMovimentacao/:id', listarMovimentacao)
router.delete('/deletarMovimentacao', deletarMovimentacao)
router.delete('/deletarFun/:id', deletarFun)
router.delete('/deletarEPI/:id', deletarEPI)



export default router
