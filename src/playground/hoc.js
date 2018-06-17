// Higher Order Component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>This is regular component</h1>
        <p>This info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a HOC Component !</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

// requireAuth 

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuth ? (<p>Login Required</p>) : (<WrappedComponent {...props} />)}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="Some props" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info='sadasds'/>, document.getElementById('app'));