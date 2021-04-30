
import { resolveDID } from '@ayanworks/polygon-did-resolver';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

async function resolvePolygonDid(did, privateKey) {

    try {
        const didResolver = await resolveDID(did, privateKey)
            .then((response) => {
                return response;
            })
            ;
        logger.debug(
            `resolvePolygonDid - ${JSON.stringify(didResolver)} \n\n\n`
        );
    } catch (error) {
        logger.error(
            `resolvePolygonDid error - ${JSON.stringify(error)} \n\n\n`
        );
    }
}

resolvePolygonDid("did:polygon:0x2C020b0112A1B98C1BB5FC490C44772357E73803", "0xd0d219e58960748030dc8549e0af673f7950c29322f779096746df0473a10325")