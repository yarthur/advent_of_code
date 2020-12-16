export default (timestamp, routeTime) => {
    const nextRouteCount = Math.ceil(timestamp / routeTime);

    return routeTime * nextRouteCount;
};
