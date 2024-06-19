const Item = require('./model');

const resolvers = {
    Query: {
        items: async () => await Item.find(),
        item: async (_, { id }) => await Item.findById(id),
    },
    Mutation: {
        createItem: async (_, { name }) => {
            const newItem = new Item({ name });
            return await newItem.save();
        },
        updateItem: async (_, { id, name }) => {
            return await Item.findByIdAndUpdate(id, { name }, { new: true });
        },
        deleteItem: async (_, { id }) => {
            await Item.findByIdAndDelete(id);
            return true;
        },
    },
};

module.exports = resolvers;
