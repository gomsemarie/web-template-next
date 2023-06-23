import { atomFamily } from 'recoil';

export type I<FTName | pascalcase>StateId = string;
export interface I<FTName | pascalcase>State {
  anyKey: string;
}
const init<FTName | pascalcase>State: I<FTName | pascalcase>State = {
  anyKey: '',
};

const <FTName | camelcase>State = atomFamily<I<FTName | pascalcase>State, I<FTName | pascalcase>StateId>({
  key: '<FTName | camelcase>State',
  default: (id: I<FTName | pascalcase>StateId) => init<FTName | pascalcase>State,
});

export { <FTName | camelcase>State };
