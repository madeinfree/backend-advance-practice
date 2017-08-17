/**
 * @flow
 * @relayHash 56575af7475594ad3f2138a7a7bc4e99
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TodoQueryResponse = {|
  +todos: ?$ReadOnlyArray<?{|
    +objectId: ?string;
    +title: ?string;
    +content: ?string;
    +completed: ?boolean;
  |}>;
|};
*/


/*
query TodoQuery {
  todos {
    objectId
    title
    content
    completed
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "TodoType",
        "name": "todos",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "objectId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "content",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "queryRoot"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "TodoQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "TodoQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "TodoType",
        "name": "todos",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "objectId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "content",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query TodoQuery {\n  todos {\n    objectId\n    title\n    content\n    completed\n  }\n}\n"
};

module.exports = batch;
