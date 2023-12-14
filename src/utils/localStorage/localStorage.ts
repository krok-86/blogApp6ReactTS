
// export const getItemFromLocalStorage = (key: string) => {
//   const targetJSON = localStorage.getItem(key);
//   const target = targetJSON ? JSON.parse(targetJSON) : undefined;
//   return target;
// }

// export const setItemToLocalStorage = (key: string, value: any) => {
//   const targetJSON = JSON.stringify(value);
//   localStorage.setItem(key, targetJSON);
// }

export class LocalStorageUtil {
  static getItem(key: string): string | null {
    return window.localStorage.getItem(key)
  }

  static setItem(key: string, value: any): void {
    window.localStorage.setItem(key, value)
  }
   static removeItem(key: string): void {
    window.localStorage.removeItem(key)
  }
}
// const localStorageUtil = {
//   setItem: function(key: string, value: any) {
//     if (typeof value !== 'string') {
//       value = JSON.stringify(value);
//     }
//     localStorage.setItem(key, value);
//   },

//   getItem: function(key: string) {
//     const value = localStorage.getItem(key);
//     try {
//       return JSON.parse(value);
//     } catch (e) {
//       return value;
//     }
//   },



