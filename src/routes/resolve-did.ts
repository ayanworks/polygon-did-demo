
import { resolveDID } from '@ayanworks/polygon-did-resolver';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

export class ResolveDid {

    public routes(app): void {

        app.get('/resolve-did/:did', async (req, res) => {

            try {
                let didDocRes = {};
                const did = req.params.did;

                const returnDidDoc = await resolveDID(did)
                    .then((response) => {
                        return response;
                    });

                didDocRes["success"] = returnDidDoc.success;
                didDocRes["data"] = JSON.parse(returnDidDoc.data);
                didDocRes["message"] = returnDidDoc.message;

                res.status(200).send(didDocRes);
                logger.debug(
                    `returnDidDoc - ${JSON.stringify(returnDidDoc)} \n\n\n`
                );
            } catch (error) {
                logger.error(
                    `ResolveDid Error- ${JSON.stringify(error)} \n\n\n`
                );
                res.status(500).send(error);
            }
        })
    }
}