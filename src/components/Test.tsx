import { useParams } from "react-router-dom"

const Test = ({word} : {word: string}) => {

  const params = useParams()

  console.log(params)

  return (
    <div>{word}</div>
  )
}
export default Test