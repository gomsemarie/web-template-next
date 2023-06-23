import { atomFamily } from "recoil";

export const recoilFormDefaultAtomFamily = atomFamily({
  key: 'recoilFormDefaultAtomFamily',
  default: (id) => {
    return {} as any;
  }
});