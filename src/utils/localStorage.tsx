export const getItemFromLocalStorage = (key: string) => {
  const targetJSON = localStorage.getItem(key);
  const target = targetJSON ? JSON.parse(targetJSON) : undefined;
  return target;
}

export const setItemToLocalStorage = (key: string, value: any) => {
  const targetJSON = JSON.stringify(value);
  localStorage.setItem(key, targetJSON);
}