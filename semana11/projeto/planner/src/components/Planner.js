import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from '../hooks/Hooks';
import Tasks from './Tasks';
import styled from "styled-components";

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > input, select {
      border-radius: 7px;
      outline: none;
      width: 200px;
      height: 30px;
      margin-top: 10px;
    }

    > button {
      margin-top: 10px;
      border-radius: 7px;
      border: none;
      outline: none;
      height: 30px;
      cursor: pointer;

      :hover {
        background-color: grey;
        color: white;
      }
    }
`

export default function Planner(props) {
    const { form, onChange, resetState } = useForm({
        text: "",
        day: ""
    })

    const postTasks = () => {
        const body = {
            text: form.text,
            day: form.day
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Marcela-Militello", body)
            .then((response) => {
                console.log(response)

            }).catch((erro) => {
                console.log(erro)
            })
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        postTasks()
        
        resetState()
    }
    useEffect(() => {
        props.getTasks()
    })

    return (
      <main className="App">
        <Form onSubmit={handleSubmit}>
          <input name="text" value={form.text} onChange={handleInputChange} type="text" placeholder="Tarefa..." />
            <select
              data-testid={'select-day'}
              name="day"
              value={form.day}
              onChange={handleInputChange}
            >
                <option value="none">Selecione um dia da semana</option>
                <option value="Segunda">Segunda</option>
                <option value="Terça">Terça</option>
                <option value="Quarta">Quarta</option>
                <option value="Quinta">Quinta</option>
                <option value="Sexta">Sexta</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
            </select>
                <button>Criar Tarefa</button>
            </Form>

            <h2>Tarefas da semana</h2>

            <Tasks tasks={props.tasks} />
        </main>
    );
}


