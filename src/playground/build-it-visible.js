const app = {
    title: 'Visivility toggle',
    hidden: 'This is hidden text',
}

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    console.log(visibility);
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        <button type="button" onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
        {visibility && (
            <div>{app.hidden}</div>
        )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}
 
render();