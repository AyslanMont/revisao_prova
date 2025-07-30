import { useEffect, useState } from "react"
import "./Album.css"


const url = "https://jsonplaceholder.typicode.com/albums"

export default function Album(){

    const [albuns, setAlbuns] = useState([])
    const [entrada, setEntrada] = useState("")
    const [number, setNumber] = useState("")
    const [recarregar, setRecarregar] = useState(0)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const carregaDados = async () => {
            try{
                const response = await fetch(url)
                const dados = await response.json()
                setAlbuns(dados) 
            } catch (error){
                console.log(error)
            } finally {
                setLoad(false)
            }
        }

    carregaDados();

    }, [recarregar])

    if (load){
        return <h2>Carregando...</h2>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNumber(entrada)
        setEntrada("")

    }

    const handleRecarregar = () => {
        setRecarregar(prev => prev + 1)
        console.log(albuns)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Id:</span>
                    <input type="number" onChange={(e) => setEntrada(e.target.value)} value={entrada}/>
                </label>
                <button>Enviar</button>
            </form>

            <div>
                <ul>
                    {
                        albuns.filter(album => album.userId  == number).map((album, i) => {
                            return <li key={album.id}>{album.title}</li>
                        })
                    }
                </ul>
            </div>

            <button onClick={handleRecarregar}>Recarregar</button>
        </div>
    )
}