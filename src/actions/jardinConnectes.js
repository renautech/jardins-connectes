export const LOGGED = 'LOGGED';
export const LOGGED_OUT = 'LOGGED_OUT';

export const logged = () => ({
    type: LOGGED,
});

export const loggedOut =  () => ({
    type: LOGGED_OUT,
});