
import { resolveDID } from '@ayanworks/polygon-did-resolver';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

export class ResolveDid {

    public routes(app): void {

        app.post('/polygon/resolve-did', async (req, res) => {

            try {
                let didDocRes = {};
                const did = req.body.did;

                const returnDidDoc = await resolveDID(did)
                    .then((response) => {
                        return response;
                    });

                didDocRes["success"] = returnDidDoc.success;
                didDocRes["data"] = JSON.parse(returnDidDoc.data);
                didDocRes["message"] = returnDidDoc.message;

                res.status(201).send(didDocRes);
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