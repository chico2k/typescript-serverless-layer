import { v4 } from '/opt/externals/uuid';
import { APIGatewayProxyEvent } from '/opt/externals/aws-lambda';

import { myDatabaseLayerTest, TestInterface } from '/opt/database/src/index';
import middy from '/opt/externals/@middy/core';
import { camelCase } from '/opt/externals/lodash';

const ledgerRecords = middy<APIGatewayProxyEvent>(async (event, context) => {
    const bla = myDatabaseLayerTest();

    camelCase;

    console.log('UUID from Handler', v4());

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: bla,
        }),
    };
});

const ledgerRecord = middy<APIGatewayProxyEvent>(async (event, context) => {
    const bla = myDatabaseLayerTest();
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: bla,
        }),
    };
});

export { ledgerRecord, ledgerRecords };
