import { AppState } from "./App"

interface Options {
    weekday: string,
    year: string,
    month: string,
    day: string,
    hour: string,
    minute: string,
    second: string,
}

let options: Options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: "2-digit"
}

export const localDateFormat = (currentDate: Date) => {
    let lang = navigator.language
    return  Intl.DateTimeFormat(lang, options).format(currentDate)
}


export const getNextButtonColor = (state:AppState): "red" | "blue" | "green" => {
    switch (state.buttonColor) {
      case "red":
        return "blue";
      case "blue":
        return "green";
      case "green":
        return "red";
      default:
        throw new Error("Invalid color");
    }
  };