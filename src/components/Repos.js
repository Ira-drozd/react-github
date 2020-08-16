import React from 'react';

const Repos = ({repos}) => {
    console.log('repos', repos.map(item => item))

    return (
        repos.map(repo =>
            (<div className='card mb-3' key={repo.id}>
                <div className='card-body'>
                    <h5>
                        <a
                            href={repo.html_url}
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            {repo.name}
                        </a>
                    </h5>
                </div>
            </div>)
        )

    )
};

export default Repos;