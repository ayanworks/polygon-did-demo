
import { registerDID } from '@ayanworks/polygon-did-registrar';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

export class RegisterDid {

    public routes(app): void {

        app.post('/polygon/register-did', async (req, res) => {

            try {
                const did = req.body.did;
                const privateKey = req.body.privateKey;

                const registerDidRes = await registerDID(did, privateKey)
                    .then((response) => {
                        return response;
                    });

                res.status(201).send(registerDidRes);
                logger.debug(
                    `registerDidRes - ${JSON.stringify(registerDidRes)} \n\n\n`
                );
            } catch (error) {
                logger.error(
                    `RegisterDid Error- ${JSON.stringify(error)} \n\n\n`
                );
                res.send(error);
            }
        })
    }
}