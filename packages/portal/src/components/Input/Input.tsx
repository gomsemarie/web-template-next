/* ------------------------------------------------------------------------------------------------------------------------------------------
 * Input.tsx
 * WRITER : 김재원
 * DATE : 2023-06-13
 * DISCRIPTION : 인풋 컴포넌트
 * TYPE : Component
 * HISTORY :
--------------------------------------------------------------------------------------------------------------------------------------------*/
'use client';

import React from 'react';
import classnames from 'classnames';
import useRecoilData from '@/hook/useRecoilData';

//============================================================================================================================================
// [인풋 Recoil 사용 시 인터페이스]
//============================================================================================================================================
export enum InputType {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Password = 'password',
  Search = 'search',
  Phone = 'phone',
}

//============================================================================================================================================
// [인풋 Recoil 사용 시 인터페이스]
//============================================================================================================================================
interface IInputUseNameProps {
  /**
   * Recoil의 ID를 지정합니다.(name 입력 시 필수)
   */
  id: string | number;
}

//============================================================================================================================================
// [인풋 Value 사용 시 인터페이스]
//============================================================================================================================================
interface IInputValueProps<T> {
  /**
   * 인풋의 값을 지정합니다.
   */
  value?: T;
  /**
   * 인풋의 기본값을 지정합니다.
   */
  defaultValue?: T;
}

//============================================================================================================================================
// [인풋 기본 인터페이스]
//============================================================================================================================================
interface IInputDefaultProps<T, N> {
  /**
   * Recoil의 Key를 지정합니다.
   */
  name?: N;
  /**
   * 컴포넌트의 스타일을 지정합니다.
   */
  style?: React.CSSProperties;
  /**
   * 컴포넌트의 클래스를 지정합니다.
   */
  className?: string;
  /**
   * 인풋의 ReadyOnly 속성을 지정합니다.
   */
  readonly?: boolean;
  /**
   * 인풋의 Disabled 속성을 지정합니다.
   */
  disabled?: boolean;
  /**
   * 인풋의 플레이스홀더를 지정합니다.
   */
  placeholder?: string;
  /**
   * 인풋의 최대 길이를 지정합니다.
   */
  maxLength?: number;
  /**
   * 인풋이 포커스 되었을 때, 전체 선택 여부를 지정합니다.
   */
  fullSelection?: boolean;
  /**
   * 인풋의 자동완성 여부를 지정합니다.
   */
  autoComplete?: string;
  /**
   * 엔터키를 눌렀을 때, 실행할 함수를 지정합니다.
   */
  onEnterKey?: (value: T) => void;
  /**
   * 인풋의 값을 변경했을 때, 실행할 함수를 지정합니다.
   */
  onChange?: (value: T) => void;
}

//============================================================================================================================================
// [인풋 통합 인터페이스]
//============================================================================================================================================
export interface IInputComponentProps<T, N>
  extends IInputDefaultProps<T, N>,
    IInputUseNameProps,
    IInputValueProps<T>,
    IInputProps,
    IInputNumberProps,
    IInputEmailProps,
    IInputPasswordProps,
    IInputSearchProps,
    IInputPhoneProps {
  /**
   * 컴포넌트의 유형을 지정합니다.
   */
  type: InputType;
}

//============================================================================================================================================
// [인풋 구현부]
//============================================================================================================================================
export function InputComponent<
  T extends string | number | undefined,
  N extends string | undefined = undefined
>(props: IInputComponentProps<T, N>) {
  const {
    type,
    id,
    name,
    value,
    defaultValue,
    style,
    className,
    readonly = false,
    disabled = false,
    placeholder = '',
    maxLength,
    minNumber,
    maxNumber,
    fullSelection = true,
    autoComplete = 'off',
    returnFormat = 'initial',
    onEnterKey,
    onChange,
  } = props;

  const isNumberType = React.useMemo(
    () =>
      (!!value && typeof value === 'number') ||
      typeof defaultValue === 'number' ||
      type === 'number',
    [type]
  );

  const [getData, setData] =
    typeof name !== 'undefined'
      ? useRecoilData(typeof id === 'undefined' ? name : id)
      : [(n: string) => {}, () => {}];
  const [state, setState] =
    typeof name !== 'undefined'
      ? [
          getData(name) as T,
          (v: T) => {
            setData({ key: name, value: v });
          },
        ]
      : React.useState<T>(
          defaultValue ?? value ?? ((isNumberType ? 0 : '') as T)
        );

  React.useEffect(() => {
    setState(value as T);
  }, [value]);

  const maskingValue = (v: T, t: boolean): T => {
    if (isNumberType) {
      const mValue = !isNaN(Number(v))
        ? (Number(!v ? v : v.toString().replace(/[^0-9]/g, '')) as T)
        : (v as T);
      return Number(
        !!minNumber && Number(mValue) < minNumber
          ? minNumber
          : !!maxNumber && Number(mValue) > maxNumber
          ? maxNumber
          : mValue
      ) as T;
    } else if (type === 'phone') {
      const tempValue = !v
        ? ''
        : (v.toString().replace(/[^0-9]/g, '') as string);
      let mValue = '';

      if (!t || tempValue.length < 4) {
        mValue = tempValue;
      } else if (tempValue.length < 7) {
        mValue = `${tempValue.substring(0, 3)}-${tempValue.substring(3)}`;
      } else if (tempValue.length < 11) {
        mValue = `${tempValue.substring(0, 3)}-${tempValue.substring(
          3,
          6
        )}-${tempValue.substring(6)}`;
      } else {
        mValue = `${tempValue.substring(0, 3)}-${tempValue.substring(
          3,
          7
        )}-${tempValue.substring(7)}`;
      }

      return mValue as T;
    } else {
      return v;
    }
  };

  const viewValue = value !== undefined ? value : state;

  // onChange 이벤트 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value as T;
    const maskedValue = maskingValue(inputValue, returnFormat === 'masking');

    // value 속성이 없거나 name을 지정한 경우에만 state 업데이트
    if (!value || !!name) {
      setState(maskedValue);
    }

    !!onChange && onChange(maskedValue);
  };

  // onKeyDown 이벤트 핸들러
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.code === 'Enter' || e.code === 'NumpadEnter') &&
      !readonly &&
      !disabled &&
      !e.nativeEvent.isComposing
    ) {
      !!onEnterKey &&
        onEnterKey(maskingValue(value as T, returnFormat === 'masking'));
    }
  };

  return (
    <div
      data-component="input"
      className={classnames(type, className)}
      style={style}
    >
      <div className="wrap">
        <input
          type={isNumberType ? 'number' : 'text'}
          value={maskingValue(viewValue, true) || (isNumberType ? '0' : '')}
          onChange={handleInputChange}
          ime-mode={'auto'}
          onKeyDown={handleInputKeyDown}
          maxLength={type === 'phone' && !maxLength ? 13 : maxLength}
          {...(!!autoComplete && { autoComplete })}
          {...(!!fullSelection && { onFocus: (e) => e.target.select() })}
          {...(!!placeholder && { placeholder })}
          {...(!!minNumber && { min: minNumber.toString() })}
          {...(!!maxNumber && { max: maxNumber.toString() })}
          {...(!!readonly && { readOnly: true })}
          {...(!!disabled && { disabled: true })}
        />
      </div>
    </div>
  );
}

//============================================================================================================================================
// [인풋 기본 유형 컴포넌트]
//============================================================================================================================================
interface IInputProps {}

export function Input<
  T extends string | number | undefined,
  N extends string | undefined = undefined
>(
  props: IInputProps &
    IInputDefaultProps<T, N> &
    (N extends string ? IInputUseNameProps : IInputValueProps<T>)
) {
  return InputComponent<T, N>({
    ...props,
    type: InputType.Text,
  } as IInputComponentProps<T, N>);
}

//============================================================================================================================================
// [인풋 숫자 유형 컴포넌트]
//============================================================================================================================================
interface IInputNumberProps {
  /**
   * Number 유형인 경우, 최소값을 지정합니다.
   */
  minNumber?: number;
  /**
   * Number 유형인 경우, 최대값을 지정합니다.
   */
  maxNumber?: number;
}

function InputNumber<N extends string | undefined = undefined>(
  props: IInputNumberProps &
    IInputDefaultProps<number, N> &
    (N extends string ? IInputUseNameProps : IInputValueProps<number>)
) {
  return InputComponent({
    ...props,
    type: InputType.Number,
  } as IInputComponentProps<number, N>);
}

//============================================================================================================================================
// [인풋 이메일 유형 컴포넌트]
//============================================================================================================================================
interface IInputEmailProps {}

function InputEmail<N extends string | undefined = undefined>(
  props: IInputEmailProps &
    IInputDefaultProps<string, N> &
    (N extends string ? IInputUseNameProps : IInputValueProps<string>)
) {
  return InputComponent({
    ...props,
    type: InputType.Email,
  } as IInputComponentProps<string, N>);
}

//============================================================================================================================================
// [인풋 비밀번호 유형 컴포넌트]
//============================================================================================================================================
interface IInputPasswordProps {}

function InputPassword<N extends string | undefined = undefined>(
  props: IInputPasswordProps &
    IInputDefaultProps<string, N> &
    (N extends string ? IInputUseNameProps : IInputValueProps<string>)
) {
  return InputComponent({
    ...props,
    type: InputType.Password,
  } as IInputComponentProps<string, N>);
}

//============================================================================================================================================
// [인풋 검색 유형 컴포넌트]
//============================================================================================================================================
interface IInputSearchProps {}

function InputSearch<N extends string | undefined = undefined>(
  props: IInputSearchProps &
    IInputDefaultProps<string, N> &
    (N extends string ? IInputUseNameProps : IInputValueProps<string>)
) {
  return InputComponent({
    ...props,
    type: InputType.Search,
  } as IInputComponentProps<string, N>);
}

//============================================================================================================================================
// [인풋 휴대전화번호 유형 컴포넌트]
//============================================================================================================================================
interface IInputPhoneProps {
  /**
   * Phone 유형인 경우, onChange의 반환 값 형태를 지정합니다.
   */
  returnFormat?: 'initial' | 'masking';
}

function InputPhone<N extends string | undefined = undefined>(
  props: IInputPhoneProps &
    IInputDefaultProps<string, N> &
    (N extends string ? IInputUseNameProps : IInputValueProps<string>)
) {
  return InputComponent({
    ...props,
    type: InputType.Phone,
  } as IInputComponentProps<string, N>);
}

//============================================================================================================================================
// [인풋 컴포넌트 네임스페이스]
//============================================================================================================================================
export namespace Input {
  export const Number = InputNumber;
  export const Email = InputEmail;
  export const Password = InputPassword;
  export const Search = InputSearch;
  export const Phone = InputPhone;
}
