const Header = () => {
  return (
    <header className="flex  justify-between font-semibold text-[24px] leading-[66px] px-[20px] border-b-[1px] ">
      <h2 className="">Drawflow</h2>
      <div className="github-link w-[48px] flex   ">
        <a
          href="https://github.com/jerosoler/Drawflow  "
          className="w-fit pt-[6px]"
          target="_blank"
        >
          <i className="fab fa-github fa-2x items-center"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
