import { AppState } from "./App"


export const localDateFormat = (currentDate: Date) => {
    const lang = navigator.language
    return  Intl.DateTimeFormat(lang, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: "2-digit"
  }).format(currentDate)
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