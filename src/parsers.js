import yaml from 'js-yaml';

export default (file, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(file);
    case 'yml':
      return yaml.load(file);
    case 'yaml':
      return yaml.load(file);
    default:
      throw new Error(`This extension is not supported: ${extension}`);
  }
};
