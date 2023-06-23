import { selectorFamily } from 'recoil';
import { <FTName | camelcase>State, I<FTName | pascalcase>State, I<FTName | pascalcase>StateId } from './atom';

export namespace <FTName | pascalcase>Selector {
  export const anyKeySelector = selectorFamily<
    I<FTName | pascalcase>State['anyKey'],
    I<FTName | pascalcase>StateId
  >({
    key: '<FTName | camelcase>Selector.anyKeySelector',
    get:
      (id) =>
      ({ get }) => {
        const data = get(<FTName | camelcase>State(id));
        return data.anyKey;
      },
    set:
      (id) =>
      ({ set }, newValue) => {
        set(<FTName | camelcase>State(id), (s) => {
          return {
            ...s,
            anyKey: newValue as string,
          };
        });
      },
  });
}
