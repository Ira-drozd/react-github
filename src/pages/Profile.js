import React, {useContext, useEffect} from 'react';
import GithubContext from "../context/github/githubContext";
import Loader from "../components/Loader";
import {Link} from "react-router-dom";
import Repos from "../components/Repos";

const Profile = (props) => {
    const {getUser, getRepos, user, repos, loading} = useContext(GithubContext)
    const urlName = props.match.params.name
    useEffect(() => {
         getUser(urlName)
         getRepos(urlName)
        //eslint-disable-next-line
    }, [])

    console.log('urer', user)

    const {
        name, company, avatar_url, location,
        bio, blog, login, html_url, followers,
        following, public_repos, public_gists
    } = user

    return (
        <>
            {
                loading
                    ? <Loader/>
                    :
                    <>
                        <Link
                            to={'/'}
                            className='btn text-primary'
                        >
                            Home
                        </Link>
                        <div className='card mb-4'>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3 col-sm-12 text-center">
                                        <img src={avatar_url} alt={name}
                                        style={{width: '150px'}}
                                        />
                                        <h1>{name}</h1>
                                        {location && <p>Location: {location}</p>}
                                    </div>

                                    <div className="col">
                                        {bio &&
                                        <>
                                            <h3>BIO</h3>
                                            <p>{bio}</p>
                                        </>
                                        }
                                        <a href={html_url}
                                           className='btn btn-dark'
                                           rel="noopener noreferrer"
                                           target='_blank'
                                           style={{marginBottom:'1rem'}}
                                        >
                                            Open profile
                                        </a>
                                        <ul>
                                            {login && <li><strong>Username: </strong>{login}</li>}
                                            {company && <li><strong>Company: </strong>{company}</li>}
                                            {blog && <li><strong>Website: </strong>{blog}</li>}
                                        </ul>
                                        <span className="badge badge-primary mr-1">Followers: {followers}</span>
                                        <span className="badge badge-success mr-1">Following: {following}</span>
                                        <span className="badge badge-info mr-1">Repos: {public_repos}</span>
                                        <span className="badge badge-dark">Gists: {public_gists}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <Repos repos={repos}/>
                    </>

            }
        </>
    )
};

export default Profile;