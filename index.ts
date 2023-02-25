export default function dotpath(str: string) {
  const parts = str.split(".");
  const len = parts.length;

  //   type FixMeLater = any;
  type ObjectWithPath = {
    [key: string]: any;
  };

  return function parse(obj: ObjectWithPath) {
    let testKey;

    for (let i = 0; i < len; ++i) {
      testKey = parts[i];

      if (!obj) return;

      obj = obj[testKey];
    }

    return obj;
  };
}
