import React from 'react';

const Loader = () => (

    <div className='col-12 text-center'>
        <div className="spinner-border text-primary mt-5 mb-5 " role="status"
             style={{width: '3rem', height: '3rem'}}
        >
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default Loader;