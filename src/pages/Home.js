import React, {useContext} from 'react';
import Search from "../components/Search";
import Card from "../components/Card";
import GithubContext from "../context/github/githubContext";
import Loader from "../components/Loader";

const Home = (props) => {

    const {loading, users} = useContext(GithubContext)


    return (<>
        <Search/>
        <div className='row'>
            {
                loading
                    ? <Loader/>
                    : users.map(user =>
                        <div key={user.id} className='col-sm-4 mb-4'>
                            <Card user={user}/>
                        </div>
                    )
            }
        </div>
    </>)
};

export default Home;