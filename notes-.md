# Notes

### Kent C Dodds
- The State Reducer Pattern with React Hooks: https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks?ck_subscriber_id=1373581139 
- https://kentcdodds.com/blog/inversion-of-control 
- https://egghead.io/lessons/javascript-implement-inversion-of-control 
- https://www.youtube.com/watch?v=q5OcHiSxXfg 

### Dependency injection
- https://blog.logrocket.com/dependency-injection-react/ 
- https://medium.com/joyn-tech-blog/react-cookbook-hooks-dependency-injection-405958065443 

### Control Inversion and containers
- https://blog.bitsrc.io/inversion-of-control-with-react-584533e49245 
- https://www.lorenzweiss.de/inversion_of_control_with_react_components/ 
- https://javascript.plainenglish.io/what-you-need-to-know-about-the-inversion-of-control-for-react-278c0f4dcd18 
- https://javascript.plainenglish.io/inversion-of-control-a-simple-effective-design-principle-6d1780a8e19f 
- https://www.youtube.com/watch?v=0X1Ns2NRfks 
- https://dev.to/shadid12/when-and-why-you-should-do-dependency-injection-in-react-33pa 
- https://krasimir.gitbooks.io/react-in-patterns/content/chapter-10/#using-reacts-context-prior-v-163 
- https://blog.bitsrc.io/inversion-of-control-with-react-584533e49245 

### Wrapper solution with props.children
- https://www.smashingmagazine.com/2021/08/react-children-iteration-methods/ 
- https://www.reactenlightenment.com/basic-react-components/6.8.html
- 
### Other
- https://www.merrickchristensen.com/articles/headless-user-interface-components/
- https://www.logicroom.co/blog/should-you-use-an-ioc-container-in-your-javascript-ui-app

```js

  const sectionsContent = children.reduce((acc, child) => {
    const found = sectionNames.includes(child.props.name);
    if (found) acc[child.props.name] = child;
    return acc;
  }, {});
  
  {Object.entries(sectionsContent).map(([key, value]) => {
    return value ? <div key={key}>{value}</div> : null;
  })}
  
  const Section = (props) => <>{props.children}</>

  {children.map((child, key) => {
    const { name, type, children } = child.props;
    return React.createElement(type, children, key);
  })}


```