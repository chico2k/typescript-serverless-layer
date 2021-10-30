import { APIGatewayProxyEvent } from 'externals/aws-lambda';
import { v4 } from 'externals/uuid';

import { User } from 'database';
import middy from 'externals/@middy/core';

const getRecords = middy<APIGatewayProxyEvent>(async (event, context) => {
    const db = User.myDatabaseLayerTest();
    const uuid = v4();

    console.log('From External Layer', v4());
    console.log('From Database Layer', db);

    return {
        statusCode: 200,
        body: JSON.stringify({
            db,
            uuid,
        }),
    };
});

export { getRecords };
