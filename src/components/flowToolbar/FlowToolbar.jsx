const FlowToolbar = () => {
  const drag = (ev) => {
    if (ev.type === "touchstart") {
      mobile_item_selec = ev.target
        .closest(".drag-drawflow")
        .getAttribute("data-node");
    } else {
      ev.dataTransfer.setData("node", ev.target.getAttribute("data-node"));
      console.log("asdasd")
    }
  };

  return (
    <div className=" flex flex-col w-[300px]  overflow-y-scroll h-screen  ">
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="table"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-grid-2x2"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 12h18" />
          <path d="M12 3v18" />
        </svg>
        <span> table</span>
      </div>

      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-function-square"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
          <path d="M9 11.2h5.7" />
        </svg>
        <span> function</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="slack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-database"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
        <span> dblink</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="github"
      >
        <i className="fab fa-github"></i>
        <span> Github Star</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="telegram"
      >
        <i className="fab fa-telegram"></i>
        <span> Telegram send message</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="aws"
      >
        <i className="fab fa-aws"></i>
        <span> AWS</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="log"
      >
        <i className="fas fa-file-signature"></i>
        <span> File Log</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="google"
      >
        <i className="fab fa-google-drive"></i>
        <span> Google Drive save</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="email"
      >
        <i className="fas fa-at"></i>
        <span> Email send</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="template"
      >
        <i className="fas fa-code"></i>
        <span> Template</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="multiple"
      >
        <i className="fas fa-code-branch"></i>
        <span> Multiple inputs/outputs</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="personalized"
      >
        <i className="fas fa-fill"></i>
        <span> Personalized</span>
      </div>
      <div
        className="border-b-2 py-[13px] px-[20px]"
        draggable="true"
        onDragStart={() => drag(event)}
        data-node="dbclick"
      >
        <i className="fas fa-mouse"></i>
        <span> DBClick!</span>
      </div>
    </div>
  );
};

export default FlowToolbar;
