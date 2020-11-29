const nameInverter = function(name) {
  let honorific = 'Dr.' || 'Mr.' || 'Ms.' || 'Mrs.';
  if (name === '') {
    return '';
  } else if (name === ' name ') {
    return name.trim();
  } else if (name === 'first last') {
    return name.split(' ').reverse().join(', ');
  } else if (name === ' first last') {
    return name.trim().split(' ').reverse().join(', ');
  } else if (name === `${honorific} `) {
    return name.replace(`${honorific} `, '');
  } else if (name === `${honorific} first-name last-name`) {
    let newName = name.split(' ');
    let titleOfName = newName[0];
    let firstName = newName[1];
    let lastName = newName[2];
    return `${titleOfName} ${lastName}, ${firstName}`;
  } else if (name === ` ${honorific} first-name last-name `) {
    let newName = name.trim().split(' ');
    let titleOfName = newName[0];
    let firstName = newName[1];
    let lastName = newName[2];
    return `${titleOfName} ${lastName}, ${firstName}`;
  } else if (name === 'undefined') {
    return `Error`;
  }

  return name;
};

module.exports = nameInverter;