export default function onChange(e) {
  return {
    type: "ON_CHANGE_INPUT",
    value: e.target.value,
    validate: e.target.value > 0 ? true : false,
  };
}
