import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData =async (key,value)=>{
    try {
       await  AsyncStorage.setItem(key, value);
        console.log('Data stored successfully!');
        return true
      } catch (e) {
        console.error('Failed to store data:', e);
        return false
      }
}

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value
    } catch (e) {
      console.error('Failed to retrieve data:');
      return null
    }
  };

  export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed successfully!');
      return true
    } catch (e) {
      console.error('Failed to remove data:');
      return false
    }
  };