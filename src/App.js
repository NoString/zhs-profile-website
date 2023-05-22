import './App.less';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
    return (
        <div className={'bg-primary container'}>
            <Header/>
            <Profile/>
            <Experience/>
            <Work/>
            <Portfolio/>
        </div>
    );
}

export default App;
