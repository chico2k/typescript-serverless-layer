import { v4 } from 'uuid';

const myDatabaseLayerTest = (): string => {
    return `${v4()} - Coming from Database Layer Package!!!!!`;
};

export class User {
    static myDatabaseLayerTest = myDatabaseLayerTest;
}
