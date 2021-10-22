export default function handler(state = {
    needNotificationUpdate:false,
    needPageUpdate:false
}, action) {
    if (action.type === 'HANDLE_UPDATE_NOTIFICATIONS') {
        return {
            needNotificationUpdate:true
        };
    }
    if (action.type === 'HANDLE_NOTIFICATIONS_UPDATED') {
        return {
            needNotificationUpdate:false
        };
    }
    if (action.type === 'HANDLE_UPDATE_PAGE') {
        return {
            needPageUpdate:true
        };
    }
    if (action.type === 'HANDLE_PAGE_UPDATED') {
        return {
            needPageUpdate:false
        };
    }
    if (action.type === 'HANDLE_UPDATE_PAGE_TITLE') {
        return {
            pageTitle:action.payload
        };
    }

    return state;
}
