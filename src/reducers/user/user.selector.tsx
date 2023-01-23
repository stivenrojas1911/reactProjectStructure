import {RootState } from '../../store';

export const userSelector = (state: RootState):boolean => state.user.isLogin;


