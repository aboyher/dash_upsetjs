# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class UpsetJS(Component):
    """An UpsetJS component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    id for dash component.

- colors (list of strings; optional):
    Set and combination colors.   Length does not have to match sets
    or combinations(intersections).   If shorter than sets or
    combinations it will loop.  Colors are added after sorting, So
    largest set/intersection will get the first color.   Must be a
    list of html/css interpretable values.   For example:   ['rgb(121,
    130, 52)','rgb(163, 173, 98)','rgb(208, 211, 162)']    or
    ['#66c2a5', '#fc8d62', '#8da0cb'].

- combinationName (string; optional):
    axis label for combinations.

- data (list of dicts; optional):
    data. An array of dictionaries with keys name and sets, where name
    is a string and sets is a list. Example:  df =
    pd.DataFrame(data={'name': [1,2], 'sets': [3,4]})  data =
    df.to_dict('records').

    `data` is a list of dicts with keys:

    - name (string; required)

    - sets (list of strings; required)

- height (number; default 500):
    height of the div wrapper.

- interaction (string; default "hover"):
    toggle for switching between click and hover events. there might
    be a way to hover and click at the same time, but i don't know how
    yet.

- selection (dict; optional):
    prop for hovering or selecting from the upsetplot.

- setLabelSize (string; default "10px"):
    font size for set names.

- setName (string; default "Intersection Size"):
    axis label for sets.

- theme (string; default "light"):
    built in theme for the upset plot, options are dark, light, vega.

- title (string; optional):
    title of the upset plot.

- width (number; default 800):
    width of the div wrapper."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, selection=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, title=Component.UNDEFINED, theme=Component.UNDEFINED, interaction=Component.UNDEFINED, setName=Component.UNDEFINED, setLabelSize=Component.UNDEFINED, combinationName=Component.UNDEFINED, colors=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'colors', 'combinationName', 'data', 'height', 'interaction', 'selection', 'setLabelSize', 'setName', 'theme', 'title', 'width']
        self._type = 'UpsetJS'
        self._namespace = 'dash_upsetjs'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'colors', 'combinationName', 'data', 'height', 'interaction', 'selection', 'setLabelSize', 'setName', 'theme', 'title', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(UpsetJS, self).__init__(**args)
