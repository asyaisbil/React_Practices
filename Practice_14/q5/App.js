import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const age = useSelector((state) => state.age);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  function handleAge() {
    dispatch({ type: "yas_arttir" });
  }

  function handleAgeDown() {
    dispatch({ type: "yas_azalt" });
  }

  function handleAgeReset() {
    dispatch({ type: "yas_sifirla" });
  }

  return (
    <div>
      <h1>{age}</h1>
      <button onClick={handleAge}>Yaşı arttır</button>
      <button onClick={handleAgeDown}>Yaşı azalt</button>
      <button onClick={handleAgeReset}>Yaşı sıfırla</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
Read-only
