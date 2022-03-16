import Main from "./pages/Main.js";
import {Route, Routes} from "react-router-dom";
import UserRepos from "./pages/UserRepos.js";
import ReposInfo from "./pages/ReposInfo.js";
import Header from "./components/Header.js";
import SearchUsers from "./pages/SearchUsers.js";
import UserInfo from "./pages/UserInfo.js";



const App = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/repo/:owner' element={<UserRepos/>} />
                <Route path='/info_repos/:owner/:repos' element={<ReposInfo/>} />
                <Route path='/search_users/' element={<SearchUsers/>} />
                <Route path='/user_info/:login' element={<UserInfo />} />
            </Routes>
        </div>
    );
}

export default App;
