import {Weather} from "./Weather"
import "../scss/pages/_home.scss"
import { Forecast } from "./Forecast"
import { Sidebar } from "../components/Sidebar"
import { SearchBar } from "../components/SearchBar"

export const Home = () => {
  return (
    <div>
      
      <SearchBar />
      {/* <Sidebar /> */}
      <Weather />
      <Forecast />
    </div>
  )
}
