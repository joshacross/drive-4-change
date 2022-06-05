import { atom } from "recoil";

export const loginState = atom({
    key: 'loginState',
    default: false
});

export const showDashboardState = atom({
    key: 'dashboardState',
    default: false
});