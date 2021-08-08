const ContactModel = require('../models/contact.model')

module.exports = {

    async create (request, h) {

        const contact = new ContactModel({
            name: request.payload.name,
            number: request.payload.number,
            description: request.payload.description,
            
        })
        contact.save()
        return null;
    },

    async list(req, res) {
        const contacts = await ContactModel.find().exec();
        return contacts;
    }
}