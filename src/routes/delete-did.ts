
import { deleteDidDoc } from '@ayanworks/polygon-did-registrar';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

export class DeleteDid {

    public routes(app): void {

        app.post('/polygon/delete-did', async (req, res) => {

            try {
                const did = req.body.did;
                const privateKey = req.body.privateKey;

                const deleteDidRes = await deleteDidDoc(did, privateKey)
                    .then((response) => {
                        return response;
                    });

                res.send(deleteDidRes);
                logger.debug(
                    `deleteDidRes - ${JSON.stringify(deleteDidRes)} \n\n\n`
                );
            } catch (error) {
                logger.error(
                    `DeleteDid Error- ${JSON.stringify(error)} \n\n\n`
                );
                res.send(error);
            }
        })
    }
}
