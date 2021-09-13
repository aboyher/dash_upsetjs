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
- `id` (String; optional)
- `data` (optional): . data has the following type: Array of lists containing elements 'name', 'sets'.
Those elements have the following types:
  - `name` (String; required)
  - `sets` (Array of Strings; required)s
- `height` (Real; optional)
- `interaction` (String; optional)
- `selection` (Dict; optional)
- `theme` (String; optional)
- `title` (String; optional)
- `width` (Real; optional)
"""
function ''_upsetjs(; kwargs...)
        available_props = Symbol[:id, :data, :height, :interaction, :selection, :theme, :title, :width]
        wild_props = Symbol[]
        return Component("''_upsetjs", "UpsetJS", "dash_upsetjs", available_props, wild_props; kwargs...)
end

