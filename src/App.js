import './App.less';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";

function App() {
    return (
        <div className={'bg-primary container'}>
            <Header/>
            <Profile/>
            <Experience/>
        </div>
    );
}

export default App;
