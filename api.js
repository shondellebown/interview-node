const FileSystem = require('fs');
const Path = require('path');

const families = JSON.parse(FileSystem.readFileSync(Path.resolve(__dirname, 'families.json'), 'utf8'));
const members = JSON.parse(FileSystem.readFileSync(Path.resolve(__dirname, 'members.json'), 'utf8'));

function getUsers() {
}

module.exports = {
  getUsers: getUsers,
}