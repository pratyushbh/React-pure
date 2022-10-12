const App=()=>{
    return React.createElement('div',{},[
        React.createElement('h1',{className:'Heading'},'React is Loaded'),
        React.createElement(Person,{name:'Yihua',occupation:'instructor'},null),
        React.createElement(Person,{name:'Pratyush',occupation:'System Programmer'},null),
        React.createElement(Person,{name:'Lmao',occupation:'ded'},null)
    ]);
};
const Person=(props)=>{
    return(React.createElement('div',{},[
    React.createElement('h1',{},[],props.name),
    React.createElement('p',{},[],props.occupation)
]))
};
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(React.createElement(App));