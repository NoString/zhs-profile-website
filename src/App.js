import './App.less';
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
    return (
        <div className={'bg-primary container'}>
            <Header/>
            <Profile/>
        </div>
    );
}

export default App;
