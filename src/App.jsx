import Counter from "./Counter";
import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Day 34: React Hooks & Custom Hook 예제</h1>
      <Counter />
      <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
        {loading && <p>로딩 중...</p>}
        {error && <p>에러 발생!</p>}
        {data && (
          <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

