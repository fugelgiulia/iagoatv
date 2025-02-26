const AWS = require('aws-sdk');

AWS.config.update({
    region: 'socorro',
    accessKeyId: 'AKIA5RRHCKYZ6W4OB6NB',
    secretAccessKey: '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'
});

const s3 = new AWS.S3();

class AWSRepository {
    async buscarImagem(referencia) {
        try {
            const params = {
                Bucket: 'bucketmi74',
                Key: referencia
            };

            const url = s3.getSignedUrl('getObject', params);
            return { url };
        } catch (error) {
            throw new Error("Erro ao buscar imagem no S3: " + error.message);
        }
    }
}

module.exports = new AWSRepository();