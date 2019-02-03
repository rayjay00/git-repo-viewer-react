import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import File from './components/File';
import * as serviceWorker from './serviceWorker';


const FilePanel = styled.section`
    width: 75%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    flex: 1;
    border: 1px solid lightgrey;
    border-bottom: 0;
    max-width: 1000px;
`;

function Filelist({ files }) {
    return files.map(file => {
        return <File key={file.id} file = {file} />
    })
}

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'file',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
        message: 'Initial commit'
        }
    },
    {
    id: 3,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
        message: 'Initial commit'
        }
    },
    {
    id: 4,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
        message: 'Added a readme'
        }
    },
];

ReactDOM.render(<FilePanel><Filelist files={ testFiles }/></FilePanel>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
