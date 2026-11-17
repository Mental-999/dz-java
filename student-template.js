"use strict";

// Практическая работа №4
// Тема: массивы и строки.
// Заполните только участки TODO.
// Названия функций, параметры и module.exports не изменяйте.

// 1. Сумма элементов массива
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// 2. Уникальные значения
function uniqueValues(values) {
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (!result.includes(values[i])) {
      result.push(values[i]);
    }
  }
  return result;
}

// 3. Минимум и максимум
function minMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return [min, max];
}

// 4. Сокращение текста
function shortenText(text, maxWords) {
  const trimmed = text.trim();
  const words = trimmed.split(' ');
  if (words.length <= maxWords) {
    return trimmed;
  }
  const fragment = words.slice(0, maxWords).join(' ');
  if (fragment.endsWith('.')) {
    return fragment + '..';
  }
  return fragment + '...';
}

// 5. Поменять две части строки местами
function swapParts(text) {
  const parts = text.split(' ');
  return parts[1] + ' ' + parts[0];
}

// 6. Разбор URL без объекта URL
function parseUrlParts(url) {
  const protocolEnd = url.indexOf('://');
  const protocol = url.slice(0, protocolEnd);

  const rest = url.slice(protocolEnd + 3);

  const slashIndex = rest.indexOf('/');
  const domain = rest.slice(0, slashIndex);

  const pathAndQuery = rest.slice(slashIndex);

  const questionIndex = pathAndQuery.indexOf('?');
  let uri;
  let query;
  if (questionIndex === -1) {
    uri = pathAndQuery;
    query = '';
  } else {
    uri = pathAndQuery.slice(0, questionIndex);
    query = pathAndQuery.slice(questionIndex + 1);
  }

  return [protocol, domain, uri, query];
}

module.exports = {
  sumArray,
  uniqueValues,
  minMax,
  shortenText,
  swapParts,
  parseUrlParts,
};