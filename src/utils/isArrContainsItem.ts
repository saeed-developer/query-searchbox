export function isArrContainsItem(arr: string[], word: string | undefined) {
    if (!word) {
      return false;
    }
    for (let item of arr) {
      if (item.toLocaleLowerCase() === word.toLocaleLowerCase()) {
        return true;
      }
    }
    return false;
  }