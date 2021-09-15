import React, { Component, useMemo } from 'react';
import PropTypes from 'prop-types';
import UpSetJS, { extractCombinations } from '@upsetjs/react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class UpsetJS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: null,
        }
        // this.clearState = this.clearState.bind(this);
        this.renderPlot = this.renderPlot.bind(this);
        this._renderPlotCalled = false;
        this.setSelection = this.setSelection.bind(this);

    }

    setSelection(selection) {
        console.log(selection)

        this.setState({
            selection: selection
        })
        this.props.setProps({
            selection: selection
        })
    }

    componentDidMount() {
        if (this.props.selection) {
            this.setState({
                selection: this.props.selection
            });

        }
    }

    componentWillUnmount() {
        this.setState({
            selection: null
        })
    }

    render() {
        
        


        const { id, data, height, width, title, theme, interaction, setLabelSize, setName} = this.props;
        const { sets, combinations } = extractCombinations(data);
        if (interaction === "hover") {
            return (
                <div id={id}>
                    <UpSetJS
                        sets={sets}
                        combinations={combinations}
                        selection={this.state.selection}
                        onHover={this.setSelection}
                        // onClick={this.setSelection}
                        width={width}
                        height={height}
                        title={title}
                        theme={theme}
                        setName={setName}
                        fontSizes={{"setLabel":setLabelSize}}
                    />
                </div>
            );
        } else {
            return (
                <div id={id}>
                    <UpSetJS
                        sets={sets}
                        combinations={combinations}
                        selection={this.state.selection}
                        // onHover={this.setSelection} 
                        onClick={this.setSelection}
                        width={width}
                        height={height}
                        title={title}
                        theme={theme}
                        setName= {setName}
                        fontSizes={{"setLabel":setLabelSize}}
                    />
                </div>
            );
        }
    }



    renderPlot(up) {
        const {
            id,
            setProps,
            data,
        } = this.props;
        if (up === this._up && this._renderPlotCalled) {
            return;
        }
        this._up = up;
        this._renderPlotCalled = true;
        const upset = d3.select("." + id)

    }
}

UpsetJS.defaultProps = {
    width: 800,
    height: 500,
    title: null,
    data: [],
    theme: "light",
    interaction: "hover",
    setLabelSize: "10px",
    setName: ""
};

UpsetJS.propTypes = {
    id: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape(
            {
                name: PropTypes.string.isRequired,
                sets: PropTypes.arrayOf(PropTypes.string).isRequired
            }
        )
    ),
    selection: PropTypes.object,
    setProps: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
    theme: PropTypes.string,
    interaction: PropTypes.string,
    setName: PropTypes.string,
    setLabelSize: PropTypes.string,
};
