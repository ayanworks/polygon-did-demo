
import { registerDID } from '@ayanworks/polygon-did-registrar';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

async function registrarPolygonDid(did, privateKey) {

    try {
        const networkUrl = `http://127.0.0.1:8545`;
        const contractAddress = `0x41905BF4dA4d72886821317FE4206b82BAe32A35`;
        const didResolver = await registerDID(did, privateKey, networkUrl, contractAddress)
            .then((response) => {
                return response;
            })
            ;
        logger.debug(
            `registrarPolygonDid - ${JSON.stringify(didResolver)} \n\n\n`
        );
    } catch (error) {

        logger.error(
            `registrarPolygonDid error- ${JSON.stringify(error)} \n\n\n`
        );
    }
}

registrarPolygonDid("did:polygon:0x53430fE4Cb77e3ff5e07fA95BDA086220A4426Bd", "0x34fa54d23cb2c143fc1baa515e7aa8bd0728788815838430ba51710158b04e0e")