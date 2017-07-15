import React from 'react';
import {Link} from 'react-router-dom';

export default () => {

    return (
        <div className="text-center">
            <p>
                Wow, here is 404 <br />

                Go to the <Link to="/">home</Link> page ?
            </p>
        </div>
    )

}