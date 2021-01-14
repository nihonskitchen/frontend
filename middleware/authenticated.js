export default function({ store, route, redirect }) {
    const user = store.state.users.user;
    const blockedRoute = /\/user\/*/g;

    if (!user && route.path.match(blockedRoute)) {
        redirect('/login');
    }
}