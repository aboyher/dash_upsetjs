# AUTO GENERATED FILE - DO NOT EDIT

''UpsetJS <- function(id=NULL, data=NULL, height=NULL, interaction=NULL, selection=NULL, setLabelSize=NULL, setName=NULL, theme=NULL, title=NULL, width=NULL) {
    
    props <- list(id=id, data=data, height=height, interaction=interaction, selection=selection, setLabelSize=setLabelSize, setName=setName, theme=theme, title=title, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'UpsetJS',
        namespace = 'dash_upsetjs',
        propNames = c('id', 'data', 'height', 'interaction', 'selection', 'setLabelSize', 'setName', 'theme', 'title', 'width'),
        package = 'dashUpsetjs'
        )

    structure(component, class = c('dash_component', 'list'))
}
