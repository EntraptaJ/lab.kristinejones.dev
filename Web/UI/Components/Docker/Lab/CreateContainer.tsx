// Web/UI/Components/Docker/Lab/CreateContainer.tsx
import React, { useCallback } from 'react';
import { Form } from 'UI/Components/Style/Form';
import { useCreateContainerMutation } from './createContainer.gen';
import { useStartContainerMutation } from './startContainer.gen'
import useRouter from 'use-react-router';

interface FormData {
  image: string;
  command: string;
}

export function CreateContainerPage(): React.ReactElement {
  const [createContainerFN] = useCreateContainerMutation();
  const [startContainer] = useStartContainerMutation()
  const { history } = useRouter()

  const handleSubmit = useCallback(async (input: FormData) => {
    const response = await createContainerFN({
      variables: { input: { ...input, interactive: true } },
    });
    if (response && response.data && response.data.createContainer) {
      const started = await startContainer({ variables: { containerId: response.data.createContainer.id } })
      if (started && started.data && started.data.startContainer) history.push(`/Lab/Shell/${response.data.createContainer.id}`)
    }
  }, []);
  return (
    <>
      <Form<FormData>
        title={`New Container`}
        onSubmit={handleSubmit}
        Fields={[
          {
            name: 'image',
            label: 'Docker Image',
            type: 'Text',
            inputType: 'text',
          },
          {
            name: 'command',
            label: 'Container Command',
            type: 'Text',
            inputType: 'text',
          },
        ]}
      />
    </>
  );
}
