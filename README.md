# hold

~~~~~ sh
npm install e53e04ac/hold
~~~~~

~~~~~ mjs
import { Get<T> } from 'e53e04ac/hold';
import { ValueOrGet<T> } from 'e53e04ac/hold';
import { Hold } from 'e53e04ac/hold';
import { Unwrap } from 'e53e04ac/hold';
import { hold } from 'e53e04ac/hold';
import { unwrap } from 'e53e04ac/hold';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "devDependencies";
    B_0(["@types/node"]);
  end;
  A ----> B_0;
  click B_0 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/hold";
    E_0(["hold"]);
    E_1(["unwrap"]);
  end;
  M(["index.mjs"])
  E_0 ----> M;
  E_1 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/hold";
    E_0(["Get<T>"]);
    E_1(["ValueOrGet<T>"]);
    E_2(["Hold"]);
    E_3(["Unwrap"]);
    E_4(["hold"]);
    E_5(["unwrap"]);
  end;
  M(["index.d.ts"])
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
  E_3 ----> M;
  E_4 ----> M;
  E_5 ----> M;
~~~~~
