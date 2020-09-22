import React from "react";
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import App from "./App";

// const listaPost = () => {
//     return (
//         <Post />
//     )
// }

test("Ao digitar no input e clicar no botão Adicionar, um novo post é criado", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    
    const inputNovoPost = getByPlaceholderText(/Novo Post/i);
    const botaoAdicionar = getByText(/Adicionar/i);

    fireEvent.change(inputNovoPost), { target: { value: "inputTest"}};
    fireEvent.click(botaoAdicionar);
})
