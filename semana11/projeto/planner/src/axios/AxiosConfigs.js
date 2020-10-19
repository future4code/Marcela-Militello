import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Marcela-Militello"

export const useAxiosConfigs = () => {
    const [tasks, setTasks] = useState([])
    const getTasks = () => {
        axios.get(baseUrl)
            .then((response) => {
                setTasks(response.data)
            }).catch((erro) => {
                console.log(erro)
            })
    }

    useEffect(() => {
        getTasks()
    }, [])

    return { getTasks, tasks }
}
