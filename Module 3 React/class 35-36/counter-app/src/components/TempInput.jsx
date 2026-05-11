export default function TempInput({temperature,setTemperature}) {
  return (
    <div>
      <label>
        <input
          type="text"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
      </label>
    </div>
  );
}
