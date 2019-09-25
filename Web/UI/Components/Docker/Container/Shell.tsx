// Web/UI/Components/Docker/Container/Shell.tsx
import Typography from '@material-ui/core/Typography';
import React, {
  ChangeEvent,
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from 'react';
import { BaseTextField } from 'UI/Components/Style/TextField/BaseTextField';
import { Switch, useStyles } from './Styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useContainerLogsSubscription } from './containerExec.gen';
import { useExecCommandMutation } from './execCommand.gen';

export function ContainerShell({
  containerId,
}: {
  containerId: string;
}): React.ReactElement {
  const classes = useStyles({});
  const [execCommandFN] = useExecCommandMutation();
  const [command, setCommand] = useState<string>('');
  const [autoScroll, setAutoScroll] = useState<boolean>(false);
  const shellDiv = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  useContainerLogsSubscription({
    variables: { containerId },
    onSubscriptionData: ({
      subscriptionData: {
        data: { containerLogs },
      },
    }) => setHistory([...history, containerLogs]),
  });

  useEffect(() => {
    if (!autoScroll || !shellDiv) return;
    requestAnimationFrame(() =>
      shellDiv.current.scrollIntoView({ block: 'end', behavior: 'smooth' }),
    );
  }, [history]);

  const consoleLog = useMemo(
    () =>
      history.map((result) => (
        <Typography variant='body1'>{result}</Typography>
      )),
    [history],
  );

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
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Switch
            checked={autoScroll}
            onChange={({ target }) => setAutoScroll(target.checked)}
            value='autoScroll'
            color='primary'
          />
        }
        label='Auto Scroll'
      />
      <div className={classes.shellBox}>
        {...consoleLog}
        <div ref={shellDiv} />
      </div>
      <BaseTextField
        value={command}
        onChange={handleChange}
        variant='outlined'
        label='Command'
        fullWidth
        InputLabelProps={{ classes: { root: classes.textFieldLabel } }}
        InputProps={{ className: classes.textInput }}
        onKeyPress={handleKeypress}
        classes={{ root: classes.textField }}
      />
    </div>
  );
}
