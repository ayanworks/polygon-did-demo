
import { resolveDID } from '@ayanworks/polygon-did-resolver';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

export class ResolveDid {

    public routes(app): void {

        app.post('/polygon/resolve-did', async (req, res) => {

            try {
                const did = req.body.did;
                const privateKey = req.body.privateKey;

                const returnDidDoc = await resolveDID(did, privateKey)
                    .then((response) => {
                        return response;
                    });

                res.send(returnDidDoc);
                logger.debug(
                    `returnDidDoc - ${JSON.stringify(returnDidDoc)} \n\n\n`
                );
            } catch (error) {
                logger.error(
                    `ResolveDid Error- ${JSON.stringify(error)} \n\n\n`
                );
                res.send(error);
            }
        })
    }
}