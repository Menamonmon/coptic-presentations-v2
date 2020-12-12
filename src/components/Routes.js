import React from 'react';
import { Route } from 'react-router-dom';

export default function Routes(props) {
  const { pages } = props;
  const routes = pages.map(({ path, component, subsections }) => {
    const parentPath = path;
    const Page = component;
    let totalRoutes = [];
    const l = subsections.length; 
    if (l !== 0) {
      // Update the component part
      totalRoutes = subsections.map(({ name, path, component }) => {
        const Component = component;
        return (
          <Route exact strict path={parentPath + path} key={path}>
            <Component />
          </Route>
        );
      })
    }

    const mainRoute = (
      <Route exact strict path={parentPath} key={parentPath}>
        <Page />
      </Route>
    );
    totalRoutes.push(mainRoute);
    return totalRoutes;
  
  })
  const flattenedRoutes = [].concat.apply([], routes);
  console.log(flattenedRoutes);
  return flattenedRoutes;
}
