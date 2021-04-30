
import { createDID } from '@ayanworks/polygon-did-registrar';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

async function createPolygonDid(privateKey?) {

    try {
        
        const createDIDRes = await createDID(privateKey)
            .then((response) => {
                return response;
            })
            ;
        logger.debug(
            `createPolygonDid - ${JSON.stringify(createDIDRes)} \n\n\n`
        );
    } catch (error) {

        logger.error(
            `createPolygonDid error - ${JSON.stringify(error)} \n\n\n`
        );
    }
}

// create DID with existing wallet private key
createPolygonDid("0x34fa54d23cb2c143fc1baa515e7aa8bd0728788815838430ba51710158b04e0e");


// create DID with new wallet
// createPolygonDid();
