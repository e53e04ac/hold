# hold

~~~~~ sh
npm install e53e04ac/hold
~~~~~

~~~~~ mjs
import { hold } from 'e53e04ac/hold';
import { unwrap } from 'e53e04ac/hold';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
  end;
  subgraph "devDependencies";
    B_0(["@types/node"]);
  end;
  A ----> B_0;
  click B_0 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
~~~~~
