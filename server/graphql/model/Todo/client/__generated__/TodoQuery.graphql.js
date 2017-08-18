/**
 * @flow
 * @relayHash 24ebd5b7b0da2d0bd682b1c64ff14879
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TodoQueryResponse = {|
  +todo: ?{|
    +id: ?string;
    +objectId: ?string;
    +title: ?string;
    +content: ?string;
    +completed: ?boolean;
  |};
|};
*/


/*
query TodoQuery(
  $objectId: String
) {
  todo(objectId: $objectId) {
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
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "objectId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectId",
            "variableName": "objectId",
            "type": "String"
          }
        ],
        "concreteType": "TodoType",
        "name": "todo",
        "plural": false,
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
  "name": "TodoQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "objectId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "TodoQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectId",
            "variableName": "objectId",
            "type": "String"
          }
        ],
        "concreteType": "TodoType",
        "name": "todo",
        "plural": false,
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
  "text": "query TodoQuery(\n  $objectId: String\n) {\n  todo(objectId: $objectId) {\n    id\n    objectId\n    title\n    content\n    completed\n  }\n}\n"
};

module.exports = batch;
