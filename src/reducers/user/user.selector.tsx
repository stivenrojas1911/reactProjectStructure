import {RootState } from '../../store';

export const entityASelect = (state: RootState):boolean => state.user.isLogin;


