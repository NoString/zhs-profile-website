import './App.less';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className={'bg-primary container'}>
            <Header/>
            <Profile/>
            <Experience/>
            <Work/>
            <Portfolio/>
            <People/>
            <Footer/>
        </div>
    );
}

export default App;
