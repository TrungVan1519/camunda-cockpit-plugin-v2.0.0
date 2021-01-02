import React from "react";
import ReactDOM from "react-dom";

import ProcessInstance from "./ProcessInstance";

let container = null;

export default {
  id: "process-instance-count",
  pluginPoint: "cockpit.processDefinition.runtime.tab",
  priority: 12,
  properties: {
    label: "My Plugin",
  },
  render: (node, { api, processDefinitionId }) => {
    container = node;
    ReactDOM.render(
      <ProcessInstance
        camundaAPI={api}
        processDefinitionId={processDefinitionId}
      />,
      container
    );
  },
  unmount: () => {
    ReactDOM.unmountComponentAtNode(container);
  },
};
