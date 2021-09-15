# AUTO GENERATED FILE - DO NOT EDIT

export ''_upsetjs

"""
    ''_upsetjs(;kwargs...)

An UpsetJS component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): id for dash component
- `colors` (Array of Strings; optional): Set and combination colors. 
Length does not have to match sets or combinations(intersections). 
If shorter than sets or combinations it will loop.
Colors are added after sorting, So largest set/intersection will get the first color.
 Must be a list of html/css interpretable values. 
For example:
 ['rgb(121, 130, 52)','rgb(163, 173, 98)','rgb(208, 211, 162)']  
or
 ['#66c2a5', '#fc8d62', '#8da0cb']
- `combinationName` (String; optional): axis label for combinations
- `data` (optional): data. An array of dictionaries with keys name and sets, where name is a string and sets is a list. Example:
df = pd.DataFrame(data={'name': [1,2], 'sets': [3,4]})
data = df.to_dict('records'). data has the following type: Array of lists containing elements 'name', 'sets'.
Those elements have the following types:
  - `name` (String; required)
  - `sets` (Array of Strings; required)s
- `height` (Real; optional): height of the div wrapper
- `interaction` (String; optional): toggle for switching between click and hover events. there might be a way to hover and click at the same time, but i don't know how yet
- `selection` (Dict; optional): prop for hovering or selecting from the upsetplot
- `setLabelSize` (String; optional): font size for set names
- `setName` (String; optional): axis label for sets
- `theme` (String; optional): built in theme for the upset plot, options are dark, light, vega
- `title` (String; optional): title of the upset plot
- `width` (Real; optional): width of the div wrapper
"""
function ''_upsetjs(; kwargs...)
        available_props = Symbol[:id, :colors, :combinationName, :data, :height, :interaction, :selection, :setLabelSize, :setName, :theme, :title, :width]
        wild_props = Symbol[]
        return Component("''_upsetjs", "UpsetJS", "dash_upsetjs", available_props, wild_props; kwargs...)
end

