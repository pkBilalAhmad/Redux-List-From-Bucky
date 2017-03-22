import React from 'react';
import Data from '../containers/data'
import Users from '../containers/users'
const App = () => {
    return (
        <div>
            hello from Component App
            <Data />
            <hr />
            <Users />
        </div>
    );
}

export default App;