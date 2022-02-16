import Constants from 'expo-constants';
import { A } from '../words/a';
import { B } from '../words/b';
const directions = [[-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]];

export const getURI = () => {
  const { manifest } = Constants;
  let uri = '';
  if (__DEV__ && manifest?.debuggerHost) {
    uri = `http://${manifest.debuggerHost.split(":").shift()}:3000/test`;
  } else {
    uri = `http://boggler-env.eba-v5yi4ctv.us-east-2.elasticbeanstalk.com/test`;
  }
  return uri
}

export const buildTrie = () => {
  const words = A.concat(B)
  const trie: {[key: string]: {}} = {}
  for (let word of words) {
    let cur = trie
    for (let ch of word) {
      if (!(ch in cur)) {
        cur[ch] = {}
      }
      cur = cur[ch]
    }
    cur['#'] = word
  }
  return trie
}

export const findWords = (trie: {[key: string]: {}}) => {
  const board = [
    ["a", "n", "t", "h"],
    ["o", "p", "o", "r"],
    ["p", "a", "t", "h"],
    ["u", "m", "s", "i"],
  ]
  let words = new Set<string>();
  for (let i = 0; i < board.length; i++ ) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] in trie) {
        backtrack(i, j, trie)
      }
    }
  }
  return []
}

const backtrack = (i: number, j: number, trie: {[key: string]: {}}) => {
  console.log(i, j)
}