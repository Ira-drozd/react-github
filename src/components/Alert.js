import React, {useContext} from 'react';
import AlertContext from "../context/alert/alertContext";


const Alert = () => {

    const {alert, hide} = useContext(AlertContext)
    console.log('alert',alert)

    if (!alert) return null

    return <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
        {alert.text}
        <button type="button" className="close" aria-label="Close" onClick={hide.bind(null)}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
};

export default Alert;

/*
import React, {useContext} from 'react';
import AlertContext from "../context/alert/alertContext";

const Alert = ({alert}) => {
    console.log(alert)
    const {alert, hide}=useContext(AlertContext)


    if(!alert) return <h1>oops</h1>
    //console.log(alert)
    return(
        <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
            {alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hide.bind(null)}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
};

export default Alert;*/
