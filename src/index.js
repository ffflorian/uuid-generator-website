import UUID from 'pure-uuid';

document.getElementById('uuidv4').innerHTML = new UUID(4).format();
document.getElementById('uuidv1').innerHTML = new UUID(1).format();
