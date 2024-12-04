import { Sequelize } from "sequelize";

const conexao = new Sequelize('postgresql://mikael:ujAhq38ZQbiojRZ4WOsdPg@projetosa-3196.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

try {
    await conexao.authenticate()
    console.log('conectado com sucesso')
} catch (error) {
    console.error('erro ao conectar', error)
}

export default conexao