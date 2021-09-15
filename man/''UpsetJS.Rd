% Auto-generated: do not edit by hand
\name{''UpsetJS}

\alias{''UpsetJS}

\title{UpsetJS component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
''UpsetJS(id=NULL, colors=NULL, combinationName=NULL, data=NULL,
height=NULL, interaction=NULL, selection=NULL,
setLabelSize=NULL, setName=NULL, theme=NULL, title=NULL,
width=NULL)
}

\arguments{
\item{id}{Character. id for dash component}

\item{colors}{List of characters. Set and combination colors. 
Length does not have to match sets or combinations(intersections). 
If shorter than sets or combinations it will loop.
Colors are added after sorting, So largest set/intersection will get the first color.
 Must be a list of html/css interpretable values. 
For example:
 ['rgb(121, 130, 52)','rgb(163, 173, 98)','rgb(208, 211, 162)']  
or
 ['#66c2a5', '#fc8d62', '#8da0cb']}

\item{combinationName}{Character. axis label for combinations}

\item{data}{List of lists containing elements 'name', 'sets'.
those elements have the following types:
  - name (character; required)
  - sets (list of characters; required)s. data. An array of dictionaries with keys name and sets, where name is a string and sets is a list. Example:
df = pd.DataFrame(data={'name': [1,2], 'sets': [3,4]})
data = df.to_dict('records')}

\item{height}{Numeric. height of the div wrapper}

\item{interaction}{Character. toggle for switching between click and hover events. there might be a way to hover and click at the same time, but i don't know how yet}

\item{selection}{Named list. prop for hovering or selecting from the upsetplot}

\item{setLabelSize}{Character. font size for set names}

\item{setName}{Character. axis label for sets}

\item{theme}{Character. built in theme for the upset plot, options are dark, light, vega}

\item{title}{Character. title of the upset plot}

\item{width}{Numeric. width of the div wrapper}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

