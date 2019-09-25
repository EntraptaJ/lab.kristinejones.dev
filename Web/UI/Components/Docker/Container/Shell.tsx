// Web/UI/Components/Docker/Container/Shell.tsx
import React, {
  useEffect,
  useCallback,
  useState,
  ChangeEvent,
  useMemo,
} from 'react';
import { useContainerLogsSubscription } from './containerExec.gen';
import { BaseTextField } from 'UI/Components/Style/TextField/BaseTextField';
import { useExecCommandMutation } from './execCommand.gen';
import { HTMLInputTypes } from 'UI/Components/Style/Form/type';
import Typography from '@material-ui/core/Typography';

const Commands = [];

export function ContainerShell({
  containerId,
}: {
  containerId: string;
}): React.ReactElement {
  const [execCommandFN] = useExecCommandMutation();
  const [command, setCommand] = useState<string>('');
  const { data, loading } = useContainerLogsSubscription({
    variables: { containerId },
  });
  const [history] = useState<string[]>([]);
  if (!loading && history[history.length - 1] !== data.containerLogs)
    history.push(data.containerLogs);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setCommand(target.value),
    [setCommand],
  );

  const handleKeypress = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        execCommandFN({ variables: { containerId, command } });
        setCommand('');
      }
    },
    [containerId, execCommandFN, command],
  );

  return (
    <>
      <div style={{ padding: '1em', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#151515', color: 'white' }}>
        <div
          style={{
            whiteSpace: 'pre-wrap',
            overflowY: 'scroll',
            color: 'white',
            height: '100%'
          }}
        >
          {history ? (
            history.map((cmd) => <Typography variant='body1'>{cmd}</Typography>)
          ) : (
            <div>Loading</div>
          )}
        </div>
        <div style={{ backgroundColor: '#eee', height: '10%', padding: '1em' }}>
        <BaseTextField
        value={command}
        onChange={handleChange}
        variant='outlined'
        label='Command'
        fullWidth
        onKeyPress={handleKeypress}
        style={{ color: 'white'}}
      />
        </div>

      </div>
    </>
  );
}
