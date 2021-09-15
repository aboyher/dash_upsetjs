import dash_upsetjs
import dash
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate
from dash import html, dcc
import pandas as pd


app = dash.Dash(__name__, prevent_initial_callbacks=True)

df = pd.read_csv("C:/Users/aboyh/Downloads/scopus.csv")

df = df.set_index("EID")
df = df['Author Keywords'].dropna().str.split(";")
df = df.reset_index()
df.columns = ['name','sets']
df['sets'] = df['sets'].apply(lambda x: [y.strip() for y in x])
top10 = df['sets'].explode().value_counts().nlargest(10).index.tolist()

data = df.set_index('name').sets.apply(lambda x: [y for y in x if y in top10]).apply(lambda x: float("NaN") if x == [] else x).dropna().reset_index().to_dict('records')
# print(data)

app.layout = html.Div([
    dcc.Input(id="newdata", value="", debounce=True),
    dcc.Slider(id="h-slider", value=400, min=10, max=1000),
    dcc.Slider(id="w-slider", value=400, min=10, max=1000),
    dcc.RadioItems(
        options=[{'label': 'Light', 'value': 'light'},{'label':'Dark', 'value':'dark'}, {'label': 'Vega', 'value':'vega'}],
        id="color-radio",
        value="light",
    ),
    dash_upsetjs.UpsetJS(
        id='upset',
        data=data,
        title="Test Upset",
        interaction="select",
        setName="Keywords",
        setLabelSize="10px"
    ),
    html.H1(id="output")
])


@app.callback(Output('upset', 'data'), 
            Input('newdata', 'value'),
            State("upset", "data"))
def add_data(value, data):
    if value is None or value == "":
        raise PreventUpdate
    name, sets = value.split(":")
    sets = sets.split(",")
    newdata = dict(name=name, sets=sets)
    if data is None:
        data = []
    print(newdata)
    data.append(newdata)
    print(data)
    return data


@app.callback(
    Output('upset','width'),
    Output('upset','height'),
    Input('w-slider','value'),
    Input('h-slider','value')
)
def update_size(width, height):
    return width, height


@app.callback(Output("output", "children"), Input("upset", "selection"))
def get_selection(selection):
    return str(selection)

@app.callback(
    Output("upset", "theme"),
    Input("color-radio", "value")
)
def update_theme(value):
    return value

if __name__ == '__main__':
    app.run_server(debug=True)
