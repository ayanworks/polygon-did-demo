
import { updateDidDoc } from '@ayanworks/polygon-did-registrar';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

export class UpdateDid {

    public routes(app): void {

        app.post('/polygon/update-did', async (req, res) => {

            try {
                const did = req.body.did;
                const didDoc = req.body.didDoc;
                const privateKey = req.body.privateKey;

                const updateDidRes = await updateDidDoc(did, didDoc, privateKey)
                    .then((response) => {
                        return response;
                    });

                res.send(updateDidRes);
                logger.debug(
                    `updateDidRes - ${JSON.stringify(updateDidRes)} \n\n\n`
                );
            } catch (error) {
                logger.error(
                    `UpdateDid Error- ${JSON.stringify(error)} \n\n\n`
                );
                res.send(error);

            }
        })
    }
}