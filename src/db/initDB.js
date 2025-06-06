
import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStoragePouch } from 'rxdb/plugins/storage-pouchdb';
import { RxDBReplicationCouchDBPlugin } from 'rxdb/plugins/replication-couchdb';
import inventorySchema from './schemas/inventory';

addRxPlugin(RxDBReplicationCouchDBPlugin);

export async function initDB() {
    const db = await createRxDatabase({
        name: 'bikeposdb',
        storage: getRxStoragePouch('idb'),
    });

    await db.addCollections({
        inventory: { schema: inventorySchema }
    });

    return db;
}