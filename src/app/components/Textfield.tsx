export default function TextFiled({
  id = "",
  name = "",
  placeholder = "",
  style = {}
}) {
  return (
    <input id={id} name={name} placeholder={placeholder} style={style} />
  );
}