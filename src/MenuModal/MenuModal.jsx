export default function MenuModal({ isOpen, closeMenu }) {
  return isOpen ? (
    <div className="menu">
      <header>Im Menu</header>
      <button onClick={closeMenu}>X</button>
    </div>
  ) : (
    ""
  );
}
