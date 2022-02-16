import Constants from 'expo-constants';
import { A } from '../words/a';
import { B } from '../words/b';
const directions = [[-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]];
type validLetters = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

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
  const trie = {}
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

export const findWords = (trie) => {
  const board: validLetters[][] = [
    ["a", "n", "t", "h"],
    ["o", "p", "o", "r"],
    ["p", "a", "t", "h"],
    ["u", "m", "s", "i"],
  ]
  let words = new Set<string>();
  for (let r = 0; r < board.length; r++ ) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] in trie) {
        backtrack(r, c, trie, board, words)
      }
    }
  }
  console.log(words)
  return []
}

const backtrack = (r: number, c: number, parent: Trie, board: string[][], words: Set<string>) => {
  const letter = board[r][c]
  const node = parent[letter]
  if ('#' in node) {
    words.add(node['#'])
  }
  board[r][c] = '*'
  for (let d of directions) {
    let dr = d[0];
    let dc = d[1];
    let nr = r + dr;
    let nc = c + dc;
    if (nr < 0 || nr >= board.length || nr < 0 || nc >= board[0].length || !(board[nr][nc] in node)) {
      continue
    } else {
      backtrack(nr, nc, node, board, words)
    }
  }
  board[r][c] = letter
}