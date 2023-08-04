const Head = ({ name, login }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return (
    <div
      className="flex-col-end w100"
      style={{ backgroundColor: "#CF7751", borderRadius: "15px" }}
    >
      <img
        className="mb-10"
        id="profpic"
        src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/02/21/WhatsApp-Image-2023-02-21-at-141650-26718814.jpeg"
      />

      <div className="white mb-10">Welcome {auth.name}</div>
    </div>
  );
};
export default Head;
