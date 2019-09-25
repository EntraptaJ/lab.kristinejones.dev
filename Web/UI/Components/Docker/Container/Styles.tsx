// Web/UI/Components/Docker/Container/Style.ts
import React from 'react';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import MUISwitch, {
  SwitchClassKey,
  SwitchProps,
} from '@material-ui/core/Switch';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

export const Switch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      backgroundColor: 'grey',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <MUISwitch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1em',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#151515',
      color: 'white',
    },
    shellBox: {
      whiteSpace: 'pre-wrap',
      overflowY: 'scroll',
      color: 'white',
      height: '100%',
    },
    textBox: {
      backgroundColor: '#eee',
      height: '10%',
      padding: '1em',
    },
    textFieldLabel: {
      color: 'white',
    },
    textField: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
      caretColor: 'white',
      color: 'white',
    },
    textInput: {
      color: 'white',
    },
  }),
);
