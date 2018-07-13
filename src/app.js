class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return (
            <li>
                1.Test
            </li>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <Option />
                    <Option />
                </ul>
            </div>
        )
    }
}
class AddOption extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));