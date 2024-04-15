// rules
export const accountRules = [
  {
    required: true,
    message: '账号不能为空',
    trigger: 'onBlur'
  },
  {
    validator: (value: string) => {
      return /^[\w-]{4,16}$/.test(value);
    },
    message: '用户名需在6~18位之间',
    trigger: 'onBlur'
  }
];
export const psdRules = [
  {
    required: true,
    message: '密码不能为空',
    trigger: 'onBlur'
  },
  {
    validator: (value: string) => {
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/.test(value);
    },
    message: '密码必须包含字母和数字，且在6~18位之间',
    trigger: 'onBlur'
  }
];
export const telRules = [
  {
    required: true,
    message: '手机号码不能为空',
    trigger: 'onBlur'
  },
  {
    validator: (value: string) => {
      return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value);
    },
    message: '手机号码格式错误',
    trigger: 'onBlur'
  }
];
export const smsRules = [
  {
    required: true,
    message: '验证码不能为空',
    trigger: 'onBlur'
  }
];

// export default {
//   accountRules,
//   psdRules,
//   telRules,
//   smsRules
// };
