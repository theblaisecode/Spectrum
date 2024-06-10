function Form({ color, generatePalette, changeColor }) {
  return (
    <form action="" onSubmit={generatePalette}>
      <h4>Generate Palette</h4>
      <div>
        <input
          type="color"
          name="colorShade"
          id="colorShade"
          value={color.shade || color.colorShade}
          onChange={changeColor}
        />

        <input
          type="text"
          name="colorShade"
          id="colorShade"
          value={color.colorShade}
          placeholder={color.shade}
          onChange={changeColor}
        />

        <button
          type="submit"
          style={{ background: color.shade || color.colorShade }}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
