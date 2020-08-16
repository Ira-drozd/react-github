import React, {useContext, useState} from 'react';
import AlertContext from "../context/alert/alertContext";
import GithubContext from "../context/github/githubContext";

const Search = (props) => {

    const alert = useContext(AlertContext)

    const [value, setValue] = useState('')

    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            // show( 'Test Search')
            return
        }
        github.clearUsers()
        if (value.trim()) {
            //console.log('Make request with', value)
            github.search(value.trim())
            setValue('')
            alert.hide()
        } else {
            alert.show('Fill in the search bar!')
        }
    }
    return (<div className='form-group'>
        <input type="text"
               className='form-control'
               placeholder='Enter username...'
               onKeyPress={onSubmit}
               value={value}
               onChange={(e) => setValue(e.target.value)}
        />
    </div>)
};

export default Search;