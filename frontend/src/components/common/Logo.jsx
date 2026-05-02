import logo from "../../assets/images/coinbase_logo@2x.png"

function Logo({ size = 22 }) {
  return (
    <img
      src={logo}
      alt="Coinbase"
      style={{ width: size * 1.6, height: size * 1.6, objectFit: "contain" }}
    />
  )
}

export default Logo