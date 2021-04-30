
import { deleteDidDoc } from '@ayanworks/polygon-did-registrar';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

async function deletePolygonDid(did, privateKey) {

    try {
        const didResolver = await deleteDidDoc(did, privateKey)
            .then((response) => {
                return response;
            })
            ;
        logger.debug(
            `deletePolygonDid - ${JSON.stringify(didResolver)} \n\n\n`
        );
    } catch (error) {

        logger.debug(
            `deletePolygonDid error- ${JSON.stringify(error)} \n\n\n`
        );
    }
}

deletePolygonDid("did:polygon:0x2C020b0112A1B98C1BB5FC490C44772357E73803", "0xd0d219e58960748030dc8549e0af673f7950c29322f779096746df0473a10325")