export default function orderByProps(obj, properties) {
  const propertiesArray = new Array(properties.length);
  const array = [];
  for (const prop in obj) {
    const object = {};
    object.key = prop;
    object.value = obj[prop];
    const index = properties.indexOf(prop);
    if (index > -1) {
      propertiesArray[index] = object;
    } else {
      array.push(object);
    }
  }
  return [...propertiesArray, ...array.sort((a, b) => ((a.key > b.key) ? 1 : -1))];
}
