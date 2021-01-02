import React, { useState, useEffect } from "react";

import { Table } from "./Table";

function ProcessInstance({ camundaAPI, processDefinitionId }) {
  const [completedInstances, setCompletedInstances] = useState();

  const cockpitApi = camundaAPI.cockpitApi;
  const engine = camundaAPI.engine;

  useEffect(() => {
    fetch(`${cockpitApi}/plugin/sample-plugin/${engine}/process-instance`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        setCompletedInstances(await res.json());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!completedInstances) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Completed Process Instances</h1>

      <Table
        head={
          <>
            <Table.Head key="processDefinitionKey">
              Process Definition Key
            </Table.Head>
            <Table.Head key="completedInstanceKey">
              Completed Instances Id
            </Table.Head>
          </>
        }
      >
        {completedInstances.map((completedInstance) => {
          return (
            <Table.Row key={completedInstance.key}>
              <Table.Cell key="processDefinitionKey">
                {completedInstance.key}
              </Table.Cell>
              <Table.Cell key="completedInstanceKey">
                {completedInstance.id}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table>
    </>
  );
}

export default ProcessInstance;
