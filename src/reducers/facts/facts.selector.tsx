import { FactModel } from '../../models/fact.model';
import {RootState } from './../../store';

export const factsSelector = (state: RootState):FactModel[]|null => state.facts.content;
