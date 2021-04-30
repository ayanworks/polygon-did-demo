
import { updateDidDoc } from '@ayanworks/polygon-did-registrar';
import * as log4js from "log4js";

const logger = log4js.getLogger();
logger.level = 'debug';

async function updatePolygonDidDoc(did, didDoc, privateKey) {

    try {
        const createDIDRes = await updateDidDoc(did, didDoc, privateKey)
            .then((response) => {
                return response;
            })
            ;
        logger.debug(
            `updatePolygonDidDoc - ${JSON.stringify(createDIDRes)} \n\n\n`
        );
    } catch (error) {

        logger.error(
            `updatePolygonDidDoc error- ${JSON.stringify(error)} \n\n\n`
        );
    }
}

updatePolygonDidDoc("did:polygon:0x2C020b0112A1B98C1BB5FC490C44772357E73803", "{\"@context\":\"https://w3id.org/did/v1\",\"id\":\"did:polygon:0x2C020b0112A1B98C1BB5FC490C44772357E73803\",\"verificationMethod\":[{\"id\":\"did:polygon:0x2C020b0112A1B98C1BB5FC490C44772357E73803\",\"type\":\"EcdsaSecp256k1VerificationKey2019\",\"controller\":[\"did:polygon:0x2C020b0112A1B98C1BB5FC490C44772357E73803\", \"did:polygon:0x2C020b0112A1B98C1BB5FC490C44772357E73802\"],\"publicKeyBase58\":\"7Lnm1frErwLwwZB1x2XbweLauYJpAZBjGxAXk55u248DEGGKF62apu9QuekaE3d7jMUUeHjk2F4sSYqKF3oeQ6b3ZLuMb\"}]}", "0xd0d219e58960748030dc8549e0af673f7950c29322f779096746df0473a10325")