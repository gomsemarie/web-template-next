import { selector } from 'recoil';
import { <FTName | camelcase>State, I<FTName | pascalcase>State } from './atom';

export namespace <FTName | pascalcase>Selector {
  export const anyKeySelector = selector<I<FTName | pascalcase>State['anyKey']>({
    key: '<FTName | camelcase>Selector.anyKeySelector',
    get: ({ get }) => {
      const data = get(<FTName | camelcase>State);
      return data.anyKey;
    },
    set: ({ set }, newValue) => {
      set(<FTName | camelcase>State, (s) => {
        return {
          ...s,
          anyKey: newValue as string,
        };
      });
    },
  });
}
