import { Fact } from '../../models/fact.model';
import {RootState } from './../../store';

export const factsSelector = (state: RootState):Fact[]|null|undefined => state.facts.facts;
