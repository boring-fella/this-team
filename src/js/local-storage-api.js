const storageAPI = {
  save(key, value) {
    try {
      const saveValue = JSON.stringify(value);
      localStorage.setItem(key, saveValue);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  },

  load(key) {
    try {
      const saveValue = localStorage.getItem(key);
      return saveValue === null ? undefined : JSON.parse(saveValue);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Remove state error: ', error.message);
    }
  },
};

export default storageAPI;
