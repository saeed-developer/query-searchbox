# Query-SearchBox

The Advanced Query-like SearchBox for [React](https://reactjs.org). (inspired by JQL)

Query-searchbox helps you develop powerful query-like searches and get the results either locally or from the server

Query-searchbox is highly flexible and customizable, offering numerous props and methods to control the query and customize the style

How this package works ?

This package detects the user step based on the inputValue and displays the corresponding items in the menu.
steps are:

1- filters 2- filterTypes 3- filterValues 4- operators

# Installation and usage

```
yarn add query-searchbox
```
## Props

### Required props :

- `filters` - is an array of all the filters you want to search based on. For exapmle : ["province" , "country"]
- `filterTypes` - is an array that contains all the types of filters you want to search based on. For example: ["=", "!=", "contains"]
- `filterValues` - is an array that contains all the options you want to suggest to the user for filtering results based on . For example: ["iran" , "japan"]
- `operators` - is an array of all operators to combine multiple filters together . For example: ["AND" , "OR"]
- `onClick` - a function that is called whenever the user clicks on the search button and will return the input value .

### Optional props :

#### button props :

- `buttonTitle`
- `buttonTitleColor`
- `buttonbackgroundColor`
- `buttonHeight`
- `buttonWidth`
- `buttonFontSize`

#### input props :

- `inputPlaceHolder`
- `inputBackgroundColor`
- `inputWidth`
- `inputHeight`
- `inputFontSize`
- `inputColor`

#### other props :

- `localSearchOnSteps` - if you want to perform a local search on each step, pass the steps as an array of numbers, such as [1 , 3].
- `menuValues` - an array of strings, where each string represents one row in the menu. For example: ['value1', 'value2'].
- `menuLoading` - Show a loading spinner in the dropdown menu. The default value is false.
- `onSelect` - a function that subscribes to selected item in menu.
- `onStepChange` - a function that subscribes to step changes.
- `onInputChange` - a function that subscribes to input changes.
- `onCurrentChange` - a function that subscribes to changes in the current value within that step
