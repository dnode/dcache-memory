module.exports = () => {
  const memory = {};
  return {
    expire: (key, expire) => {
      setTimeout(() => {
        delete memory[key];
      }, expire * 1000);
    },
    getJSON: (key, callback) => {
      callback(null, memory[key]);
    },
    setJSON: (key, value, callback) => {
      memory[key] = value;
      callback();
    },
  };
};
