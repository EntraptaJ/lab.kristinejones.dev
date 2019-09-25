import React, { useState, ReactNode } from 'react';
import Anser, { AnserJsonEntry } from 'anser';
import { escapeCarriageReturn } from 'escape-carriage';
import { Partical } from './Spliter';

const LINK_REGEX = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;


/**
 * Create a class string.
 * @name createClass
 * @function
 * @param {AnserJsonEntry}.
 * @return {String} class name(s)
 */
function createClass(bundle: AnserJsonEntry) {
  let classNames: string = '';

  if (!bundle.bg && !bundle.fg) {
    return '';
  }
  if (bundle.bg) {
    classNames += bundle.bg + ' ';
  }
  if (bundle.fg) {
    classNames += bundle.fg + ' ';
  }

  classNames = classNames.substring(0, classNames.length - 1);
  return classNames;
}

/**
 * Create the style attribute.
 * @name createStyle
 * @function
 * @param {AnserJsonEntry}.
 * @return {Object} returns the style object
 */
function createStyle(bundle: AnserJsonEntry) {
  const style: { backgroundColor?: string; color?: string } = {};
  if (bundle.bg) {
    style.backgroundColor = `rgb(${bundle.bg})`;
  }
  if (bundle.fg) {
    style.color = `rgb(${bundle.fg})`;
  }

  return style;
}

export function ansiToJSON(input: string, useClasses = false) {
  input = escapeCarriageReturn(input);
  return Anser.ansiToJson(input, {
    json: true,
    remove_empty: true,
    use_classes: useClasses,
  });
}

export function convertBundleIntoReact(
  useClasses: boolean,
  linkify: boolean,
  bundle: AnserJsonEntry,
  key: number
) {
  const style = useClasses ? {} : createStyle(bundle);
  const className = useClasses ? createClass(bundle) : '';

  let content: ReactNode[] | string = bundle.content;
  if (linkify) {
    content = bundle.content.split(' ').reduce(
      (words, word, index) => {
        if (index === 0) {
          words.push(' ');
        }

        if (!LINK_REGEX.test(word)) {
          words.push(word);
          return words;
        }

        words.push(<a key={index} href={word} target="_blank" rel="noopener noreferer">
          {word}
        </a>);

        return words;
      }, [] as React.ReactNode[]);
    }
  return <span className={className} style={style} key={key}>
    {content}
  </span>;
}

export function RawLogger({
  partical,
  index = 0,
  foldable = false,
  useClasses = false,
  linkify = false,
}: {
  partical: Partical;
  index: number;
  foldable?: boolean;
  useClasses?: boolean;
  linkify?: boolean;
}) {

  const lines = (
    <>
      {partical.content.split('\n').map((line, index) => {
        return ansiToJSON(line).map(convertBundleIntoReact.bind(null, useClasses, linkify))
      })}
    </>
  );

  return lines;
}