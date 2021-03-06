/**
 * @flow
 * @relayHash 05cab3a232c5a50561f319fde2ad0816
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TodosQueryResponse = {|
  +todos: ?$ReadOnlyArray<?{|
    +id: ?string;
    +objectId: ?string;
    +title: ?string;
    +content: ?string;
    +completed: ?boolean;
  |}>;
|};
*/


/*
query TodosQuery {
  todos {
    id
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
    "name": "TodosQuery",
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
            "name": "id",
            "storageKey": null
          },
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
  "name": "TodosQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "TodosQuery",
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
            "name": "id",
            "storageKey": null
          },
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
  "text": "query TodosQuery {\n  todos {\n    id\n    objectId\n    title\n    content\n    completed\n  }\n}\n"
};

module.exports = batch;
