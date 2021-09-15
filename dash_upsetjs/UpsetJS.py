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

- id (string; optional)

- data (list of dicts; optional)

    `data` is a list of dicts with keys:

    - name (string; required)

    - sets (list of strings; required)

- height (number; default 500)

- interaction (string; default "hover")

- selection (dict; optional)

- setLabelSize (string; default "10px")

- setName (string; default "")

- theme (string; default "light")

- title (string; optional)

- width (number; default 800)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, selection=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, title=Component.UNDEFINED, theme=Component.UNDEFINED, interaction=Component.UNDEFINED, setName=Component.UNDEFINED, setLabelSize=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'height', 'interaction', 'selection', 'setLabelSize', 'setName', 'theme', 'title', 'width']
        self._type = 'UpsetJS'
        self._namespace = 'dash_upsetjs'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'height', 'interaction', 'selection', 'setLabelSize', 'setName', 'theme', 'title', 'width']
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
