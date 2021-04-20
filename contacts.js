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
    console.log(data);
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
        console.log(element);
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
      console.log(res);
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
    const newData = JSON.stringify(obj, null, 2);
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
    addContact
}
