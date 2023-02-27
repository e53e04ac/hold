# hold

~~~~~ sh
npm install e53e04ac/hold
~~~~~

~~~~~ mjs
import { hold } from 'hold';
import { unwrap } from 'hold';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "devDependencies";
    B_0(["@types/node"]);
  end;
  subgraph "npmjs";
    C_0(["@types/node\n18.14.2"]);
  end;
  A ----> B_0;
  B_0 ----> C_0;
  click C_0 "https://www.npmjs.com/package/@types/node/v/18.14.2";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/hold";
    E_0(["type Get<T>"]);
    E_1(["type ValueOrGet<T>"]);
    E_2(["type Hold"]);
    E_3(["type Unwrap"]);
    E_4(["const hold"]);
    E_5(["const unwrap"]);
  end;
  M["index.d.ts"]
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
  E_3 ----> M;
  E_4 ----> M;
  E_5 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/hold";
    E_0(["hold"]);
    E_1(["unwrap"]);
  end;
  M["index.mjs"]
  E_0 ----> M;
  E_1 ----> M;
~~~~~
