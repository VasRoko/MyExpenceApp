import React from 'react';
import ReactDOM from 'react-dom';

const EditExpencePage = (props) => {
    console.log(props);
    return (
        <div>
            This is an Edit Page id of {props.match.params.id}
        </div>
    );
};

export default EditExpencePage;