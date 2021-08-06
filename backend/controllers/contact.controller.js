const ContactModel = require('../models/contact.model')

module.exports = {
    async list(req, res) {
        const contacts = await ContactModel.find().exec();
        return contacts;
    }
}