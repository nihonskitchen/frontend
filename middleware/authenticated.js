export default function({ store, route, redirect }) {
    const user = store.state.users.user;
    // console.log(route.path);
    if (route.path !== "/login") {
        store.commit("users/setLastURL", route.path);
    };
    const blockedRoute = /\/user\/*/g;

    if (!user && route.path.match(blockedRoute)) {
        redirect('/login');
    }
}