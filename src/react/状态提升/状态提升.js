import React from 'react'
import ReactDOM from 'react-dom'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入一个摄氏温度</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />

                <BoilingVerdict
                    celsius={parseFloat(temperature)} />

            </fieldset>
        );
    }
}

export default function () {
    ReactDOM.render(
        <Calculator/>,
        document.getElementById('root')
    );
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}