import Header from "./components/header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
  let entries = data.map(entry => {
    return (
      <Entry
      key={entry.id}
      {...entry}
      ></Entry>
    )
  })
  return (
    <>
      <Header></Header>
      {entries}
    </>
  )
}