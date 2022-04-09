import Constants from 'expo-constants';
import { A } from '../words/a';
import { B } from '../words/b';
import { C } from '../words/c';
import { D } from '../words/d';
import { E } from '../words/e';
import { F } from '../words/f';
import { G } from '../words/g';
import { H } from '../words/h';
import { I } from '../words/i';
import { J } from '../words/j';
import { K } from '../words/k';
import { L } from '../words/l';
import { M } from '../words/m';
import { N } from '../words/n';
import { O } from '../words/o';
import { P } from '../words/p';
import { Q } from '../words/q';
import { R } from '../words/r';
import { S } from '../words/s';
import { T } from '../words/t';
import { U } from '../words/u';
import { V } from '../words/v';
import { W } from '../words/w';
import { X } from '../words/x';
import { Y } from '../words/y';
import { Z } from '../words/z';
const directions = [[-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]];
type Trie = {
  [key: string]: {};
}

export const getURI = () => {
  const { manifest } = Constants;
  let uri = '';
  if (__DEV__ && manifest?.debuggerHost) {
    uri = `http://${manifest.debuggerHost.split(":").shift()}:5000/api`;
  } else {
    uri = `http://boggler-env.eba-bgdznu3e.us-east-2.elasticbeanstalk.com/api`;
  }
  return uri
}

export const buildTrie = () => {
  const words = A.concat(B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z)
  const trie: Trie = {}
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

export const findWords = (trie: Trie, board: string[][]) => {
  let words = new Set<string>();
  for (let r = 0; r < board.length; r++ ) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] in trie) {
        backtrack(r, c, trie, board, words)
      }
    }
  }
  let wordsByLength: {[key: number]: string[]} = {}
  for (let word of words) {
    if (word.length in wordsByLength) {
      wordsByLength[word.length].push(word)
    } else {
      wordsByLength[word.length] = [word]
    }
  }
  for (let len in wordsByLength) {
    wordsByLength[len].sort()
  }
  return { foundWords: wordsByLength, count: words.size.toString()}
}

const backtrack = (r: number, c: number, parent: Trie, board: string[][], words: Set<string>) => {
  const letter = board[r][c]
  let node: any = parent[letter]
  if (letter == 'q') {
    if (node['u']) {
      node = node['u']
    }
  }
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

export const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Qu", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];