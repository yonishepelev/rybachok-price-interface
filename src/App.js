import React from "react";
import { Button } from "./components/Button/Button";

function App() {
  const textButton = "Изменение цены для отмеченных товаров";
  return (
    <div className="App">
      <Button
        text={textButton}
        onClickCallback={() => {
          console.log("Я колбек оранжевой кнопки");
        }}
        color="orange"
      />
      <Button text={"Рассчитать"} color="brightCyan" />
    </div>
  );
}

export default App;
