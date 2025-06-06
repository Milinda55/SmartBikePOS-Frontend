
export default {
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: { type: 'string', maxLength: 100 },
        name: {
            type: 'object',
            properties: {
                en: { type: 'string' },
                si: { type: 'string' }
            }
        },
        quantity: { type: 'number' },
        price: { type: 'number' },
        storeId: { type: 'string', enum: ['store1', 'store2'] },
        minStock: { type: 'number', default: 5 }
    }
};