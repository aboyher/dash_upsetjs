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
                selection: this.props.selection,
            });
        }
        
    }

    componentWillUnmount() {
        this.setState({
            selection: null,
        })
    }

    render() {
        
        


        const { id, data, height, width, title, theme, interaction, setLabelSize, setName, combinationName, colors} = this.props;
        var { sets, combinations } = extractCombinations(data);
        sets.sort(function(a,b){return a.cardinality - b.cardinality})
        combinations.sort(function(a,b){return b.cardinality - a.cardinality})
        if (typeof colors !== "undefined") {
            sets = sets.map((s, i) => ({...s, color: colors[i % colors.length]}))
            combinations = combinations.map((s, i) => ({...s, color: colors[i % colors.length]}))
        }
        if (interaction === "hover") {
            return (
                <div id={id}>
                    <UpSetJS
                        sets={sets}
                        combinations={combinations}
                        selection={this.state.selection}
                        onHover={this.setSelection}
                        width={width}
                        height={height}
                        title={title}
                        theme={theme}
                        setName={setName}
                        fontSizes={{"setLabel":setLabelSize}}
                        combinationName={combinationName}
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
                        onClick={this.setSelection}
                        width={width}
                        height={height}
                        title={title}
                        theme={theme}
                        setName= {setName}
                        fontSizes={{"setLabel":setLabelSize}}
                        combinationName={combinationName}
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
    setName: "Intersection Size"
};

UpsetJS.propTypes = {
    /**
     * id for dash component 
     * */
    id: PropTypes.string,
    /**
     * data. An array of dictionaries with keys name and sets, where name is a string and sets is a list. Example:
     * df = pd.DataFrame(data={'name': [1,2], 'sets': [3,4]})
     * data = df.to_dict('records')
     */
    data: PropTypes.arrayOf(
        PropTypes.shape(
            {
                name: PropTypes.string.isRequired,
                sets: PropTypes.arrayOf(PropTypes.string).isRequired
            }
        )
    ),
    /**
     * prop for hovering or selecting from the upsetplot 
     * */
    selection: PropTypes.object,
    /**
     * function to change props to send back to dash 
     * */
    setProps: PropTypes.func,
    /**
     * width of the div wrapper 
     * */
    width: PropTypes.number,
    /**
     * height of the div wrapper 
     * */
    height: PropTypes.number,
    /** 
     * title of the upset plot 
     * */
    title: PropTypes.string,
    /** 
     * built in theme for the upset plot, options are dark, light, vega 
     * */
    theme: PropTypes.string,
    /**
     * toggle for switching between click and hover events. there might be a way to hover and click at the same time, but i don't know how yet 
     * */
    interaction: PropTypes.string,
    /**
     * axis label for sets 
     * */
    setName: PropTypes.string,
    /**
     * font size for set names 
     * */
    setLabelSize: PropTypes.string,
    /**
     * axis label for combinations 
     * */
    combinationName: PropTypes.string,

    /**
     * Set and combination colors. 
     * Length does not have to match sets or combinations(intersections). 
     * If shorter than sets or combinations it will loop.
     * Colors are added after sorting, So largest set/intersection will get the first color.
     *  Must be a list of html/css interpretable values. 
     * For example:
     *  ['rgb(121, 130, 52)','rgb(163, 173, 98)','rgb(208, 211, 162)']  
     * or
     *  ['#66c2a5', '#fc8d62', '#8da0cb']
     * */
    colors: PropTypes.arrayOf(PropTypes.string)
};
