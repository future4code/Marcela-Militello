import React from 'react';
import styled from "styled-components";

const TaskContainer = styled.main`
display: flex;
justify-content: space-evenly;
`

const EachDay = styled.div`  

`

export default function Tasks(props) {
    return (
        <TaskContainer>
          <div>
            <div>Segunda</div>
              {props.tasks.map((list) => {
                return (
                  <>
                    {
                      list.day === "Segunda" &&
                        <EachDay key={list.id} id={list.id} >
                          <b>{list.text}</b>
                        </EachDay>
                    }
                  </>
                    )
                })}
          </div>
          <div>
            <div>Terça</div>
              {props.tasks.map((list) => {
                return (
                  <>
                    {
                      list.day === "Terça" &&
                        <EachDay key={list.id} id={list.id}>
                          <b>{list.text}</b>         
                        </EachDay>
                    }
                  </>
                    )
                })}
          </div>
          <div>
            <div>Quarta</div>
              {props.tasks.map((list) => {
                return (
                  <>
                    {
                      list.day === "Quarta" &&
                        <EachDay key={list.id} id={list.id}>
                          <b>{list.text}</b>   
                        </EachDay>
                    }
                  </>
                    )
                })}
          </div>
          <div>
            <div>Quinta</div>
              {props.tasks.map((list) => {
                return (
                  <>
                    {
                      list.day === "Quinta" &&
                        <EachDay key={list.id} id={list.id}>
                          <b>{list.text}</b>   
                        </EachDay>
                    }
                  </>
                    )
                })}
          </div>
          <div>
            <div>Sexta</div>
              {props.tasks.map((list) => {
                return (
                  <>
                    {
                      list.day === "Sexta" &&
                        <EachDay key={list.id} id={list.id}>
                          <b>{list.text}</b>   
                        </EachDay>
                    }
                  </>
                    )
                })}
          </div>
          <div>
            <div>Sábado</div>
              {props.tasks.map((list) => {
                return (
                  <>
                    {
                      list.day === "Sábado" &&
                        <EachDay key={list.id} id={list.id}>
                          <b>{list.text}</b>   
                        </EachDay>
                    }
                  </>
                    )
                })}
          </div>
          <div>
            <div>Domingo</div>
              {props.tasks.map((list) => {
                return (
                  <>
                    {
                      list.day === "Domingo" &&
                        <EachDay key={list.id} id={list.id}>
                          <b >{list.text}</b>         
                        </EachDay>
                    }
                  </>
                    )
                })}
          </div>
        </TaskContainer>
    )
}