import { createHashHistory } from 'history';
var history = createHashHistory();
var changeRoute = (route) => {
    return () => {
        history.push(route)
    }
}

export { changeRoute }