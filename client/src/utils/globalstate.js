import { atom } from "recoil";

export const loginState = atom({
    key: 'loginState',
    default: false
});

export const showDashboardState = atom({
    key: 'dashboardState',
    default: false
});

export const signupState = atom({
    key: 'signUpState',
    default: false
});

export const notificationState = atom({
    key: 'notificationState',
    default: false
});

export const diagnosticState = atom({
    key: 'diagnosticState', 
    default: false
});

export const showTripsState = atom({
    key: 'showTripsState',
    default: false
})

export const showRewardsState = atom({
    key: 'showRewardsState', 
    default: false
});

export const showPointsState = atom({
    key: 'showPointsState', 
    default: false
})