import Drawflow from "../../drawflow";
const Flow = () => {
  function drop(ev) {
    if (ev.type === "touchend") {
      var parentdrawflow = document
        .elementFromPoint(
          mobile_last_move.touches[0].clientX,
          mobile_last_move.touches[0].clientY
        )
        .closest("#drawflow");
      if (parentdrawflow != null) {
        addNodeToDrawFlow(
          mobile_item_selec,
          mobile_last_move.touches[0].clientX,
          mobile_last_move.touches[0].clientY
        );
      }
      mobile_item_selec = "";
    } else {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("node");
      addNodeToDrawFlow(data, ev.clientX, ev.clientY);
    }
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }
  var id = document.getElementById("drawflow");
  const editor = new Drawflow(id);
  editor.reroute = true;
  editor.reroute_fix_curvature = true;
  editor.force_first_input = false;
  return (
    <div>
      <div className="menu">
        <ul className="flex">
          <li
            onClick={() => {
              editor.changeModule("Home");
              changeModule(event);
            }}
            className="selected border-x-[1px] border-b-[1px] font-semibold p-2"
          >
            Home
          </li>
          <li
            className="border-r-[1px] border-b-[1px] font-semibold p-2"
            onClick={() => {
              editor.changeModule("Other");
              changeModule(event);
            }}
          >
            Other Module
          </li>
        </ul>
      </div>
      <div
        id="drawflow"
        onDrop={() => drop(event)}
        onDragOver={() => {
          () => allowDrop(event);
        }}
      >
        <div
          className="btn-export"
          onClick={() =>
            Swal.fire({
              title: "Export",
              html:
                "<pre><code>" +
                JSON.stringify(editor.export(), null, 4) +
                "</code></pre>",
            })
          }
        >
          Export
        </div>
        <div className="btn-clear" onClick={() => editor.clearModuleSelected()}>
          Clear
        </div>
        <div className="btn-lock">
          <i
            id="lock"
            className="fas fa-lock"
            onClick={() => {
              editor.editor_mode = "fixed";
              changeMode("lock");
            }}
          ></i>
          <i
            id="unlock"
            className="fas fa-lock-open hidden"
            onClick={() => {
              editor.editor_mode = "edit";
              changeMode("unlock");
            }}
          ></i>
        </div>
        <div className="bar-zoom">
          <i
            className="fas fa-search-minus"
            onClick={() => {
              editor.zoom_out();
            }}
          ></i>
          <i
            className="fas fa-search"
            onClick={() => {
              editor.zoom_reset();
            }}
          ></i>
          <i
            className="fas fa-search-plus"
            onClick={() => {
              editor.zoom_in();
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Flow;
