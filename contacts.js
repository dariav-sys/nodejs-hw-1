const fs = require("fs");
const file = `${__dirname}/db/contacts.json`;
// const path = require("path");

// const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = () => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    console.table(contacts);
  });
};

// listContacts();

const getContactById = (contactId) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const obj = JSON.parse(data);
    obj.forEach((element) => {
      if (element.id === contactId) {
        console.table(element);
      }
    });
  });
};

// getContactById(10);

const removeContact = (contactId) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const obj = JSON.parse(data);
    obj.filter((element) => {
      const res = obj.filter((el) => el.id != contactId);
      console.table(res);
    });
  });
};

// removeContact(5)
const addContact = (name, email, phone) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const obj = JSON.parse(data);
    obj.push({
      id: obj.length + 1,
      name: name,
      email: email,
      phone: phone,
    });
    const newData = JSON.stringify(obj);
    fs.writeFile(file, newData, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
};

// addContact("ania", "ania@gmail.com", "+351907893747");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
