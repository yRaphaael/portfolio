import './home.css'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import Progressbar from './components/Progressbar'
import DownArrow from './components/DownArrow'
import About_Me from './components/About_Me'

function Home (){
    return (
        <>
            <Navbar/>
            <Principal />
            <Progressbar />
            <DownArrow />
            <About_Me />
        </>
    )
}

export default Home