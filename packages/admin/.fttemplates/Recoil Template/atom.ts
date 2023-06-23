import { atom } from 'recoil';

export interface I<FTName | pascalcase>State {
  anyKey: string;
}

const INIT_<FTName | constantcase>_STATE: I<FTName | pascalcase>State = {
  anyKey: '',
};

const <FTName | camelcase>State = atom<I<FTName | pascalcase>State>({
  key: '<FTName | camelcase>State',
  default: INIT_<FTName | constantcase>_STATE,
});

export { <FTName | camelcase>State };
