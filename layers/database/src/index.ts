import { v4 } from 'uuid';

export function myDatabaseLayerTest() {
    return `${v4()} - Coming from first layer`;
}

export interface TestInterface {
    test: string;
}
